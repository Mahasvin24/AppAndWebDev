'use client'
import React, { useState } from 'react';
import Router, { useRouter } from "next/navigation";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Input from "@mui/material/Input";
import api from '@/api';
import Cookies from 'js-cookie';

async function signup(
  username: string,
  email: string,
  password: string
){
  try {
    const response = await api.post("accounts/", {
      username: username,
      email: email,
      password: password,
    });
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
    return { token: false };
  }
}
const SignUpForm = () => {
  const [isOrganization, setIsOrganization] = useState(false);
  const router = useRouter();
  
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    // Cookies.remove("token");
    // Cookies.remove("data");
    Object.keys(Cookies.get()).forEach(function(cookieName) {
      var neededAttributes = {
        // Here you pass the same attributes that were used when the cookie was created
        // and are required when removing the cookie
      };
      Cookies.remove(cookieName, neededAttributes);
    });
    console.log(password, password2);
    if(password !== password2){
      console.log("error");
    } else {
      signup(username, email, password);
      router.push("/login");
    }

  }

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handlePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };
  
  // Styling
  let inputStyles = "mt-1 p-2 text-base w-full text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm";

  let labelStyles = "mt-8 block text-sm font-medium text-gray-600";
  
  return (
    <div className="flex items-center justify-center min-h-screen w-[100vw] h-[100vh] bg-gray-100 overflow-hidden">
      <div className="bg-blue-500 w-[50%] h-full text-xl text-black font-bold font__poppins pl-6 pt-4 overflow-hidden" id="login-left">
        Petbound
      </div>
      <div className="w-[50%] h-full flex items-center shadow-lg pl-[12.5%]">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-md shadow-md w-96">
          <div className="mb-6">
            <h1 className="text-[2.5rem] text-black font-extrabold font__poppins text-center">Sign up</h1>
            <label htmlFor="username" className={labelStyles}>
              Username
            </label>
            <Input
              id="username"
              name="username"
              className={inputStyles}
              placeholder="Username"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="emailOrPhone" className={labelStyles}>
              Email
            </label>
            <Input
              id="emailOrPhone"
              name="emailOrPhone"
              className={inputStyles}
              placeholder="Email"
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="emailOrPhone" className={labelStyles}>
              Password
            </label>
            <Input
              id="password"
              name="password"
              className={inputStyles}
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handlePasswordVisibility} onMouseDown={handleMouseDownPassword}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="organization" className={labelStyles}>
              <input
                type="checkbox"
                id="organization"
                name="organization"
                className="mr-2"
                checked={isOrganization}
                onChange={() => setIsOrganization(!isOrganization)}
              />
              I am representing an organization
            </label>
          </div>
          {isOrganization && (
            <div className="mb-6">
              <label htmlFor="businessName" className="block text-sm font-medium text-gray-600">
                Business<span className="text-red-500">*</span>
              </label>
              <Input
                id="businessName"
                name="businessName"
                className={inputStyles}
                placeholder="Business Name"
                type="text"
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 bg-green-500 rounded-md text-white font-medium hover:bg-green-600 focus:ring-4 focus:ring-green-300 focus:outline-none mt-4"
          >
            Sign Up
            <i className="fas fa-arrow-right ml-1"></i>
          </button>
          <p className="mt-4 text-center text-gray-600 font__poppins">
            Already have an account? <a href="/login" className="text-green-500">Log in!</a>
          </p>
        </form>
      </div>
    </div>
  );
}
 
export default SignUpForm;

/**

<div className="flex items-center justify-center min-h-screen bg-green-400">
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
            required
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="emailOrPhone" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <Input
            id="emailOrPhone"
            name="emailOrPhone"
            className="mt-1 p-2 text-base w-full text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            placeholder="Email"
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="emailOrPhone" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <Input
            id="password"
            name="password"
            className="mt-1 p-2 text-base w-full text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handlePasswordVisibility} onMouseDown={handleMouseDownPassword}>
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="emailOrPhone" className="block text-sm font-medium text-gray-600">
            Password Confirmation
          </label>
          <Input
            id="password2"
            name="password2"
            className="mt-1 p-2 text-base w-full text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            placeholder="Password Confirmation"
            type={showPassword2 ? "text" : "password"}
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            required
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handlePasswordVisibility2} onMouseDown={handleMouseDownPassword}>
                  {showPassword2 ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </div>
        <div className="mb-6">
          <label htmlFor="organization" className="block text-sm font-medium text-gray-600">
            <input
              type="checkbox"
              id="organization"
              name="organization"
              className="mr-2"
              checked={isOrganization}
              onChange={() => setIsOrganization(!isOrganization)}
            />
            I am representing an organization
          </label>
        </div>
        {isOrganization && (
          <div className="mb-6">
            <label htmlFor="businessName" className="block text-sm font-medium text-gray-600">
              Business<span className="text-red-500">*</span>
            </label>
            <Input
              id="businessName"
              name="businessName"
              className="mt-1 p-2 text-base w-full text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="Business Name"
              type="text"
            />
          </div>
        )}
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 bg-green-500 rounded-md text-white font-medium hover:bg-green-600 focus:ring-4 focus:ring-green-300 focus:outline-none mt-4"
        >
          Sign Up
          <i className="fas fa-arrow-right ml-1"></i>
        </button>
        <p className="mt-4 text-center text-gray-600 font__poppins">
          Already have an account? <a href="/login" className="text-green-500">Log in</a>
        </p>
      </form>
    </div>

 */