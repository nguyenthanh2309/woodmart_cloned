import React, { useState, useRef } from "react";

import { Link } from "react-router-dom";

import {
  Container,
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";

import { categories } from "../data";
import { ContactSupportOutlined } from "@mui/icons-material";

const CategoryItem = ({ name, path, total, src }) => {
  const { palette } = useTheme();

  return (
    <>
      <Box
        sx={{
          maxWidth: "132px",
        }}
      >
        <Link to={path}>
          <img
            src={src}
            alt="category"
            style={{
              width: "100%",
              borderRadius: "50%",
            }}
            className="category-img"
          />
        </Link>
      </Box>
      <Box
        sx={{
          p: "10px",
        }}
      >
        <ListItemText
          primary={
            <Typography
              variant="h3"
              sx={{
                fontSize: 18,
                fontWeight: 600,
                color: `${palette.grey.main}`,
                textAlign: "center",
              }}
              gutterBottom
            >
              {name}
            </Typography>
          }
          secondary={
            <Typography
              variant="h6"
              sx={{
                fontSize: 14,
                color: `${palette.grey.light}`,
                textAlign: "center",
              }}
            >
              {total} products
            </Typography>
          }
        />
      </Box>
    </>
  );
};

const Category = () => {
  const images = document.querySelectorAll('.category-img');

  const handleMouseOver = (index) => {
    images[index - 1].style.transform = 'scale(1.1)'
    console.log(images)
  }
  
  const handleMouseLeave = (index) => {
    images[index - 1].style.transform = 'scale(1)'
  }
  
  console.log(images)

  return (
    <section className="woodmart-category">
      <Container
        fixed
        sx={{
          pt: "80px",
          pb: "40px",
        }}
      >
        <List
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {categories.map((category) => {
            return (
              <ListItem
                key={category.id}
                sx={{
                  flexDirection: "column",
                }}
                onMouseOver={() => handleMouseOver(category.id)}
                onMouseLeave={() => handleMouseLeave(category.id)}
              >
                <CategoryItem
                  name={category.name}
                  path={category.path}
                  total={category.total}
                  src={category.src}
                />
              </ListItem>
            );
          })}
        </List>
      </Container>
    </section>
  );
};

export default Category;
