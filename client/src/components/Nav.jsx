import React, { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useSelector, useDispatch } from "react-redux";
import Button from "../components/Button";
import { removeProduct } from "../store/basketReducer";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import LoginRegisterForm from "./LoginRegisterForm";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
const Nav = () => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const [basket, setBasket] = useState(false);
  const products = useSelector((p) => p.products);
  const total = products.reduce(
    (accumulator, product) => accumulator + product.price,
    0
  );
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container ">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-motserrat leading-normal text-lg text-slate-gray "
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div
          onClick={() => {
            setBasket(!basket);
            setIsActive(false);
          }}
          className="max-lg:hidden mr-[30px] border-2 w-[40px] h-[40px] flex justify-center items-center rounded-2xl border-coral-red"
        >
          <LocalGroceryStoreIcon />
        </div>
        <div
          className="mr-[30px] max-lg:hidden"
          onClick={() => {
            setIsActive(!isActive);
            setBasket(false);
          }}
        >
          <Button label={"Sign in"} />
        </div>
        <div className="hidden max-lg:flex max-lg:items-center">
          <div
            className="mr-[30px]"
            onClick={() => {
              setIsActive(!isActive);
              setHamburgerMenu(false);
            }}
          >
            <Button label={"Sign in"} />
          </div>
          <div className="flex flex-col  justify-center">
            <div
              onClick={() => {
                setHamburgerMenu(!hamburgerMenu);
                setIsActive(false);
                setBasket(false);
              }}
              className="flex "
            >
              <img src={hamburger} alt="hamburger" width={25} height={25} />
            </div>

            {hamburgerMenu ? (
              <ul className=" top-[150px] right-[1%] bg-white w-[200px] h-[300px] rounded-2xl shadow-3xl shadow-coral-red absolute ">
                {navLinks.map((link) => (
                  <li
                    key={link.label}
                    className=" w-full flex flex-col justify-center items-center h-[25%]"
                  >
                    <a
                      href={link.href}
                      className="font-motserrat leading-normal text-lg text-slate-600 "
                    >
                      {link.label}
                      <div className="flex justify-center ">
                        <div className="w-[100px] h-[4px] rounded-full bg-coral-red hover:w-[50px] hover:translate-y-1"></div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <div
            className=" ml-[30px] border-2 w-[50px] h-[50px] flex justify-center items-center rounded-[50%] border-coral-red"
            onClick={() => {
              setBasket(!basket);
              setHamburgerMenu(false);
              setIsActive(false);
            }}
          >
            <LocalGroceryStoreIcon />
          </div>
        </div>
      </nav>
      {basket ? (
        <div className="absolute min-w-xl:mr-[30%] flex flex-col justify-around items-start  top-[150px] 2xl:right-[25%] right-[10%] w-[400px] h-auto rounded-2xl bg-white shadow-2xl shadow-coral-red">
          {products.map((product) => (
            <li
              key={product.name}
              className="flex gap-4 mt-8 ml-4 justify-start items-center h-[70px]"
            >
              <img src={product.img} width={80} />
              <span className="list-none">{product.name}</span>
              <span className="text-green-500 list-none">{product.price}$</span>
              <span onClick={() => dispatch(removeProduct(product.id))}>
                <DeleteForeverIcon />
              </span>
            </li>
          ))}
          <div className="flex items-center justify-center w-full text-[30px] my-5 text-green-500">
            <Button label={"to payment..."} />
            <div className="ml-4">{total.toFixed(2)}$</div>
          </div>
        </div>
      ) : null}
      {isActive ? <LoginRegisterForm /> : null}
    </header>
  );
};

export default Nav;
