"use client";
import api from "@/api";
import { useState } from "react";
import Router, { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Input from "@mui/material/Input";
import Image from "next/image";

interface TokenProps {
  token: string;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  saved_pets: [];
}

async function login(
  username: string,
  password: string
): Promise<TokenProps> {
  try {
    const response = await api.post("api-token-auth/", {
      username: username,
      password: password,
    });
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
    return { token: "", username: "", first_name: "", last_name: "", email: "", saved_pets: [] };
  }
}

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    try {
      const response = await login(username, password);
      if (response.token) {
        Cookies.set("token", response.token);
        // Store the user data in session storage
        // sessionStorage.setItem("data", JSON.stringify(response));
        // Cookies.set("data", JSON.stringify(response));
        Object.entries(JSON.stringify(response)).forEach(([key, value]) => {
          Cookies.set(key, value);
        });

        router.push("/");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen w-[100vw] h-[100vh] bg-gray-100">
      <div className="bg-blue-500 w-[50%] h-full text-xl text-black font-bold font__poppins pl-6 pt-4" id="login-left">
        Petbound
      </div>
      <div className="w-[50%] h-full flex items-center mt-[20%] shadow-lg">
        <form onSubmit={handleSubmit} className="w-full h-[100%] bg-white p-8 rounded-lg w-96 mx-[20%] shadow-lg">
          <h1 className="text-[2.5rem] text-black font-extrabold font__poppins text-center">Sign in</h1>
          <div className="mb-6">
            <label htmlFor="username" className="mt-8 block text-sm font-medium text-gray-600">
              Username
            </label>
            <Input
              id="username"
              name="username"
              className="mt-1 p-2 text-base w-full text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="Username"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="mt-8 block text-sm font-medium text-gray-600">
              Password
            </label>
            <Input
              id="password"
              name="password"
              className="mt-1 p-2 text-base w-full text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="Password"
              type={showPassword ? "text" : "password"} // Use showPassword state here
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handlePasswordVisibility} onMouseDown={handleMouseDownPassword}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </div>
          <button
            type="submit"
            className="w-[70%] ml-[15%] flex justify-center py-[0.75rem] px-4 mt-8 bg-green-500 rounded-full text-white font-medium hover:bg-green-600 focus:ring-4 focus:ring-green-300 focus:outline-none"
          >
            Login
            <i className="fas fa-arrow-right ml-1"></i>
          </button>
          <p className="mt-4 text-center text-gray-600 font__poppins">
            Not Registered? <a href="/register" className="text-green-500">Sign up!</a>
          </p>
        </form>
      </div>
    </div>
  );
}

/**
 * 
 * <div className="flex items-center justify-center min-h-screen bg-green-500">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-md shadow-md w-96">
        <div className="mb-6">
          <label htmlFor="username" className="block text-sm font-medium text-gray-600">
            Username
          </label>
          <Input
            id="username"
            name="username"
            className="mt-1 p-2 text-base w-full text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            placeholder="Username"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <Input
            id="password"
            name="password"
            className="mt-1 p-2 text-base w-full text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            placeholder="Password"
            type={showPassword ? "text" : "password"} // Use showPassword state here
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handlePasswordVisibility} onMouseDown={handleMouseDownPassword}>
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 bg-green-500 rounded-md text-white font-medium hover:bg-green-600 focus:ring-4 focus:ring-green-300 focus:outline-none mt-4"
        >
          Login
          <i className="fas fa-arrow-right ml-1"></i>
        </button>
        <p className="mt-4 text-center text-gray-600 font__poppins">
          Not Registered? <a href="/register" className="text-green-500">Create an account</a>
        </p>
      </form>
    </div>
 */