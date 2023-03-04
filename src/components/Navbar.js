import React from "react";
import Container from "../layout/Container";
import Logo from "./Logo";
import ListItem from "./myList/ListItem";
import Mylist from "./myList/Mylist";

const Navbar = () => {
  return (
    <Container className="w-screen py-2 px-8 border capitalize flex justify-around items-center flex-col md:flex-row">
      <Logo />
      <Mylist />
      <div>
        <ListItem text="login" to="/loginpage"  />
        <ListItem text =  "create an Account " to ="/createaccount" 
        className ="text-sm border-none text-red-200"
        />
      </div>
    </Container>
  );
};

export default Navbar;
