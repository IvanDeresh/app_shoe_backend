import React from "react";
import { star } from "../assets/icons";
const PopularProductCart = ({ imgURL, name, price, description }) => {
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
      <button className="font-bold text-white bg-coral-red mt-[20px] rounded-full w-[40px] h-[40px]">
        +
      </button>
    </div>
  );
};

export default PopularProductCart;
