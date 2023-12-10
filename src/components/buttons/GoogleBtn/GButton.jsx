import React from 'react'
import './GButton.css'
import googleicon from '../../../assets/googleicon.svg'
const GButton = (props) => {
  return (
    <button className='GButton'> <img src={googleicon} alt="googleicon" height={20} /> &nbsp; {props.name}</button>
  )
}

export default GButton