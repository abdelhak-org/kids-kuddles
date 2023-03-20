import React from "react";
import ListItem from "./ListItem";

const Mylist = ({navshow}) => {
  return (
    <ul className={`w-screen mx-auto flex flex-col
    justify-center items-center
     md:flex-row md:justify-arround ${navshow?"block":"hidden"} `}>
      <ListItem to="/" text="home" />

      <ListItem to="about" text="about" />
      {
        // <ListItem to="contact" text="contact" />
      }
      <ListItem to="articles" text="articles" />

      <ListItem to="gallery" text="gallery" />
    </ul>
  );
};

export default Mylist;
