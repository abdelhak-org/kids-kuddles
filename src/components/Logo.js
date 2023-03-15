import React from "react";
import { useNavigate } from "react-router-dom";
const Logo = () => {
  const navigateTo = useNavigate("");

  return (
    <h3 
    onClick ={()=> navigateTo("/")}
    className="font-bold text-2xl text-yellow-500 my-auto md:my-0   text-center  cursor-pointer">
      <span className="text-blue-500">kids</span>&&
      <span className="text-rose-600">kuddles</span>
    </h3>
  );
};

export default Logo;
