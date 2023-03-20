import React from 'react'
import Container from "../../layout/Container";
import useFetchData from "../../hooks/useFetchData"
import Post from './Post';
import  useFirebaseData  from '../../hooks/useFirebaseData';
const Articles = () => {
  const firedata = useFirebaseData("posts")
  const posts = useFetchData("https://jsonplaceholder.typicode.com/posts")
  return (
    <Container className ="h-auto bg-yellow-200 text-center font-2xl" >
      
     {
     firedata?.map((post)=>{
      return(
      <Post title={post.Title} body={post.body}  key={post.id}/>
      )
     })

     }
     {
      posts?.slice(0,10).map((post)=>{
        return(
        <Post title={post.title} body={post.body} key={post.id}/>
        )
       })
     }







    </Container>
  )
}

export default Articles
