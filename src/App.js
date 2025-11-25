import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header/Header";
import Home from "./components/Home/Home";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Notfound from "./components/Notfound/Notfound";
import Footer from "./components/Header/Footer/Footer";
import DietPlan from "./components/DietPlan";
import Login from "./components/Login/Login/Login";
import Register from "./components/Login/Login/Register/Register";
import Authprovider from "./Context/Authprovider";
import Services from "./components/Services/Services";
import Doctors from "./components/Services/Doctors/Doctors";
import Appointment from "./components/Services/Appointment/Appointment";
import ServiceDetails from "./components/Services/ServiceDetails/ServiceDetails";
import PrivetRoute from "./PrivetRoute/PrivetRoute";
import SymptomChecker from "./components/SymptomChecker";
import WaterTracker from "./components/WaterTracker/WaterTracker";
import Chatbot from "./components/Chatbot/Chatbot";
import HealthChallenge from "./components/Gamification/HealthChallenge";
import BMICalculator from "./components/BMI/BMICalculator";
import React from "react";
import DietSuggestion from "./components/DietSuggestion";
import Quiz from "./components/Quiz/Quiz"; 
export const myTheme = createTheme({
  palette: {
    primary: {
      main: "#e91e63",
    },
    secondary: {
      main: "#f48fb1",
    },
    alternate: {
      main: "#fff",
    },
    text: {
      secondary: "#212121",
    },
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

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivetRoute path="/doctors">
              <Doctors />
            </PrivetRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/profile">
              <Login />
            </Route>
            <PrivetRoute path="/appointment">
              <Appointment />
            </PrivetRoute>

            
            <Route exact path="/services">
              <Services />

              
              <div className="feature-wrapper"></div>
              <div className="feature-container">
                <div className="feature-box">
                  <h2> Symptom Checker</h2>
                  <SymptomChecker />
                </div>
                <div className="feature-box">
                  <h2> Diet & Nutrition Suggestion</h2>
                  <DietSuggestion />
                  <DietPlan/>
                </div>
              </div>
            </Route>

            <PrivetRoute exact path="/services/details/:servId">
              <ServiceDetails />
            </PrivetRoute>
            <Route path="*">
              <Notfound />
            </Route>
          </Switch>

          <div className="feature-container">
            <div className="feature-box">
              <h2> BMI Calculator</h2>
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
