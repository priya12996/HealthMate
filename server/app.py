from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.linear_model import LogisticRegression
import numpy as np

app = Flask(__name__)
CORS(app)

# ================= LOAD DATA =================
df = pd.read_csv("dataset.csv")

feature_columns = [
    "fever", "cough", "headache", "fatigue",
    "nausea", "vomiting", "diarrhea", "body_pain"
]

X = df[feature_columns]
y = df["disease"]

# ================= TRAIN MODELS =================
rf_model = RandomForestClassifier(n_estimators=200, random_state=42)
lr_model = LogisticRegression(max_iter=1000)

rf_model.fit(X, y)
lr_model.fit(X, y)

print("✅ Models trained successfully")

# ================= PREDICT =================
@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()

        features = np.array([[
            int(data.get("fever", 0)),
            int(data.get("cough", 0)),
            int(data.get("headache", 0)),
            int(data.get("fatigue", 0)),
            int(data.get("nausea", 0)),
            int(data.get("vomiting", 0)),
            int(data.get("diarrhea", 0)),
            int(data.get("body_pain", 0))
        ]])

        # 🔥 Prediction from both models
        rf_probs = rf_model.predict_proba(features)[0]
        lr_probs = lr_model.predict_proba(features)[0]

        classes = rf_model.classes_

        # 🔥 Combine probabilities (average)
        final_probs = (rf_probs + lr_probs) / 2

        # Top 3 predictions
        top_indices = final_probs.argsort()[-3:][::-1]

        results = []
        for i in top_indices:
            results.append({
                "disease": classes[i],
                "confidence": round(final_probs[i] * 100, 2)
            })

        # 🔥 Always return something (even low symptoms)
        return jsonify({"predictions": results})

    except Exception as e:
        return jsonify({"error": str(e)})

@app.route("/")
def home():
    return "API Running 🚀"

if __name__ == "__main__":
    app.run(debug=True)