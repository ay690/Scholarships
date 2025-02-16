import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../assets/logo.svg";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  // Set currentTab to 1 if on '/search', otherwise default to 0 (for Home)
  const currentTab = location.pathname === "/search" ? 1 : 0;

  const navLinks = [
    { label: "Home", to: "/home" },
    { label: "Scholarship Search", to: "/search" },
  ];

  return (
    <AppBar position="fixed" sx={{ background: "#5b88d7" }}>
      <Toolbar>
        {/* Left side: Logo and Title */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={Logo}
            alt="Logo"
            style={{ marginRight: "5px", height: "40px" }}
          />
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            OpenScholar
          </Typography>
        </Box>

        {/* Right side: Navigation */}
        <Box sx={{ marginLeft: "auto", display: "flex", alignItems: "center" }}>
          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerToggle}
              >
                <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle}>
                  <List>
                    {navLinks.map((link, index) => (
                      <ListItem key={index} disablePadding>
                        <ListItemButton component={RouterLink} to={link.to}>
                          <ListItemText primary={link.label} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                    <ListItem disablePadding>
                      <ListItemButton onClick={handleLogout}>
                        <ListItemText primary="Logout" />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <>
              <Tabs
                value={currentTab}
                textColor="inherit"
                TabIndicatorProps={{ style: { backgroundColor: "white" } }}
                sx={{ mr: 2 }}
              >
                {navLinks.map((link, index) => (
                  <Tab
                    key={index}
                    label={link.label}
                    component={RouterLink}
                    to={link.to}
                  />
                ))}
              </Tabs>
              <Button
                variant="outlined"
                color="inherit"
                onClick={handleLogout}
                sx={{ borderRadius: 2, borderColor: "white", color: "white" }}
              >
                Logout
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

