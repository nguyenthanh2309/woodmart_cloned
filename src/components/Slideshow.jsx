import React from "react";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  useTheme,
} from "@mui/material";

import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";

import { slides } from "../data";

const Slideshow = () => {
  const { palette } = useTheme();

  const splideOption = {
    type: "slide",
    autoplay: true,
    rewind: true,
    drag: true,
    rewindByDrag: true,
    interval: 3000,
    speed: 1000,
    rewindSpeed: 1000,
  };

  const textButton = {
    textTransform: "uppercase",
    fontSize: 13,
    fontFamily: "Jost, sans-serif",
    fontWeight: 600,
  };

  return (
    <Splide tag="section" hasTrack={false} options={splideOption}>
      <SplideTrack>
        {slides.map((slide) => {
          return (
            <SplideSlide key={slide.id}>
              <img src={slide.src} alt="slideshow" />
              <Container
                fixed
                sx={{
                  position: "absolute",
                  top: "32%",
                  left: "50%",
                  transform: "translate(-50%)",
                }}
              >
                <Grid container>
                  <Grid item lg={5}>
                    <Typography
                      variant="h1"
                      sx={{
                        color: `${palette.grey.dark}`,
                        fontWeight: 600,
                        fontSize: 72,
                        lineHeight: "82px",
                        mb: "20px",
                      }}
                    >
                      {slide.content.title}
                    </Typography>
                    <Typography
                      paragraph
                      sx={{
                        color: `${palette.grey.light}`,
                        fontFamily: "Jost, sans-serif",
                        lineHeight: "26px",
                        mb: "30px",
                      }}
                    >
                      {slide.content.description}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        gap: "15px",
                      }}
                    >
                      <Button
                        variant="contained"
                        href="/"
                        sx={{
                          p: "12px 20px",
                          borderRadius: "5px",
                          boxShadow: "inset 0 0 200px rgb(0 0 0 / 10%)",
                        }}
                        disableRipple
                      >
                        <Typography sx={textButton} component="span">
                          to shop
                        </Typography>
                      </Button>
                      <Button
                        variant="outlined"
                        href="/"
                        sx={{
                          p: "10px 20px",
                          borderRadius: "5px",
                          border: `1px solid #E9E9E9`,
                          "&:hover": {
                            backgroundColor: '#E9E9E9',
                            border: `1px solid #E9E9E9`,
                          },
                        }}
                        disableRipple
                        disableTouchRipple
                        disableFocusRipple
                      >
                        <Typography
                          component="span"
                          sx={{
                            ...textButton,
                            color: `${palette.grey.main}`,
                          }}
                        >
                          read more
                        </Typography>
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Container>
            </SplideSlide>
          );
        })}
      </SplideTrack>
    </Splide>
  );
};

export default Slideshow;
