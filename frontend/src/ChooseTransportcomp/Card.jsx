import React from 'react'
import "./Card.css"
const Card = (props) => {
  return (
    <div className="card__transport">
    <img className="transport__image" src= {props.transportimage} alt= ""/>
    <p>{props.transportname}</p>
</div>
  )
}

export default Card