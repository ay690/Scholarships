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

  const currentTab = location.pathname === "/search" ? 1 : 0;

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Logo on the left */}
        <Typography variant="h6">MyScholarshipApp</Typography>

        {/* Place the tabs and logout button on the right */}
        <Box sx={{ marginLeft: "auto", display: "flex", alignItems: "center" }}>
          <Tabs
            value={currentTab}
            textColor="inherit"
            // indicatorColor="secondary"
            TabIndicatorProps={{ style: { backgroundColor: "white" } }}
          >
            <Tab 
            label="Home" 
            component={RouterLink} 
            to="/home" />

            <Tab
              label="Scholarship Search"
              component={RouterLink}
              to="/search"
            />
          </Tabs>
          
          <Button
            color="inherit"
            onClick={handleLogout}
            sx={{ borderRadius: 2 }}
          >
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
