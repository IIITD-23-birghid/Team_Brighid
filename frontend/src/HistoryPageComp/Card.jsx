import React from 'react'
import "./Card.css"
const Card = (props) => {
  return (
    <div className={props.white === "true" ? "white": ""}>
    <div className="card-f">
    <div className="card-content-f">
        <div className='cc'>
            <img src={props.image} alt="Card" className="card-image" />
  <div className="text-container">
    <p className="card-text">{props.text}</p>
    <p className="card-time">{props.time}</p>
  </div>
  </div>
  <div className="price-container">
    <p className="card-price">{`+${(Math.random() * 100).toFixed(2)} g`}</p>
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" className="arrow-icon">
<path d="M8.78145 7.99999L5.48145 4.69999L6.42411 3.75732L10.6668 7.99999L6.42411 12.2427L5.48145 11.3L8.78145 7.99999Z" fill="#FFFFFF" />
</svg>
  </div>
</div>
</div>
</div>
  )
}

export default Card