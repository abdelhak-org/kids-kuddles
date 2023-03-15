import React from "react";
import BaseButton from "./BaseButton";
import Box from "../layout/Box"
const Card = (props) => {
  return (
    <Box className="w-full md:w-60 text-center h-auto border rounded-md 
     shadow-md overflow-hidden my-2 p-2 ">
      <h3 className="w-full text-center font-bold text-xl capitalize ">
        
        {props.title}
      </h3>
      <p>{props.description} </p>
      <img src={props.image} alt="bild" className="w-full " />
      <BaseButton text="get it"  className=" bg-pink-800 hover:bg-pink-600 text-sm uppercase"/>
    </Box>
  );
};

export default Card;
