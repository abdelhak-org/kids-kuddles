import React, { useState, useEffect } from "react";
import Container from "../../layout/Container";
import clipartBoy from "../../assets/png-clipart-boy-removebg-preview.png";
import TextInput from "../../components/formComponent/TextInput";
import CheckmeText from "../../components/formComponent/CheckmeBox";
import { useNavigate } from "react-router-dom";
import { auth } from "../../data/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth"


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const navigateTo = useNavigate("");
  
  const LoginHandler = async()=>{
    await signInWithEmailAndPassword(auth  , email , password ) ;
    navigateTo("/profile")
  }
  useEffect(()=>{
  
  } , [])
  return (
    <Container
      className="min-h-screen bg-[#3ddfdf] text-center font-2xl
    flex justify-center items-center 
    "
    >
      <div className="w-full md:w-[80%] min-h-[90%] mx-auto my-auto bg-white flex justify-between items-center md:flex-row flex-col  shadow-md">
        <div className="w-full md:w-[50%] h-[100%] flex justify-center items-center border ">
          <img src={clipartBoy} alt="clippart" className="w-60 h-auto" />
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full md:w-[50%] h-[100%] bg-white px-4 pt-8 my-2 mx-auto border "
        >
          <h4 className="text-left">Hello !</h4>
          <p className="text-left"> Good Morning</p>
          <p className="text-center  mt-8 mb-4 ">Login Your Account </p>
          <TextInput
            value ={ email}
            className=""
            placeholder="Email ..."
            inputHandler={emailHandler}
          />
          <TextInput
            value = {password}
            className=""
            placeholder="Password "
            inputHandler={passwordHandler}
          />
          <CheckmeText CheckmeText=" Forgot Password ?" />
          <button
            onClick={LoginHandler}
            className="font-bold bg-[#47e5e5] tracking-wider my-4 w-[80%] cursor-pointer
                text-white py-2   "
          >
            Submit
          </button>
          <p
            onClick={() => navigateTo("/createaccount")}
            className="my-2 text-sm underline cursor-pointer "
          >
            Create Acount
          </p>
        </form>
      </div>
    </Container>
  );
};

export default LoginPage;
