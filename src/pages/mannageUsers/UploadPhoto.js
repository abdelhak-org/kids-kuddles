import React, { useState } from "react";
import Container from "../../layout/Container";
import { storage } from "../../data/firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const UploadPhoto = () => {
  const [file, setFile] = useState("");

  const handleUpload = () => {
    if (!file) {
      alert("Please upload an image first!");
    }
    const storageRef = ref(storage, `/images/${file.name}`); // progress can be paused and resumed. It also exposes progress updates. // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // update progress
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
        });
      }
    );
  };
  return (
    <Container className="w-screen h-screen bg-white border flex justify-center items-center">
      <input 
      type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}
           className="p-2 bg-green-600 border-none outline-none rounded text-white"
      >send</button>
    </Container>
  );
};

export default UploadPhoto;
