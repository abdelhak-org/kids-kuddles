import React from "react";
import Container from "../../layout/Container";
import BaseButton from "../../components/BaseButton";
import aboutusOne from "../../assets/aboutus-one.jpg";

const About = () => {
  return (
    <Container className="min-h-screen w-screen ">
      <div
        className=" w-[80%] h-auto md:h-[80%] border  rounded-2xl md:flex-row
       flex-col flex justify-between items-center mx-auto shadow-2xl  overflow-hidden"
      >
        <div className="w-full md:w-[50%] h-full  py-12 px-12">
          <h3 className="text-[28px]  font-extrabold text-start mt-12 tracking-widest font-serif text-[#278989]">
            Best Learning
            <br /> Blogger <br />
            In The WORLD
          </h3>
          <p className="text-sm font-sans tracking-wide py-2">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit..." "There is no one who loves pain
            itself, who seeks after it and wants to have it, simply because it
            is pain..."
          </p>
          <div className="w-full h-auto flex flex-rows items-center mt-4">
            <input
              className=" border shadow-md border-gray-300 p-1 outline-none w-90 h-10"
              placeholder="Find a Articles ..."
            />
            <BaseButton
              text="search "
              className="bg-[#129f9f] rounded-none capitalize"
            />
          </div>
        </div>
        <div className="w-full md:w-auto h-full ">
          <img
            src={aboutusOne}
            className="h-full mx-auto border "
            alt="aboutusimg"
          />
        </div>
      </div>
    </Container>
  );
};

export default About;
