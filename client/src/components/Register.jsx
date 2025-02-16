import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Link,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import RegisterImage from "../assets/register.jpg";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/api/auth/register", {
        name,
        email,
        password,
      });
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "url(https://source.unsplash.com/random/1600x900?landscape)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card
            sx={{
              display: "flex",
              borderRadius: 3,
              boxShadow: 3,
              overflow: "hidden",
            }}
          >
            {/* Left side: Image */}
            <CardMedia
              component="img"
              image={RegisterImage}
              alt="Register"
              loading="lazy"
              sx={{ width: { xs: "100%", md: "50%" }, objectFit: "cover" }}
            />
            {/* Right side: Registration Form */}
            <CardContent
              sx={{
                flex: 1,
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                p: 4,
              }}
            >
              <Typography
                variant="h4"
                align="center"
                gutterBottom
                sx={{ fontWeight: "bold" }}
              >
                Register
              </Typography>
              <Box component="form" onSubmit={handleRegister} sx={{ mt: 2 }}>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2, py: 1.5 }}
                >
                  Register
                </Button>
              </Box>
              <Box sx={{ mt: 2, textAlign: "center" }}>
                <Typography variant="body2">
                  Already have an account?{" "}
                  <Link component={RouterLink} to="/login" underline="hover">
                    Login
                  </Link>
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Register;
