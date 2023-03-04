import React from 'react'

const   TextInput  = (props) => {
  return (

    <div className="w-full  h-auto  my-4 ">
    <input onChange={props.ChangeHandler}
      placeholder={props.placeholder}
      className="
      w-[80%] border p-2 ml-2 my-2  rounded-md outline-none 
      text-lg  font-mono focus:border-[#49dcdc]  text-slate-800
      
      "
    />
  </div>
  )
}

export default TextInput
