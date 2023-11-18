import React from "react";

const ShoeComponent = ({ _id, name, price, description, picturePath }) => {
  return (
    <div
      key={_id}
      className="w-[300px] h-[400px] border-2 flex flex-col justify-center items-start rounded-2xl"
    >
      <img
        src={picturePath}
        alt={`../assets/shoes/${picturePath}`}
        width={400}
        height={300}
      />
      <div className="p-4 leading-[30px]">
        <h2 className="font-bold font-montserrat text-lg">{name}</h2>
        <p className="font-montserrat text-green-600 "> {price} $</p>
        <p className="font-montserrat leading-6">{description}</p>
        <button className="h-[40px] w-[40px] bg-coral-red rounded-full text-white font-bold">
          +
        </button>
      </div>
    </div>
  );
};

export default ShoeComponent;
