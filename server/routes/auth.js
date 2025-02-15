const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const User = require("../models/User.js");

// Set a fallback for random bytes generation using Node's crypto module
bcrypt.setRandomFallback(() => crypto.randomBytes(16));

//register
router.post("/register", async (req, res) => {
  try {
    // Use name if your model uses that field
    const { name, email, password, caste, religion } = req.body;

    console.log("Received password:", password, "type:", typeof password);

    if (!password || typeof password !== "string" || password.trim() === "") {
      return res.status(400).json({
        message: "Password is required and must be a non-empty string",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Converting password to string
    const safePassword = String(password);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(safePassword, salt);
    console.log("Hashed password:", hashedPassword);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      caste,
      religion,
    });

    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(201).json({
      message: "User created successfully",
      token,
      user: { id: newUser._id, name, email, caste, religion },
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: error.message });
  }
});

//login

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User not found!",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Credentials",
      });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.json({
      message: "User logged in successfully",
      token,
      user: {
        id: user._id,
        name: user.name,
        caste: user.caste,
        religion: user.religion,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
