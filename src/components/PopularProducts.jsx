import React from "react";

import { Container, Grid } from "@mui/material";

import Slider from "react-slick";

import CommonHeader from "./CommonHeader";

import { popularProducts } from "../data";
import { Product } from "./Products";

const PopularProducts = () => {
  const settings = {
    dots: true,
    arrows: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    adaptiveHeight: true,
    centerPadding: "15px",
  };

  return (
    <section className="woodmart-popular-products">
      <Container
        fixed
        sx={{
          mt: "40px",
          mb: "100px",
        }}
      >
        <CommonHeader
          title="Most Popular Products"
          subTitle="Learn how to get a discount"
          description="Proponents of content strategy may shun of dummy copy designers"
        ></CommonHeader>
        <Slider {...settings}>
          {popularProducts.map((product) => {
            return (
              <Product
                key={product.id}
                name={product.name}
                model={product.model}
                price={product.price}
                src={product.src}
                status={product.status === "normal" ? "" : product.status}
                sale={product.sale ? product.sale : ""}
              />
            );
          })}
        </Slider>
      </Container>
    </section>
  );
};

export default PopularProducts;
