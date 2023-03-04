import React, {useState , useEffect } from "react";
import Container from "../../layout/Container";
import clipartBoy from "../../assets/png-clipart-boy-removebg-preview.png";
import TextInput from "../../components/formComponent/TextInput";
import CheckmeText from "../../components/formComponent/CheckmeBox";
import { useNavigate } from "react-router-dom";
const CreateAccount = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  
  const emailHandler =(event)=>{
  setEmail(event.target.value)
  }
  const passwordHandler = (event )=>{
  setPassword(event.target.value)
  }
  const navigateTo = useNavigate("");
  
  const SubmitHandler = (e) => {
      e.preventDefault();
  };










  return (
    <Container className="h-screen bg-[#3ddfdf] text-center font-2xl 
    flex justify-center items-center
    ">
      <div className="w-[80%] h-[90%] mx-auto my-auto bg-white flex justify-between items-center  shadow-md">
        <div className="w-[50%] h-[100%] flex justify-center items-center border ">
          <img src={clipartBoy} alt="clippart" className="w-60 h-auto" />
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className=" w-[50%] h-[100%] bg-white px-4 pt-8 mx-auto border "
        >
          <h4 className="text-left">Hello !</h4>
          <p className="text-left"> Good Morning</p>
          <p className="text-center  mt-8 mb-4 ">Create an ACCount </p>
          <TextInput className="" placeholder="Email ..." onChange={emailHandler}    />
          <TextInput className="" placeholder="Password " onChange={passwordHandler} />
          <CheckmeText CheckmeText= "accept The Regels" />
          <button
            onClick={SubmitHandler}
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
