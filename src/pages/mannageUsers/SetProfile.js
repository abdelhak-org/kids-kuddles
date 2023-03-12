import React, { useState, useEffect } from "react";
import { auth } from "../../data/firebase.config";
import { updateProfile , onAuthStateChanged } from "firebase/auth";
import Container from "../../layout/Container";
import { useNavigate } from "react-router-dom";
const SetProfile = () => {
  const [name, setName] = useState("");
  const [email , setEmail] =useState("")

  const navigateTo = useNavigate("")
  const changeName = () => {
    updateProfile(name  && auth.currentUser, { displayName: name , id:auth.currentUser.uid})
      .then(() => {
        // Profile updated!
        console.log({name:auth.currentUser.displayName , email:auth.currentUser.email , id:auth.currentUser.uid});
        setName("");
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
      navigateTo("/profile")
  };
  useEffect(() => {

     onAuthStateChanged(auth, (user)=>{
      setEmail(user.email)
     })
    

  }, [name ,email]);

  return (
    <Container className="w-screen h-screen flex items-center justify-center">
      <div className="w-60 h-[32px] border border-gray-300 text-lg text-gray-800">
        <p>{email}</p>
      </div>
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        className="w-60 px-2 py-1 text-normal border border-red-500  outline-none "
      />
      <button onClick={changeName}
      className="p-1 bg-green-600 text-white font-bold "
      >send</button>
    </Container>
  );
};

export default SetProfile;
