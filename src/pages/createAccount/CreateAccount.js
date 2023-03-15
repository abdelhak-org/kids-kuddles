import React, { useState } from "react";
import Container from "../../layout/Container";
import clipartBoy from "../../assets/png-clipart-boy-removebg-preview.png";
import TextInput from "../../components/formComponent/TextInput";
import CheckmeText from "../../components/formComponent/CheckmeBox";
import { auth } from "../../data/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigateTo = useNavigate("");
  const emailHandler = (event) => {
    setEmail(event.target.value);
    console.log(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
    console.log(event.target.value);
  };

  const CreateAccountHandler = (e) => {
    e.preventDefault();
    console.log("clicked");
    createUserWithEmailAndPassword(auth, email, password);
    setEmail("");
    setPassword("");
    navigateTo("/setprofile");
  };
  return (
    <Container
      className="min-h-screen bg-[#3ddfdf] text-center font-2xl 
    flex justify-center items-center
    "
    >
      <div className="w-full  md:w-[80%] min-h-[90%] mx-auto my-auto flex-col md:flex-row bg-white flex justify-between items-center  shadow-md">
        <div className="w-[50%] h-[100%] flex justify-center items-center border ">
          <img src={clipartBoy} alt="clippart" className="w-60 h-auto" />
        </div>

        <form
          onSubmit={CreateAccountHandler}
          className="w-full md:w-[50%] min-h-screen md:h-[90%] bg-white px-4 pt-8 mx-auto border my-4 "
        >
          <h4 className="text-left">Hello !</h4>
          <p className="text-left"> Good Morning</p>
          <p className="text-center  mt-8 mb-4 ">Create an ACCount </p>
          <TextInput
            className=""
            value={email}
            placeholder="Email ..."
            inputHandler={emailHandler}
          />
          <TextInput
            className=""
            value={password}
            placeholder="Password"
            inputHandler={passwordHandler}
          />
          <CheckmeText CheckmeText="accept The Regels" />
          <button
            className="font-bold bg-[#47e5e5] tracking-wider my-4 w-[80%] 
            cursor-pointer text-white py-2   "
          >
            Submit
          </button>
          <p
            onClick={() => navigateTo("/loginpage  ")}
            className="my-2 text-sm underline cursor-pointer "
          >
            do you have an Account - Login
          </p>
        </form>
      </div>
    </Container>
  );
};

export default CreateAccount;
