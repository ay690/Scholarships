const express = require("express");
const router = express.Router();
const Scholarship = require("../models/Scholarship.js");
const authenticate = require("../middleware/authenticate.js");
const { Groq } = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// search api 
router.post("/search", async (req, res) => {
  try {
    // Define the prompt to get a JSON array in the desired structure.
    const prompt = `Provide a JSON array of scholarship objects. Each object should have the following keys:
- name (string)
- description (string)
- eligibleCastes (an array of strings)
- eligibleReligions (an array of strings)
- institutionType (string, one of "local", "government", or "state")

The output must be valid JSON and not contain any additional text. For example:
[
  {
    "name": "OBC Merit Scholarship",
    "description": "Scholarship for OBC students with high academic performance.",
    "eligibleCastes": ["OBC"],
    "eligibleReligions": ["Hindu", "Muslim"],
    "institutionType": "government"
  }
]`;

    // Calling the Groq API to get the scholarship JSON.
    const aiResponse = await groq.chat.completions.create({
      model: "mixtral-8x7b-32768",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 1500,
    });

    // Extract the returned text.
    const jsonString = aiResponse.choices[0].message.content;
    console.log("Groq API raw response:", jsonString);

    let scholarships;
    try {
      scholarships = JSON.parse(jsonString);
    } catch (parseError) {
      return res.status(500).json({
        message: "Failed to parse JSON from Groq API response.",
        error: parseError.message,
      });
    }

    // Insert the scholarships into MongoDB.
    const insertedScholarships = await Scholarship.insertMany(scholarships);
    res.json({
      message: "Scholarships imported successfully.",
      data: insertedScholarships,
    });
  } catch (err) {
    console.error("Scholarship Import Error:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
