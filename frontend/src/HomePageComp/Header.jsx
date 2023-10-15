import React from 'react'
import "./Header.css"
import trophy from "../pics/trophy.png"
const currentDate = new Date();

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const formattedDate = `${currentDate.getDate()} ${monthNames[currentDate.getMonth()]}, ${currentDate.getFullYear()}`;

const name = "Aarsh";
const Header = () => {
  return (
    <div className="header">
    <div className="left">
        <p>Good Morning {name}</p>
        <h1><span className="currenttime">{formattedDate}</span></h1>
    </div>
    <div className="right">
        <img className="header__image" src={trophy} alt="trophy_image"/>
    </div>
</div>
  )
}

export default Header