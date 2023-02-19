  import React from 'react' ;
  import Container from '../../layout/Container';
  import useFetchData from '../../hooks/useFetchData' ;
  import ArticleComponent from '../../components/ArticleComponent';
  const Home = () => {
    const  data = useFetchData("https://jsonplaceholder.typicode.com/posts")
    return (
      <Container className ="min-h-screen bg-yellow-200 pr-20 text-center font-2xl
      flex justify-between items-start flex-wrap
      " >
        {
          data.slice(0,8).map((item)=>
          <ArticleComponent id={item.id} title={item.title} body={item.body}/>
          )
        }
      </Container>
    )
  }
  
  export default Home
