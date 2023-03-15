    import React from 'react'  ;
    import  Container from '../layout/Container' ;
    import muffin from "../assets/muffin.png";
    import horn1 from "../assets/horn1-removebg-preview.png";
    import {   FaFacebook, FaPhone, FaTwitter, FaYoutube } from 'react-icons/fa';
    const Header = () => {
    
    
    return (
        <Container className ="h-screen  md:h-[50vh]  bg-rose-800 p-0 relative  text-center flex justify-center items-center
        " >
         
        <h1 className=' text-[28px] text-white  font-sans capitalize font-[600]  md:font-[800] tracking-wider
        
        '>
          wellcome to Your <br/><span className='text-blue-400'> kids<span className='text-yellow-500'>&&</span>Kuddles </span><br/> Blog</h1>
      
       <div className='w-screen h-16 flex-col  md:w-16 md:h-full  fixed  bg-yellow-400  p-2 border-none outline-0 md:-right-6 cursor-pointer 
       md:hover:right-0 hover:items-center hover:duration-200 bottom-0  justify-center items-start hidden md:flex
      
    
        '> 
        <FaFacebook  className='
         text-blue-600 icon-primary mx-3 block'/>
        <FaTwitter  className='
          text-blue-400  icon-primary mx-3 bblock'/>
        <FaPhone  className='
         text-green-600 icon-primary mx-3 block'/>
        <FaYoutube  className='
         text-red-700 bg-white icon-primary rounded-md mx-3 block'/>
        </div>

        </Container>
    )
  }
  
  export default Header
