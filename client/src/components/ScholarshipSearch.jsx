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
  CardHeader,
  Grid,
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
    <Container maxWidth="md" sx={{ mt: 10, mb: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Scholarship Search
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Find the perfect scholarship based on your caste and religion.
          </Typography>
        </Box>

        {/* Search Form */}
        <Box
          component="form"
          onSubmit={handleSearch}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            mb: 4,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextField
            label="Caste"
            variant="outlined"
            value={caste}
            onChange={(e) => setCaste(e.target.value)}
            fullWidth
            sx={{ maxWidth: { sm: "300px" } }}
          />
          <TextField
            label="Religion"
            variant="outlined"
            value={religion}
            onChange={(e) => setReligion(e.target.value)}
            fullWidth
            sx={{ maxWidth: { sm: "300px" } }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            sx={{ height: "56px" }}
          >
            Search
          </Button>
        </Box>

        {/* AI Feedback */}
        {aiFeedback && (
          <Box
            sx={{
              p: 2,
              mb: 4,
              borderRadius: 1,
              backgroundColor: "warning.light",
            }}
          >
            <Typography variant="body1">
              <strong>AI Feedback:</strong> {aiFeedback}
            </Typography>
          </Box>
        )}

       
        <Grid container spacing={3}>
          {scholarships?.map((sch, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
                  <CardHeader
                    title={sch.name}
                    subheader={capitalize(sch.institutionType)}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {sch.description}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      <strong>Eligible Castes:</strong> {sch.eligibleCastes?.join(", ")}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Eligible Religions:</strong> {sch.eligibleReligions?.join(", ")}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default ScholarshipSearch;

