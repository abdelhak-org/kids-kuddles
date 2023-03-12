import React, { useEffect, useState } from "react";
import Container from "../../layout/Container";
import { auth } from "../../data/firebase.config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState({});
  const navigateTo =useNavigate("")
  const logOut = async() => {
    await signOut(auth);
    navigateTo("/")

  };
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, [user ]);
  return (
    <Container
      className="w-screen h-screen bg-yellow-300
  "
    >
      <h1 className="font-bold text-2xl bg-gray-900 text-white text-center p-2 my-4  ">
        user INFOS{" "}
      </h1>
      <p className="text-lg font-normal text-start bg-blue-200  my-4 w-60 mx-auto">
        Name : <span> {user.displayName} </span>
      </p>
      <p className="text-lg font-normal text-start bg-blue-200 my-4 w-60 mx-auto">
        Email : <span> {user.email} </span>
      </p>
      {!user ? (
        ""
      ) : (
        <button
          onClick={logOut}
          className=" p-2 rounded bg-green-600 text-white mx-auto  block"
        >
          {" "}
          LogOUT
        </button>
      )}
    </Container>
  );
};

export default Profile;
