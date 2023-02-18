import React from 'react'
import BaseButton from '../components/BaseButton'

const Card = (props) => {
  return (
    <div className='w-60 text-center h-80 border rounded-md border-blue-300 shadow-sm overflow-hidden'>
      <img src={ props.image} alt='bild' className='w-full '/>
      <h3> {props.title} </h3>
      <p>{props.description} </p>
      <BaseButton  text="get it"/>
    </div>
  )
}

export default Card
