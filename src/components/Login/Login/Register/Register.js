import React, { useState, useContext } from "react";
import { AuthContext } from "../../../../Context/Authprovider";
import { useNavigate, Link } from "react-router-dom";
//import { useHistory } from "react-router-dom";
//import { useNavigate } from "react-router-dom";


import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
} from "@mui/material";

const Register = () => {
  const { register } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // ✔ Correct for React Router v6

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✔ Await register() because most auth functions are async
    const success = await register(name, email, password);

    if (success) {
      navigate("/login"); // ✔ Correct routing
    } else {
      alert("Registration failed! 😔");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #f48fb1, #f8bbd0)",
      }}
    >
      <Card sx={{ width: 400, borderRadius: 3, boxShadow: 5 }}>
        <CardContent>
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#e91e63" }}
          >
            Create Account
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Full Name"
              variant="outlined"
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <TextField
              fullWidth
              label="Email"
              type="email"
              variant="outlined"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                borderRadius: 2,
                background: "linear-gradient(45deg, #e91e63, #f06292)",
              }}
            >
              Register
            </Button>
          </form>

          <Typography align="center" sx={{ mt: 2 }}>
            Already have an account?{" "}
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                color: "#e91e63",
                fontWeight: "bold",
              }}
            >
              Login
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Register;
