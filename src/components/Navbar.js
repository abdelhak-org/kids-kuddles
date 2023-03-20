import React , {useEffect, useState  } from "react";
import Container from "../layout/Container";
import Logo from "./Logo";
import ListItem from "./myList/ListItem";
import Mylist from "./myList/Mylist";
import {BsFillEyeSlashFill ,} from "react-icons/bs";
import {AiOutlineBars} from  "react-icons/ai"
const Navbar = () => {
  const [navShow , setNavShow] = useState(true);
  useEffect(()=>{

  },[navShow])
  return (
    <Container className="w-screen py-auto px-1 md:px-8  border capitalize flex md:justify-around md:items-center flex-col md:flex-row relative">
      <Logo />
      <Mylist navshow={navShow}  />
      < div className={`w-auto h-fit md:h-12 px-2 mx-auto md:w-60 flex flex-col md:flex-row `}>
        <ListItem 
         className="text-sm border-none  text-gray-800
          " 
          text="Register"
          to="/createaccount"
         
        />
           <ListItem 
         className="text-sm border-none  text-gray-800 text-center
          " 
          text="Login"
          to="/loginpage"
         
        />
      </div>
      <button  className="px-4 py-2 w-fit mx-auto bg-green-600 font-bold text-[24px] text-white md:hidden"
      onClick={()=> setNavShow(!navShow)}
      >{navShow? <BsFillEyeSlashFill/> : <AiOutlineBars />} </button>
    </Container>
  )}
export default Navbar