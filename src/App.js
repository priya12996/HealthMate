import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Hospitals from "./components/Hospitals/Hospitals";

import Header from "./components/Header/Header/Header";
import Footer from "./components/Header/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Doctors from "./components/Services/Doctors/Doctors";
import Appointment from "./components/Services/Appointment/Appointment";
import ServiceDetails from "./components/Services/ServiceDetails/ServiceDetails";
import Login from "./components/Login/Login/Login";
import Register from "./components/Login/Login/Register/Register";
import Notfound from "./components/Notfound/Notfound";
import PrivetRoute from "./PrivetRoute/PrivetRoute";
import DietPlan from "./components/DietPlan";
import DietSuggestion from "./components/DietSuggestion";
import SymptomChecker from "./components/SymptomChecker";
import WaterTracker from "./components/WaterTracker/WaterTracker";
import Chatbot from "./components/Chatbot/Chatbot";
import HealthChallenge from "./components/Gamification/HealthChallenge";
import BMICalculator from "./components/BMI/BMICalculator";
import Quiz from "./components/Quiz/Quiz";

import Authprovider from "./Context/Authprovider";

import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

export const myTheme = createTheme({
  palette: {
    primary: { main: "#e91e63" },
    secondary: { main: "#f48fb1" },
    alternate: { main: "#fff" },
    text: { secondary: "#212121" },
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <Authprovider>
      <ThemeProvider theme={myTheme}>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />

            <Route
              path="/doctors"
              element={
                <PrivetRoute>
                  <Doctors />
                </PrivetRoute>
              }
            />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Login />} />

            <Route
              path="/appointment"
              element={
                <PrivetRoute>
                  <Appointment />
                </PrivetRoute>
              }
            />

            {/* Services Page */}
            <Route
              path="/services"
              element={
                <>
                  <Services />

                  <div className="feature-wrapper"></div>
                  <div className="feature-container">
                    <div className="feature-box">
                      <h2>Symptom Checker</h2>
                      <SymptomChecker />
                    </div>

                    <div className="feature-box">
                      <h2>Diet & Nutrition Suggestion</h2>
                      <DietSuggestion />
                      <DietPlan />
                    </div>
                  </div>
                </>
              }
            />
<Route path="/hospitals" element={<Hospitals />} />

            <Route
              path="/services/details/:servId"
              element={
                <PrivetRoute>
                  <ServiceDetails />
                </PrivetRoute>
              }
            />

            <Route path="*" element={<Notfound />} />
          </Routes>

          {/* Bottom Feature Section (unchanged) */}
          <div className="feature-container">
            <div className="feature-box">
              <h2>BMI Calculator</h2>
              <BMICalculator />
            </div>

            <div className="feature-box">
              <h2>💬 Health Chatbot</h2>
              <Chatbot />
            </div>

            <div className="feature-box">
              <h2>🎮 Health Quiz</h2>
              <Quiz />
            </div>

            <div className="feature-box">
              <h2>Water Intake Tracker</h2>
              <WaterTracker />
            </div>
          </div>

          <HealthChallenge />
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </Authprovider>
  );
}

export default App;
