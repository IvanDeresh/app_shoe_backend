import React, { useState, useEffect } from "react";
import axios from "axios";
import PopularProductCart from "../components/PopularProductCart";
import CloseIcon from "@mui/icons-material/Close";
const ListOfShoe = () => {
  const [shoes, setShoes] = useState([]);
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:3001/shoes?limit=10")
      .then((response) => setShoes(response.data))
      .catch((error) => console.error("Error fetching shoes:", error));
  }, []);
  return (
    <div
      onClick={
        clicked === true
          ? null
          : () => {
              setClicked(!clicked);
            }
      }
      className="flex flex-1 gap-12 flex-wrap max-container"
    >
      {clicked ? (
        <div className="flex flex-1 gap-12 flex-wrap">
          {shoes.map((shoe) => (
            <PopularProductCart
              key={shoe._id}
              imgURL={shoe.picturePath}
              name={shoe.name}
              price={shoe.price}
              description={shoe.description}
            />
          ))}
          <div className="font-bold text-2xl absolute right-[1%] ">
            <CloseIcon
              className="h-[100px]"
              onClick={() => setClicked(!clicked)}
            />
          </div>
        </div>
      ) : (
        <div>
          <div className="text-[44px] font-montserrat hover:translate-y-1 hover:text-coral-red ">
            Our others products...
          </div>
        </div>
      )}
    </div>
  );
};

export default ListOfShoe;
