import React from "react";

import {
  Container,
  Box,
  ImageList,
  ImageListItem,
  Button,
  Typography,
  useTheme,
} from "@mui/material";

import banner1 from "../assets/banners/accessories-banner-1.jpg.webp";
import banner2 from "../assets/banners/accessories-banner-2.jpg.webp";
import banner3 from "../assets/banners/accessories-banner-3.jpg.webp";
import banner4 from "../assets/banners/wood-accessories-category-4-opt.jpg.webp";

const CTA = () => {
  const { palette } = useTheme();

  class buttonTextStyle {
    constructor(color, fontFamily, fontSize, fontWeight) {
      this.color = color;
      this.fontFamily = fontFamily;
      this.fontSize = fontSize;
      this.fontWeight = fontWeight;
    }
  }

  const CustomButton = ({ variant, href, children }) => {
    class buttonStyle {
      constructor(backgroundColor, padding, borderRadius, border, boxShadow) {
        this.backgroundColor = backgroundColor;
        this.padding = padding;
        this.borderRadius = borderRadius;
        this.border = border;
        this.boxShadow = boxShadow;
      }
    }
    if (variant === "outlined") {
      const outlinedStyle = new buttonStyle(
        "transparent",
        "10px 20px",
        "5px",
        `1px solid ${palette.grey.light}`,
        "none"
      );
      return (
        <Button variant={variant} sx={{...outlinedStyle, "&:hover": {
        }}} disableRipple href={href}>
          <Typography
            component="span"
            sx={
              new buttonTextStyle(
                `${palette.grey.main}`,
                "Jost, sans-serif",
                13,
                600
              )
            }
          >
            {children}
          </Typography>
        </Button>
      );
    } else {
      const containedStyle = new buttonStyle(
        `${palette.primary.main}`,
        "10px 20px",
        "5px",
        `none`,
        "inset 0 0 200px rgb(0 0 0 / 10%)"
      );
      return (
        <Button variant={variant} sx={containedStyle} disableRipple href={href}>
          <Typography
            component="span"
            sx={
              new buttonTextStyle(
                `${palette.secondary.main}`,
                "Jost, sans-serif",
                13,
                600
              )
            }
          >
            {children}
          </Typography>
        </Button>
      );
    }
  };

  const subTitleStyle = {
    lineHeight: "25px",
    fontSize: 15,
    color: `${palette.primary.main}`,
    fontWeight: 600,
  };

  const titleStyle = {
    lineHeight: 1.3,
    fontSize: 36,
    fontWeight: 600,
    color: `${palette.grey.main}`,
    mb: "15px",
    mt: "7px",
  };

  const contentStyle = {
    mb: "15px",
    position: "absolute",
    top: 0,
    left: 0,
    p: "30px",
  };

  return (
    <section className="woodmart-cta">
      <Container
        fixed
        sx={{
          pb: "40px",
        }}
      >
        <ImageList cols={12} gap="20px">
            <ImageListItem cols={5}>
                <img src={banner1} alt="banner" style={{
                    borderRadius: '8px'
                }} />
                <Box sx={contentStyle}>
                    <Typography sx={subTitleStyle}>
                        Something completely new
                    </Typography>
                    <Typography sx={titleStyle}>
                        Cases for Phone
                    </Typography>
                    <CustomButton variant="contained" href="cases">to shop</CustomButton>
                </Box>
            </ImageListItem>
            <ImageListItem cols={7}>
                <img src={banner2} alt="banner" style={{
                    borderRadius: '8px'
                }} />
                <Box sx={contentStyle}>
                    <Typography sx={subTitleStyle}>
                        Accessories for watch
                    </Typography>
                    <Typography sx={titleStyle}>
                        Straps of Any Color
                    </Typography>
                    <CustomButton variant="outlined" href="straps">to shop</CustomButton>
                </Box>
            </ImageListItem>
            <ImageListItem cols={7}>
                <img src={banner3} alt="banner" style={{
                    borderRadius: '8px'
                }} />
                <Box sx={{...contentStyle, maxWidth: '450px'}}>
                    <Typography sx={subTitleStyle}>
                        Special offer
                    </Typography>
                    <Typography sx={titleStyle}>
                        Buy One and Get 50% Off the Second
                    </Typography>
                    <CustomButton variant="outlined" href="power_banks">read more</CustomButton>
                </Box>
            </ImageListItem>
            <ImageListItem cols={5}>
                <img src={banner4} alt="banner" style={{
                    borderRadius: '8px'
                }} />
                <Box sx={contentStyle}>
                    <Typography sx={subTitleStyle}>
                        Try something completely
                    </Typography>
                    <Typography sx={titleStyle}>
                        Charger Discount
                    </Typography>
                    <CustomButton variant="contained" href="charger">buy now</CustomButton>
                </Box>
            </ImageListItem>
        </ImageList>
      </Container>
    </section>
  );
};

export default CTA;
