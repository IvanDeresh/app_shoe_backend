import React, { useState } from "react";
import axios from "axios";
import Button from "./Button";
const LoginRegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [balance, setBalance] = useState(0);
  const [message, setMessage] = useState("");
  const [themeForm, setThemeForm] = useState("Login");
  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        email,
        password,
      });
      setMessage(response.data.message);
    } catch (err) {
      setMessage("Login failed");
    }
  };
  const handleRegister = async () => {
    try {
      const response = await axios
        .post("http://localhost:3001/auth/login", {
          name,
          password,
          email,
          balance,
        })
        .then((response) => response.data.message)
        .catch((error) => {
          console.error("Error:", error);
        });

      setMessage(response.data.message);
    } catch (err) {
      setMessage("Error with registration");
    }
  };
  return (
    <div className="h-[500px] absolute right-[35%] top-[300px] z-0 w-[400px] shadow-2xl shadow-coral-red bg-white rounded-2xl flex flex-col">
      {themeForm === "Login" ? (
        <form className="flex flex-col gap-6 items-center mt-[100px]">
          <h2 className=" text-coral-red rounded-lg mb-5 w-[150px] flex justify-center font-montserrat text-[30px] shadow-lg shadow-coral-red/50 ">
            Login
          </h2>
          <input
            type="email"
            name="email"
            className="w-[90%] h-[40px] border-2 focus:outline-none border-coral-red"
            placeholder="    youremail@domen.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            name="password"
            className="w-[90%] h-[40px] border-2 focus:outline-none border-coral-red"
            placeholder="     password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button onClick={handleLogin} label={"Continue"} />
        </form>
      ) : (
        <form className="flex flex-col gap-4 justify-center items-center mt-[50px]">
          <h2 className=" text-coral-red w-[150px] flex justify-center rounded-lg mb-5 font-montserrat text-[30px] shadow-lg shadow-coral-red/50">
            Sign up
          </h2>
          <input
            type="text"
            name="name"
            placeholder="   Name"
            className="w-[90%] h-[40px] border-2 focus:outline-none border-coral-red"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            className="w-[90%] h-[40px] border-2 focus:outline-none border-coral-red"
            placeholder="    youremail@domen.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            name="password"
            className="w-[90%] h-[40px] border-2 focus:outline-none border-coral-red"
            placeholder="    password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            type="number"
            name="balance"
            className="w-[90%] h-[40px] border-2 focus:outline-none border-coral-red"
            placeholder="   Balance "
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
          />
          <div onClick={handleRegister}>
            <Button label={"Continue"} />
          </div>
        </form>
      )}

      <div className="flex justify-around items-center mt-[10px]">
        <button
          className={`text-[30px] text-coral-red ${
            themeForm === "Sign up" ? "underline underline-offset-4" : null
          }`}
          onClick={() => {
            setThemeForm("Sign up");
          }}
        >
          Sign up
        </button>
        <button
          className={`text-[30px] text-coral-red ${
            themeForm === "Login" ? "underline underline-offset-4" : null
          }`}
          onClick={() => {
            setThemeForm("Login");
          }}
        >
          Login
        </button>
      </div>
      <p>{message}</p>
    </div>
  );
};

export default LoginRegisterForm;
