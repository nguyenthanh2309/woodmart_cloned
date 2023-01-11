import React, { useState, useRef } from "react";

import { Link } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
  IconButton,
  Badge,
  useTheme,
} from "@mui/material";

import {
  ExpandMore,
  Search,
  CompareArrows,
  FavoriteBorderOutlined,
  ShoppingCartCheckoutOutlined,
} from "@mui/icons-material";

import logo from "../assets/logo/wood-logo-dark.svg";

import { links } from "../data/index";

const NavBar = () => {
  const { palette } = useTheme();

  const navLinkText = {
    fontSize: "14px",
    fontWeight: 600,
    color: `${palette.grey.main}`,
    transition: "all .25s ease",
    "&:hover": {
      color: `${palette.primary.main}`,
    },
  };

  const toolButtonTextStyle = {
    fontSize: "14px",
    fontWeight: 600,
    color: `${palette.grey.main}`,
    "&:hover": {
      color: `${palette.grey.light}`,
    },
  };

  const iconButtonStyle = {
    color: `${palette.grey.main}`,
    "&:hover": {
      color: `${palette.grey.light}`,
    },
  };

  const dropDownStyle = {
    position: "absolute",
    top: "100%",
    left: 0,
    p: "12px 20px",
    mt: "15px",
    background: `${palette.secondary.main}`,
    minWidth: "220px",
    boxShadow: "0 0 3px rgb(0 0 0 / 15%)",
    borderRadius: "8px",
    display: "none",
  };

  const handleOpen = (index) => {
    const dropDownMenus = document.querySelectorAll(".dropdown-menu");
    dropDownMenus[index].classList.remove(
      "animate__animated",
      "animate__fadeOutDown",
      "animate__faster"
    );
    dropDownMenus[index].classList.add(
      "animate__animated",
      "animate__fadeInUp",
      "animate__faster"
    );
    dropDownMenus[index].style.display = "block";
  };

  const handleClose = (index) => {
    const dropDownMenus = document.querySelectorAll(".dropdown-menu");
    dropDownMenus[index].classList.remove(
      "animate__animated",
      "animate__fadeInUp",
      "animate__faster"
    );
    dropDownMenus[index].classList.add(
      "animate__animated",
      "animate__fadeOutDown",
      "animate__faster"
    );
    setTimeout(() => {
      dropDownMenus[index].style.display = "none";
    }, 500);
  };

  return (
    <AppBar
      sx={{
        background: "transparent",
        boxShadow: "none",
      }}
    >
      <Container fixed>
        <Toolbar
          disablePadding
          sx={{
            height: 90,
          }}
        >
          <Box maxWidth="180px" mr={"30px"} ml={"-20px"}>
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                style={{
                  width: "100%",
                }}
              />
            </Link>
          </Box>
          <Box
            sx={{
              flexBasis: "100%",
            }}
          >
            <List
              disablePadding
              sx={{
                display: "flex",
              }}
            >
              {links.map((link) => {
                return (
                  <ListItem
                    key={link.id}
                    sx={{
                      py: 0,
                      pr: "15px",
                      position: "relative",
                    }}
                    onMouseOver={() => handleOpen(link.id - 1)}
                    onMouseLeave={() => handleClose(link.id - 1)}
                  >
                    <ListItemText
                      primary={
                        <Link to={link.path}>
                          <Typography noWrap component="span" sx={navLinkText}>
                            {link.name}
                          </Typography>
                        </Link>
                      }
                      secondary={
                        <ExpandMore
                          fontSize={"14px"}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            color: `${palette.grey.light}`,
                          }}
                        />
                      }
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    />
                    <Box className="dropdown-menu" sx={dropDownStyle}>
                      <List disablePadding>
                        <ListItem
                          disablePadding
                          alignItems="flex-start"
                          sx={{
                            flexDirection: "column",
                            gap: "8px",
                          }}
                        >
                          {link.subLinks.map((subLink) => {
                            return (
                              <ListItemText
                                primary={
                                  <Link to={subLink.path}>
                                    <Typography
                                      noWrap
                                      component="span"
                                      sx={{
                                        ...navLinkText,
                                        color: `${palette.grey.light}`,
                                      }}
                                    >
                                      {subLink.name}
                                    </Typography>
                                  </Link>
                                }
                                disableTypography
                                disablePadding
                              />
                            );
                          })}
                        </ListItem>
                      </List>
                    </Box>
                  </ListItem>
                );
              })}
            </List>
          </Box>
          <Box>
            <List
              sx={{
                display: "flex",
              }}
            >
              <ListItem
                px={"10px"}
                sx={{
                  py: 0,
                  px: "10px",
                }}
              >
                <Link to="/">
                  <Typography
                    noWrap
                    component={"span"}
                    sx={toolButtonTextStyle}
                  >
                    Login / Register
                  </Typography>
                </Link>
              </ListItem>
              <ListItem
                px={"10px"}
                sx={{
                  py: 0,
                  px: "10px",
                }}
              >
                <IconButton
                  disableRipple
                  sx={{
                    p: 0,
                  }}
                >
                  <Search sx={iconButtonStyle} />
                </IconButton>
              </ListItem>
              <ListItem
                px={"10px"}
                sx={{
                  py: 0,
                  px: "10px",
                }}
              >
                <Badge badgeContent={3} color="primary">
                  <Link to="compare">
                    <CompareArrows sx={iconButtonStyle} />
                  </Link>
                </Badge>
              </ListItem>
              <ListItem
                px={"10px"}
                sx={{
                  py: 0,
                  px: "10px",
                }}
              >
                <Badge badgeContent="0" color="primary">
                  <Link to="wishlist">
                    <FavoriteBorderOutlined sx={iconButtonStyle} />
                  </Link>
                </Badge>
              </ListItem>
              <ListItem
                px={"10px"}
                sx={{
                  py: 0,
                  px: "10px",
                }}
              >
                <ListItemText
                  primary={
                    <Badge badgeContent="2" color="primary">
                      <ShoppingCartCheckoutOutlined sx={iconButtonStyle} />
                    </Badge>
                  }
                  secondary={
                    <Typography
                      noWrap
                      component={"span"}
                      sx={{
                        ...toolButtonTextStyle,
                        ml: "15px",
                      }}
                    >
                      $0.00
                    </Typography>
                  }
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                />
              </ListItem>
            </List>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
