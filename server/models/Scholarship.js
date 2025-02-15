const mongoose = require("mongoose");

const ScholarshipSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  eligibleCastes: [
    {
      type: String,
    },
  ],

  eligibleReligions: [
    {
      type: String,
    },
  ],

  institutionType: {
    type: String,
    enum: ["local", "government", "state"],
    required: true,
  },
  
});

module.exports = mongoose.model("Scholarship", ScholarshipSchema);
