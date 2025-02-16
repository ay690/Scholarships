import React from "react";
import { Container, Typography, Grid, Card } from "@mui/material";

const ScholarshipAwards = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Scholarships Awarded
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <Card sx={{ p: 3, textAlign: "center" }}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Local Scholarships
            </Typography>
            <Typography variant="h3" color="primary" sx={{ my: 2 }}>
              120+
            </Typography>
            <Typography variant="body1">
              Scholarships for local institutions
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ p: 3, textAlign: "center" }}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              State Scholarships
            </Typography>
            <Typography variant="h3" color="primary" sx={{ my: 2 }}>
              85+
            </Typography>
            <Typography variant="body1">
              Scholarships from state-level programs
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ p: 3, textAlign: "center" }}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Government Scholarships
            </Typography>
            <Typography variant="h3" color="primary" sx={{ my: 2 }}>
              45+
            </Typography>
            <Typography variant="body1">
              National scholarships by the government
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ScholarshipAwards;
