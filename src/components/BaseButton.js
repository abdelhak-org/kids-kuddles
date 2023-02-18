import React from 'react'

const BaseButton = (props) => {
  return (
    <button  onClick={props.clickhandler}
    className = {`py-2 px-4 border border-blue-300 rounded-md shadow-md
    bg-green-800 text-white font-semibold ${props.className}
     ` }>
     {props.text}
    </button>
  )
}

export default BaseButton
