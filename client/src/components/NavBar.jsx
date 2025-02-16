import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Button,
  Box,
} from "@mui/material";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  // Set currentTab to 1 if on '/search', otherwise default to 0 (for Home)
  const currentTab = location.pathname === "/search" ? 1 : 0;

  return (
    <AppBar position="static" sx={{ background: "#1B1212" }}>
      <Toolbar>
        {/* Logo on the left */}
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          OpenScholar
        </Typography>

        {/* Tabs and Logout button on the right */}
        <Box sx={{ marginLeft: "auto", display: "flex", alignItems: "center" }}>
          <Tabs
            value={currentTab}
            textColor="inherit"
            TabIndicatorProps={{ style: { backgroundColor: "white" } }}
            sx={{ mr: 2 }}
          >
            <Tab label="Home" component={RouterLink} to="/home" />
            <Tab
              label="Scholarship Search"
              component={RouterLink}
              to="/search"
            />
          </Tabs>
          <Button
            variant="outlined"
            color="inherit"
            onClick={handleLogout}
            sx={{ borderRadius: 2, borderColor: "white", color: "white" }}
          >
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
