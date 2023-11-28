import React from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import Button from "../components/Button";
import LoginRegisterForm from "./LoginRegisterForm";
import { useState } from "react";
const Nav = () => {
  const [isActive, setIsActive] = useState(true);
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
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
                className="font-motserrat leading-normal text-lg text-slate-gray"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div
          className="mr-[30px] max-lg:hidden"
          onClick={() => setIsActive(!isActive)}
        >
          <Button label={"Sign in"} />
        </div>
        <div className="hidden max-lg:flex ">
          <div className="mr-[30px]" onClick={() => setIsActive(!isActive)}>
            <Button label={"Sign in"} />
          </div>
          <div className="flex flex-col  justify-center">
            <div
              onClick={() => setHamburgerMenu(!hamburgerMenu)}
              className="flex "
            >
              <img src={hamburger} alt="hamburger" width={25} height={25} />
            </div>
            {hamburgerMenu ? (
              <ul className="absolute top-[150px] right-[1%] bg-white w-[200px] h-[300px] rounded-2xl shadow-3xl shadow-coral-red ">
                {navLinks.map((link) => (
                  <li
                    key={link.label}
                    className=" w-full h-[25%] flex justify-center items-center"
                  >
                    <a
                      href={link.href}
                      className="font-motserrat leading-normal text-lg text-slate-600 underline decoration-coral-red underline-offset-[4px] decoration-[3px] hover:decoration-red-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </nav>
      {isActive ? <LoginRegisterForm /> : null}
    </header>
  );
};

export default Nav;
