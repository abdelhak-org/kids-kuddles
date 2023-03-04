import React from "react";

const CheckmeBox = (props) => {
  return (
    <div className="w-[80%] h-4 flex justify-between items-center mx-auto my-8  ">
      <input type="checkbox" className="w-5 outline-none border cursor-pointer"/>
      <p className="text-sm underline  cursor-pointer">{props.CheckmeText}</p>
    </div>
  );
};

export default CheckmeBox;
