import React from "react";
import Container from "../layout/Container";
import Logo from "./Logo";
import ListItem from "./myList/ListItem";
import Mylist from "./myList/Mylist";

const Navbar = () => {
  return (
    <Container className="w-screen py-auto px-1 md:px-8  border capitalize flex md:justify-around md:items-center flex-col md:flex-row">
      <Logo />
      <Mylist />
      <div className="w-auto h-fit md:h-12 px-2 mx-auto md:w-60 flex flex-col md:flex-row  ">
        <ListItem text="login" to="/loginpage" />
        
        <ListItem 
         className="text-sm border-none  text-gray-800
          " 
          text="Register"
          to="/createaccount"
         
        />
      </div>
    </Container>
  );
};

export default Navbar;
