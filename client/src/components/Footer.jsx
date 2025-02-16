import React from "react";
import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#333", color: "white", py: 4 }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">MyScholarshipApp</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              1234 Scholarship Lane, Mumbai, India
            </Typography>
            <Typography variant="body2">
              Email: info@myscholarshipapp.com | Phone: +123 456 7890
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ textAlign: { xs: "left", sm: "right" } }}>
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
  );
};

export default Footer;
