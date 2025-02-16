import React from "react";
import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Logo from "../assets/logo.svg";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Box sx={{ backgroundColor: "#3a37c0", color: "white", py: 4 }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img
                  src={Logo}
                  alt="Logo"
                  style={{ marginRight: "8px", height: "40px" }}
                />
                <Typography variant="h6">OpenScholar</Typography>
              </Box>
              <Typography variant="body2" sx={{ mt: 1 }}>
                1234 Scholarship Lane, Mumbai, India
              </Typography>
              <Typography variant="body2">
                Email: info@myscholarshipapp.com | Phone: +123 456 7890
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{ textAlign: { xs: "left", sm: "right" } }}
            >
              <Typography variant="h6">Follow Us</Typography>
              <Box sx={{ mt: 1 }}>
                <IconButton color="inherit" href="#">
                  <FacebookIcon />
                </IconButton>
                <IconButton color="inherit" href="#">
                  <TwitterIcon />
                </IconButton>
                <IconButton color="inherit" href="#">
                  <InstagramIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            © {new Date().getFullYear()} MyScholarshipApp. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </motion.div>
  );
};

export default Footer;
