import { useEffect, useState } from 'react';
import {db} from "../data/firebase.config";
import {  collection ,query ,onSnapshot  } from 'firebase/firestore';



const useFirebaseData = (refPath) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    // Create a Firestore query to get documents from a collection
    const q = query(collection(db, refPath));

    // Listen for changes to the query
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(newData);
      console.log(newData)
    });

    // Unsubscribe from the query when the component unmounts
    return () => {
      unsubscribe();
    };
  }, [refPath]);

  return data;
};

export default useFirebaseData;
