import React from 'react'

const Container = (props) => {
  
  return (
    <div className ={`w-screen  p-4 mx-auto my-0 border 
     shadow-sm rounded  ${props.className}`} >
    
      {props.children}
    
     </div>
  )
}


export default Container
