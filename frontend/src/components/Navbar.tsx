import { getSignedInUserDetails } from "@/utils/authUtils";
import {
  AppBar,
  Avatar,
  Button,
  ButtonGroup,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <AppBar position="sticky" color="default">
      <Toolbar sx={{ gap: "1.5rem", justifyContent: "space-between" }}>
        {/* Navbar Logo  */}
        <Typography
          letterSpacing={2}
          variant="h5"
          fontWeight="bolder"
          component={Link}
          to="/"
          sx={(props) => ({
            textDecoration: "none",
            color: props.palette.secondary.main,
          })}
        >
          BLOSSOM
        </Typography>

        {/* Navbar Links */}
        <NavLinks />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

/**
 * ============== DATA ============
 */

/**
 * ======= Custom Component =============
 */

const NavLinks: React.FC = () => {
  const { pathname } = useLocation();
  const user = getSignedInUserDetails();

  // If not signed in
  let navLinks = [
    {
      url: "/auth/customer",
      label: "Customer",
    },
    {
      url: "/auth/vendor",
      label: "Vendor",
    },
  ];

  // If Signed In & Is Vendor
  if (user && user.isVendor) {
    navLinks = [
      {
        url: "/dashboard",
        label: "Dashboard",
      },
    ];
  }

  // If Signed In & Is Customer
  if (user && !user.isVendor) {
    navLinks = [];
  }

  return (
    <Stack direction="row" gap="1rem" alignItems="center">
      <ButtonGroup variant="outlined">
        {navLinks.map((navlink) => (
          <Button
            key={navlink.url}
            component={NavLink}
            to={navlink.url}
            color="secondary"
            variant={
              pathname?.startsWith(navlink.url) ? "contained" : "outlined"
            }
          >
            {navlink.label}
          </Button>
        ))}
      </ButtonGroup>

      {/* User Menu */}
      {user && <Avatar sx={{ width: "2.5rem", height: "2.5rem" }} />}
    </Stack>
  );
};
