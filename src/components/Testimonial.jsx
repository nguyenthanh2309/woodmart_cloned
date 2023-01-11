import React from "react";

import { Container, Grid, Typography, useTheme } from "@mui/material";
import {
  LocalShippingOutlined,
  ThumbUpOutlined,
  KeyboardReturnOutlined,
} from "@mui/icons-material";

import CommonHeader from "./CommonHeader";

const Testimonial = () => {
  const { palette } = useTheme();

  const contentTitleStyle = {
    fontSize: 24,
    color: `${palette.grey.main}`,
    fontWeight: 600,
    textAlign: "center",
    mb: '15px'
  };

  const contentDescriptionStyle = {
    color: `${palette.grey.semi_light}`,
    textAlign: "center",
    fontFamily: "Jost, sans-serif",
    lineHeight: '26px'
  };

  const iconStyle = {
    fontSize: 60,
    color: `${palette.primary.main}`,
    width: "100%",
    m: "0 auto",
    mb: "15px",
  };

  return (
    <section className="woodmart-testimonial">
      <Container
        fixed
        sx={{
          pb: "80px",
        }}
      >
        <CommonHeader title='We Provide High Quality Goods' subTitle="There are some redeeming factors" description="A client that's unhappy for a reason is a problem, a client that's unhappy though he or her can't" />
        <Grid container spacing={"5%"}>
          <Grid item lg={4}>
            <LocalShippingOutlined sx={iconStyle} />
            <Typography variant="h3" gutterBottom sx={contentTitleStyle}>
              Fast Delivery
            </Typography>
            <Typography paragraph gutterBottom sx={contentDescriptionStyle}>
              Chances are there wasn’t collaboration and checkpoints, there
              wasn’t a process.
            </Typography>
          </Grid>
          <Grid item lg={4}>
            <ThumbUpOutlined sx={iconStyle} />
            <Typography variant="h3" gutterBottom sx={contentTitleStyle}>
              Best Quality
            </Typography>
            <Typography paragraph gutterBottom sx={contentDescriptionStyle}>
              It’s content strategy gone awry right from the start. Forswearing
              the use of Lorem Ipsum.
            </Typography>
          </Grid>
          <Grid item lg={4}>
            <KeyboardReturnOutlined sx={iconStyle} />
            <Typography variant="h3" gutterBottom sx={contentTitleStyle}>
              Free Return
            </Typography>
            <Typography paragraph gutterBottom sx={contentDescriptionStyle}>
              True enough, but that’s not all that it takes to get things back
              on track out there for a text.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Testimonial;
