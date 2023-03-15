    import React, { useState} from "react";
    import Modal from "../layout/Modal";
    //import useOnClickOutside from "../hooks/useClickOutSide";
    
    const ArticleComponent = ({ id, title, body }) => {
      const [showItem, setShowItem] = useState(false);
      
      
      
      return (
        <div className="w-full md:w-[45%] lg:w-[30%] min-h-[240px] border  p-2 m-2 relative">
          <h3 className="p-2 text-[#153939] text-[22px] cursor-pointer font-serif text-justify underline hover:text-rose-800 ">
            {title.slice(0, 28)}
          </h3>
          <p className="p-2 mx-auto my-2  text-[#426B6C] font-serif text-justify  ">
            {body}
          </p>
          <p className=" cursor-pointer  " onClick={() => setShowItem(!showItem)}>
            {!showItem ? (
              <span className="text-[#C93F4F] font-[10px] absolute bottom-2 ">
                {" "}
                Read...{" "}
              </span>
            ) : (
              <Modal>
                <div
                  
                  className=" bg-white  text-gray-900 w-[50%] h-[50%]  mx-auto "
                >
                  <h3 className="p-4 text-center mx-auto mt-20 font-bold text-rose-400">
                    {title}
                  </h3>
                  <p className="p-4 mx-auto my-2  text-slate-800 text-justify ">
                    {body}
                  </p>
                  <button
                    onClick={() => setShowItem(false)}
                    className="text-[#C93F4F] font-[10px]  py-2 px-4 border capitalize border-blue-200 cursor-pointer rounded shadow-sm "
                  >
                    close
                  </button>
                </div>
              </Modal>
            )}
          </p>
        </div>
      );
    };

    export default ArticleComponent;
