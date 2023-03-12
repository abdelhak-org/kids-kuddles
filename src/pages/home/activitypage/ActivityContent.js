import React from "react";

const ActivityContent = (props) => {
  return (
    <div>
      <h6
        className={`w-fit mx-auto pt-2 mt-6 font-sm text-white  ${props.className}`}
      >
        {props.subtitle}
      </h6>
      <h1
        className={`w-fit mx-auto font-bold text-white text-[28px] font-serif tracking-wider mt-4 ${props.className}`}
      >
        {props.maintitle}
      </h1>
    </div>
  );
};

export default ActivityContent;
