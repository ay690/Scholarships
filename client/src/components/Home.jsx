import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { TestimonialSection, ScholarshipAwards } from "./index";
import HomeVideo from "../assets/home.mp4";

const Home = () => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate("/search");
  };

  return (
    <div>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: "80vh",
          overflow: "hidden",
          borderRadius: "0 0 20px 20px",
        }}
      >
        <video
          autoPlay
          loop
          muted
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source src={HomeVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            px: 2,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: "white",
              fontWeight: 500,
              textAlign: "center",
              fontSize: { xs: "2.5rem", md: "4rem" },
              mb: 2,
            }}
          >
            Discover Scholarships That Empower You
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearchClick}
          >
            Search Scholarships
          </Button>
        </Box>
      </Box>
      <ScholarshipAwards />
      <TestimonialSection />
    </div>
  );
};

export default Home;
