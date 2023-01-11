import React from "react";

import {
  Container,
  Box,
  Toolbar,
  List,
  ListItem,
  Typography,
  useTheme,
} from "@mui/material";

import { Link } from "react-router-dom";

import logo from "../assets/logo/wood-logo-white-reserve.svg";

const Footer = () => {
  const { palette } = useTheme();

  const links = [
    {
      id: 1,
      name: "about us",
      path: "about_us",
    },
    {
      id: 2,
      name: "privacy policy",
      path: "privacy_policy",
    },
    {
      id: 3,
      name: "shipping",
      path: "shipping",
    },
    {
      id: 4,
      name: "track order",
      path: "track_order",
    },
    {
      id: 5,
      name: "faqs",
      path: "faqs",
    },
  ];

  class linkStyle {
    constructor(
      fontSize,
      color,
      fontFamily,
      fontWeight = 400,
      textTransform = "uppercase"
    ) {
      this.fontSize = fontSize;
      this.color = color;
      this.fontFamily = fontFamily;
      this.fontWeight = fontWeight;
      this.textTransform = textTransform;
    }
  }

  return (
    <footer
      className="woodmart-footer"
      style={{
        background: "rgb(16,16,16)",
      }}
    >
      <Container
        fixed
        sx={{
          py: "25px",
        }}
      >
        <Toolbar disableGutters sx={{
            justifyContent: 'space-between'
        }}>
          <Box sx={{
            maxWidth: '180px'
          }}>
            <img src={logo} alt="logo" width={"100%"} />
          </Box>
          <Box>
            <ListItem disablePadding>
              {links.map((link) => {
                return (
                  <ListItem key={link.id}>
                    <Link to="/">
                      <Typography
                        component="span"
                        sx={
                          new linkStyle(
                            13,
                            `${palette.secondary.main}`,
                            "Jost, sans-serif",
                            600
                          )
                        }
                      >
                        {link.name}
                      </Typography>
                    </Link>
                  </ListItem>
                );
              })}
            </ListItem>
          </Box>
          <Box>
            <Typography
              variant="h6"
              sx={
                new linkStyle(
                  14,
                  `${palette.secondary.main}`,
                  "Jost, sans-serif",
                  400,
                  "none"
                )
              }
            >
              Xtemos Studio Copyright © 2022
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </footer>
  );
};

export default Footer;
