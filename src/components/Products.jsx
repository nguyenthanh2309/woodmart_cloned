import React, { useState, useRef, useEffect } from "react";

import {
  Container,
  Box,
  Grid,
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Button,
  ButtonGroup,
  IconButton,
  Rating,
  Typography,
  useTheme,
} from "@mui/material";

import {
  Search,
  CompareArrowsOutlined,
  FavoriteBorderOutlined,
} from "@mui/icons-material";

import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

import { Link } from "react-router-dom";

import CommonHeader from "./CommonHeader";

import { products } from "../data";

export const Product = ({ name, model, price, src, rating, status, sale }) => {
  const { palette } = useTheme();

  const styleIconButton = {
    fontSize: "30px",
    "&:hover": {
      color: `${palette.grey.light}`,
      transition: "all .25s ease",
    },
  };

  const [isHovered, setIsHovered] = useState(false);
  const wrapperRef = useRef(null);
  const buttonRef = useRef(null);
  const buttonGroupRef = useRef(null);

  const handleMouseOver = () => {
    buttonRef.current.style.display = "block";
    buttonGroupRef.current.style.display = "block";
  };

  const handleMouseLeave = () => {
    buttonRef.current.style.display = "none";
    buttonGroupRef.current.style.display = "none";
  };

  useEffect(() => {
    const currentRef = wrapperRef.current;
    if (isHovered) {
      currentRef.addEventListener("mouseover", handleMouseOver);
    } else {
      currentRef.addEventListener("mouseleave", handleMouseLeave);
      setIsHovered(!isHovered);
    }
    return () => {
      currentRef.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isHovered]);

  return (
    <Card ref={wrapperRef}>
      <Box
        sx={{
          position: "relative",
        }}
        ref={wrapperRef}
      >
        <CardMedia component="img" image={src} alt="product" />
        <Status status={status}>{status === "sale" ? sale : status}</Status>
        <CardActions
          disableSpacing
          sx={{
            p: 0,
          }}
        >
          <Button
            color="primary"
            disableRipple
            fullWidth
            variant="contained"
            sx={{
              boxShadow: "none",
              borderBottomLeftRadius: "8px",
              borderBottomRightRadius: "8px",
              opacity: 0.8,
              p: "10px",
              position: "absolute",
              bottom: 0,
              display: "none",
            }}
            ref={buttonRef}
          >
            <Typography
              component="span"
              sx={{
                textTransform: "uppercase",
                fontSize: 13,
                fontWeight: 500,
                fontFamily: "Jost, sans-serif",
              }}
            >
              add to cart
            </Typography>
          </Button>
          <ButtonGroup
            orientation="vertical"
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              borderRadius: "8px",
              boxShadow: "1px 1px 1px rgb(0 0 0 / 10%)",
              width: 50,
              display: "none",
            }}
            ref={buttonGroupRef}
          >
            <IconButton disableRipple>
              <CompareArrowsOutlined sx={styleIconButton} />
            </IconButton>
            <IconButton disableRipple>
              <Search sx={styleIconButton} />
            </IconButton>
            <IconButton disableRipple>
              <FavoriteBorderOutlined sx={styleIconButton} />
            </IconButton>
          </ButtonGroup>
        </CardActions>
      </Box>
      <CardContent>
        <Typography
          variant="h3"
          sx={{
            fontSize: 14,
            fontWeight: 600,
            color: `${palette.grey.main}`,
            textAlign: "center",
          }}
          gutterBottom
        >
          {name}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontSize: 13.3,
            fontFamily: "Jost, sans-serif",
            color: `${palette.grey.light}`,
            textAlign: "center",
          }}
          gutterBottom
        >
          {model}
        </Typography>
        {rating ? (
          <Rating
            defaultValue={0}
            value={rating}
            readOnly
            size="small"
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: "5px",
            }}
          />
        ) : undefined}
        <Typography
          variant="h6"
          sx={{
            fontSize: 14,
            fontFamily: "Jost, sans-serif",
            fontWeight: 600,
            color: `${palette.primary.main}`,
            textAlign: "center",
          }}
          gutterBottom
        >
          {price}
        </Typography>
      </CardContent>
    </Card>
  );
};

const Status = ({ status, children }) => {
  const { palette } = useTheme();

  const textStyle = {
    fontSize: "14px",
    fontWeight: 800,
    textTransform: "uppercase",
    display: "inline-block",
    textAlign: "center",
    verticalAlign: "middle",
  };

  const wrapperStyle = {
    position: "absolute",
    top: 7,
    p: "5px 7px",
    minWidth: "50px",
    minHeight: "50px",
    borderRadius: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  switch (status) {
    case "hot":
      return (
        <Box
          sx={{
            ...wrapperStyle,
            background: `${palette.red.main}`,
          }}
        >
          <Link to="iphone-12-pro-moment-case-blue">
            <Typography
              component="span"
              sx={{
                ...textStyle,
                color: `${palette.secondary.main}`,
              }}
            >
              {children}
            </Typography>
          </Link>
        </Box>
      );

    case "sale":
      return (
        <Box
          sx={{
            ...wrapperStyle,
            background: `${palette.primary.main}`,
          }}
        >
          <Typography
            component="span"
            sx={{
              ...textStyle,
              color: `${palette.secondary.main}`,
            }}
          >
            {children}
          </Typography>
        </Box>
      );

    case "new":
      return (
        <Box
          sx={{
            ...wrapperStyle,
            background: `${palette.green.main}`,
          }}
        >
          <Typography
            component="span"
            sx={{
              ...textStyle,
              color: `${palette.secondary.main}`,
            }}
          >
            {children}
          </Typography>
        </Box>
      );

    case "sold out":
      return (
        <Box
          sx={{
            ...wrapperStyle,
            background: "transparent",
          }}
        >
          <Typography
            component="span"
            sx={{
              ...textStyle,
              fontSize: 12,
              color: `${palette.grey.main}`,
            }}
          >
            {children}
          </Typography>
        </Box>
      );
    default:
      return null;
  }
};

const Products = () => {
  return (
    <section className="woodmart-products-list">
      <Container
        fixed
        sx={{
          pb: "80px",
        }}
      >
        <CommonHeader
          title="New Arrivals"
          subTitle="Hurry up to buy"
          description="How can you evaluate content without design"
          sx={{
            mb: "20px",
          }}
        />
        <Tabs>
          <TabList>
            {products.map((product) => {
              return (
                <Tab key={product.category}>
                  <Typography
                    component="span"
                    sx={{
                      fontWeight: 600,
                      textTransform: "uppercase",
                    }}
                  >
                    {product.category}
                  </Typography>
                </Tab>
              );
            })}
          </TabList>
          {products.map((product) => {
            return (
              <TabPanel key={product.category}>
                <Grid container columns={10} spacing={"30px"}>
                  {product.productsDetail.map((productDetail) => {
                    return (
                      <Grid item lg={2} key={productDetail.id}>
                        <Product
                          name={productDetail.name}
                          model={productDetail.model}
                          price={productDetail.price}
                          src={productDetail.src}
                          rating={
                            productDetail.rating ? productDetail.rating : ""
                          }
                          status={productDetail.status}
                          sale={productDetail.sale}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </TabPanel>
            );
          })}
        </Tabs>
      </Container>
    </section>
  );
};

export default Products;
