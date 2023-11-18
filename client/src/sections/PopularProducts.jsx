import React from "react";
import { products } from "../constants";
import PopularProductCart from "../components/PopularProductCart";
const PopularProducts = () => {
  return (
    <section id="products" className="max-container">
      <div>
        <h1 className="text-4xl font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h1>
        <p className="font-montserrat flex-wrap leading-7 mt-[40px]">
          Experience top-notch quality and style with our sought after <br />
          selections . Discover a world of comfort , design and value
        </p>
        <div className="flex justify-around my-20 lg:flex-wrap lg:justify-start lg:gap-6  md:flex-wrap md:justify-start md:gap-10 sm:flex-wrap">
          {products.map((product, index) => (
            <div>
              <PopularProductCart key={index} {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
