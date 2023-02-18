  import React from 'react'
  import Container from '../layout/Container'
  import Logo from './Logo'
  import Mylist from './myList/Mylist'

  const Navbar = () => {
    return (
      <Container className="w-screen py-2 px-8 border capitalize flex justify-around items-center flex-col md:flex-row" >
      
      <Logo />
      <Mylist  />
      </Container>
    )
  }

  export default Navbar
