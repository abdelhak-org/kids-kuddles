import { useState } from 'react';
import {auth} from "../data/firebase.config"
import {createUserWithEmailAndPassword} from "firebase/auth"



const useCreateUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const createUser = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth,email, password);
      const newUser = userCredential.user;
      setUser(newUser);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { createUser, isLoading, error, user };
};

export default useCreateUser;
