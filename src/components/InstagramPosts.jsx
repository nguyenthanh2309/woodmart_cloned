import React from "react";

import {
  Box,
  Typography,
  IconButton,
  ImageList,
  ImageListItem,
  useTheme,
} from "@mui/material";
import {
  FavoriteBorderOutlined,
  ModeCommentOutlined,
} from "@mui/icons-material";

import { posts } from "../data";

const InstagramPosts = () => {
  const { palette } = useTheme();

  const iconButtonStyle = {
    fontSize: 28,
    color: `${palette.secondary.main}`,
  };

  const textStyle = {
    display: "inline-block",
    ml: "3px",
    fontWeight: 600,
    fontFamily: 'Jost, sans-serif'
  };

  return (
    <section className="woodmart-instagram-posts">
      <ImageList gap={0} cols={8} sx={{
        m: 0
      }}>
        {posts.map((post) => {
          return (
            <ImageListItem
              key={post.id}
              sx={{
                position: "relative",
              }}
            >
              <img src={post.image} alt="post" />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <IconButton sx={iconButtonStyle}>
                  <FavoriteBorderOutlined />
                  <Typography
                    component="span"
                    sx={textStyle}
                  >
                    {post.likes}
                  </Typography>
                </IconButton>
                <IconButton sx={iconButtonStyle}>
                  <ModeCommentOutlined />
                  <Typography
                    component="span"
                    sx={textStyle}
                  >
                    {post.comments}
                  </Typography>
                </IconButton>
              </Box>
            </ImageListItem>
          );
        })}
      </ImageList>
    </section>
  );
};

export default InstagramPosts;
