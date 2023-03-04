import React from 'react'

const Box = (props) => {
  return (
    <div className={`${props.className}   bg-white shadow` }>
      {props.children}
    </div>
  )
}

export default Box
