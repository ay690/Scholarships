import React from "react";
import { Container, Typography } from "@mui/material";

const Home = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4">Home</Typography>
      <Typography variant="body1">This is the home page.</Typography>
    </Container>
  );
};

export default Home;
