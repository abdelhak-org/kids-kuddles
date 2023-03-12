import React, { useState , useRef } from "react";
import Container from "../../layout/Container";
import { ImgData } from "../../data/ImgData";
import Modal from "../../layout/Modal";
import useOnClickOutside from "../../hooks/useClickOutSide"
const Gallery = () => {
  const [showPortal, setShowPortal] = useState(false);
  const [currentImg , setCurrentImg] = useState("")
  const ref = useRef();
  
  
  useOnClickOutside(ref, () => setShowPortal(false));
  const ImageHandler = (ImgSrc)=>{
    setShowPortal(!showPortal);
    setCurrentImg(ImgSrc) 
  }
  return (
    <Container
      className=" w-[100vw] h-auto mx-auto   bg-yellow-200 
   "
    >
      <div
        className="w-[90%] min-h-screen mx-auto flex justify-around bg-white
      items-center flex-wrap"
      >
        {ImgData?.map((item) =>
          !showPortal ? (
            <img
              src={item.ImgSrc}
              alt="itemimg"
              key={item.id}
              className="w-[33%] h-auto p-2 cursor-pointer  "
              onClick={()=>ImageHandler(item.ImgSrc)}
            />
          ) : (
            <Modal className="relative">
              <img
                src={currentImg}
                alt="itemimg"
                key={item.id}
                ref ={ref}
                className="w-auto h-auto mx-auto p-2 cursor-pointer  "
                onClick={() => setShowPortal(!showPortal)}
              />
              <button
                className="text-white p-4 border border-white font-bold text-2xl absolute top-4 right-8 "
                onClick={() => setShowPortal(false)}
              >
                x
              </button>
            </Modal>
          )
        )}
      </div>
    </Container>
  );
};

export default Gallery;
