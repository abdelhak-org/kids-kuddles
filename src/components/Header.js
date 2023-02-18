    import React from 'react'  ;
    import  Container from '../layout/Container' ;
    import muffin from "../assets/muffin.png";
    import horn1 from "../assets/horn1-removebg-preview.png";
    import {   FaFacebook, FaPhone, FaTwitter, FaYoutube } from 'react-icons/fa';
    const Header = () => {
    
    
    return (
        <Container className ="h-[50vh] bg-rose-800 p-0 relative  text-center flex justify-center items-center
        " >
         
        <h1 className=' text-[28px] text-white  font-sans capitalize  font-[800] tracking-wider
        
        '>
          wellcome to Your <br/><span className='text-blue-400'> kids<span className='text-yellow-500'>&&</span>Kuddles </span><br/> Blog</h1>
       <div className='w-full h-full absolute top-0 left-0 overflow-hidden '>
        <img src={muffin} alt="muffin" className='w-20 h-20 mx-auto'/>
        <img  src ={horn1} alt="uncorn" className='w-60 h-60  ' />
       </div>
       <div className=' w-16 h-full  fixed  bg-yellow-400  p-2 border-none outline-0 -right-6 cursor-pointer 
       hover:right-0 hover:items-center hover:duration-200 bottom-0 flex justify-center items-start flex-col
      
    
        '>
        <FaFacebook  className='
         text-blue-600 icon-primary'/>
        <FaTwitter  className='
          text-blue-400  icon-primary '/>
        <FaPhone  className='
         text-green-600 icon-primary'/>
        <FaYoutube  className='
         text-red-700 bg-white icon-primary rounded-md'/>
        </div>
        </Container>
    )
  }
  
  export default Header
