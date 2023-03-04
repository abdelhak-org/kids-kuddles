import React from "react";
import ListItem from "./ListItem";

const Mylist = () => {
  return (
    <ul className="flex  flex-col md:flex-row">
      <ListItem to="/" text="home" />

{    //  <ListItem to="about" text="about" />
     // <ListItem to="contact" text="contact" />
}
      <ListItem to="articles" text="articles" />

      <ListItem to="gallery" text="gallery" />

    </ul>
  );
};

export default Mylist;
