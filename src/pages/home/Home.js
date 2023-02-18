  import React from 'react'
  import Container from '../../layout/Container';
  import useFetchData from '../../hooks/useFetchData'
  const Home = () => {
    const  data = useFetchData("https://jsonplaceholder.typicode.com/posts")
    return (
      <Container className ="min-h-screen bg-yellow-200 pr-20 text-center font-2xl
      flex justify-between items-start flex-wrap
      " >
        {
          data.slice(0,8).map((item)=>
          <div key={item.id} className='w-[22%] border  border-blue-300 p-2 m-2 rounded-sm'>
            <h3 className='p-2 text-gray-800 font-semibold  ' >{item.title}</h3>
            <p className="p-2 mx-auto my-2  ">{item.body}</p>
          </div>
          )
        }
      </Container>
    )
  }

  export default Home
