import React from 'react'
import "./style.css"
import transport from "../pics/transport.png"
import progressBar from "../pics/progress-bar.png"
const Card = (props) => {
  return (
    <div className="card">
    <div className="card_image_conatiner">
      <img src={transport} alt="image" className="card__image" />
    </div>
    <div className="card__content">
      <p className="card__heading">{props.heading}</p>
      <img
        src={progressBar}
        alt="completion__rate"
        className="cardcompletion__rate"
      />
      <p className="card__percentage">{props.percentage}</p>
      <p className="card__weight">{props.weight}</p>
    </div>
  </div>
  )
}

export default Card