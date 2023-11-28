import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { star } from "../assets/icons";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/basketReducer";
const PopularProductCart = ({ id, imgURL, name, price, description }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <img
          src={imgURL}
          alt={name}
          width={300}
          height={400}
          className="rounded-lg"
        />
      </div>
      <div className="flex gap-2 mt-[30px]">
        <img src={star} alt="star" className="" />
        <div className=" text-lg text-slate-400">4,5</div>
      </div>
      <h2 className="font-bold text-xl my-[10px]">{name}</h2>
      <h2 className="font-bold text-coral-red text-2xl font-montserrat">
        {price} $
      </h2>
      {description && <p>{description}</p>}
      <button
        onClick={() => {
          dispatch(
            addProduct({ id: uuidv4(), name: name, price: price, img: imgURL })
          );
        }}
        className="font-bold text-white bg-coral-red mt-[20px] rounded-full w-[40px] h-[40px]"
      >
        +
      </button>
    </div>
  );
};

export default PopularProductCart;
