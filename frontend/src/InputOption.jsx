import React from 'react'
import { Link } from 'react-router-dom'
import "./InputOptionsStyle.css"
const InputOption = () => {
  return (
    <div className='center'>
        <div>Upload / Click a picture</div>
        <Link to="/chooseTransport"><div>Choose Transport</div></Link>
    </div>
  )
}

export default InputOption