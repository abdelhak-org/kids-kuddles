import React from 'react'
import Container from "../../layout/Container";
import useFetchData from "../../hooks/useFetchData"
import Post from './Post';

const Articles = () => {

  const posts = useFetchData("https://jsonplaceholder.typicode.com/posts")
  return (
    <Container className ="h-auto bg-yellow-200 text-center font-2xl" >
    
     {
     posts.slice(0,10).map((post)=>{
      return(
      <Post title={post.title} body={post.body} key={post.id}/>
      )
     })

     }








    </Container>
  )
}

export default Articles
