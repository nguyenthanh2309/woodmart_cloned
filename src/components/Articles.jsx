import React from "react";

import {
  Container,
  Box,
  Typography,
  Card,
  CardMedia,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Badge,
  useTheme,
} from "@mui/material";

import { MessageOutlined, ShareOutlined } from "@mui/icons-material";

import Slider from "react-slick";

import CommonHeader from "./CommonHeader";

import { articles } from "../data";

const Article = ({ image, date, month, type, title, avatar, author }) => {
  const { palette } = useTheme();

  return (
    <Card
      sx={{
        p: "10px",
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          image={image}
          sx={{
            borderRadius: "8px",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minWidth: "53px",
            position: "absolute",
            top: 10,
            left: 12,
            background: `${palette.secondary.main}`,
            boxShadow: "0 0 9px rgb(0 0 0 / 10%)",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          <Typography
            component="span"
            sx={{
              color: `${palette.grey.main}`,
              fontSize: 24,
              fontFamily: "Jost, sans-serif",
              pt: "4px",
            }}
          >
            {date}
          </Typography>
          <Typography
            component="span"
            sx={{
              color: `${palette.grey.main}`,
              fontSize: 12,
              fontWeight: 600,
              fontFamily: "Jost, sans-serif",
              pb: "4px",
              textTransform: "uppercase",
            }}
          >
            {month}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          background: `${palette.primary.main}`,
          p: "0 10px",
          lineHeight: "25px",
          position: "absolute",
          top: "52%",
          left: "50%",
          transform: "translate(-50%)",
          display: "inline-block",
          borderRadius: "8px",
        }}
      >
        <Typography
          sx={{
            fontSize: 12,
            fontWeight: 800,
            color: `${palette.secondary.main}`,
            textTransform: "uppercase",
          }}
          component="span"
        >
          {type}
        </Typography>
      </Box>
      <CardContent
        sx={{
          p: "25px",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: "20px",
            fontWeight: 600,
            lineHeight: 1.4,
          }}
          gutterBottom
        >
          {title}
        </Typography>
        <CardHeader
          sx={{
            p: 0,
            width: "75%",
            margin: "0 auto",
          }}
          avatar={
            <Avatar
              src={avatar}
              alt="avatar"
              sx={{
                width: "18px",
                height: "18px",
              }}
            />
          }
          title={
            <Typography
              variant="h6"
              noWrap
              sx={{
                fontSize: "14px",
                color: `${palette.grey.light}`,
              }}
            >
              {author}
            </Typography>
          }
          action={
            <CardActions disableSpacing sx={{
              p: 0
            }}>
              <IconButton color={palette.grey.light}>
                <Badge
                  badgeContent={0}
                  sx={{
                    color: "inherit",
                  }}
                >
                  <MessageOutlined />
                </Badge>
              </IconButton>
              <IconButton color={palette.grey.light}>
                <ShareOutlined />
              </IconButton>
            </CardActions>
          }
        />
      </CardContent>
    </Card>
  );
};

const Articles = () => {
  const settings = {
    slidesToShow: 4,
    speed: 500,
  };

  return (
    <section className="woodmart-article">
      <Container
        fixed
        sx={{
          mb: "80px"
        }}
      >
        <CommonHeader
          title="Interesting About Gadgets"
          subTitle="Our new article best news"
          description="Whenever draft copy comes up in a meeting confused questions about
      "
        />
        <Slider {...settings}>
          {articles.map((article) => {
            return (
              <Article
                key={article.type}
                image={article.image}
                date={article.date}
                month={article.month}
                type={article.type}
                title={article.title}
                avatar={article.avatar}
                author={article.author}
              />
            );
          })}
        </Slider>
      </Container>
    </section>
  );
};

export default Articles;
