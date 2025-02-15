import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";

const ScholarshipSearch = () => {
  const [scholarships, setScholarships] = useState([]);
  const [caste, setCaste] = useState("");
  const [religion, setReligion] = useState("");
  const [aiFeedback, setAIFeedback] = useState("");
  

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "http://localhost:5001/api/scholarships/search",
        { caste, religion },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("API Response:", res.data);
      setScholarships(res.data?.data);
      setAIFeedback(res.data?.aiFeedback);
    } catch (err) {
      console.error(err);
    }
  };

  const capitalize = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <Container maxWidth="md">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Box sx={{ mt: 4 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="h4" gutterBottom>
              Scholarship Search
            </Typography>
           
          </Box>
          <form
            onSubmit={handleSearch}
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <TextField
              label="Caste"
              variant="outlined"
              value={caste}
              onChange={(e) => setCaste(e.target.value)}
              sx={{ mr: 2, width: "30%" }}
            />
            <TextField
              label="Religion"
              variant="outlined"
              value={religion}
              onChange={(e) => setReligion(e.target.value)}
              sx={{ mr: 2, width: "30%" }}
            />
            <Button type="submit" variant="contained" color="primary">
              Search
            </Button>
          </form>
          <Typography variant="h5" gutterBottom>
            Results
          </Typography>
          {scholarships?.map((sch, index) => (
            <Card key={index} sx={{ mb: 2 }}>
              <CardContent>
                <Typography variant="h6">{sch.name}</Typography>
                <Typography variant="body2">{sch.description}</Typography>
                <Typography variant="body2">
                  <strong>Eligible Castes:</strong>{" "}
                  {sch.eligibleCastes?.join(", ")}
                </Typography>
                <Typography variant="body2">
                  <strong>Eligible Religions:</strong>{" "}
                  {sch.eligibleReligions?.join(", ")}
                </Typography>
                <Typography variant="body2">
                  <strong>Institution Type:</strong>{" "}
                  {capitalize(sch.institutionType)}
                </Typography>
              </CardContent>
            </Card>
          ))}
          {aiFeedback && (
            <Box
              sx={{ mt: 3, p: 2, backgroundColor: "#fff3cd", borderRadius: 1 }}
            >
              <Typography variant="body1">
                <strong>AI Feedback:</strong> {aiFeedback}
              </Typography>
            </Box>
          )}
        </Box>
      </motion.div>
    </Container>
  );
};

export default ScholarshipSearch;