import React, { useEffect } from "react";
import { Container, Typography, Grid, Card } from "@mui/material";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const AnimatedNumber = ({ value }) => {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(motionValue, value, { duration: 2 });
    return controls.stop;
  }, [value, motionValue]);

  return <motion.span>{rounded}</motion.span>;
};

const ScholarshipAwards = () => {
  return (
    <Container sx={{ py: 5 }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
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
                <AnimatedNumber value={120} />+
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
                <AnimatedNumber value={85} />+
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
                <AnimatedNumber value={45} />+
              </Typography>
              <Typography variant="body1">
                National scholarships by the government
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default ScholarshipAwards;
