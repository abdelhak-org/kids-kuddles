import React from 'react'
import ListItem from './ListItem';

const Mylist = () => {
  return (
    <ul className='flex  flex-col md:flex-row'>
      
      <ListItem to="/" text="home"/>
      

      <ListItem to="about" text="about"/> 
      

      <ListItem to="contact" text="contact"/>
      

      <ListItem to ="gallery" text="gallery"/>     
      

      <ListItem to="articles"  text= "articles"/> 

    </ul>
  )
}

export default Mylist
