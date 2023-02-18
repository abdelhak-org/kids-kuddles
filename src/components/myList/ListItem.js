  import React from 'react'
  import {Link} from "react-router-dom"
  const ListItem = (props) => {
    return (
      <Link className =' text-[153939]   uppercase text-[12px] cursor-pointer
       px-4 py-2  border border-blue-100 rounded-sm inline-block mx-2
       transition-all duration-1000    btn-primary relative  my-2   ' 
       to={props.to} 
      >
        {props.text}
      </Link>
    )
  }

  export default ListItem