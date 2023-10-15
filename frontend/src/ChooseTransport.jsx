import React from 'react'
import Header from "./HomePageComp/Header";
import Card from "./ChooseTransportcomp/Card"
import Bike from "./pics/Bike.jpeg"
import Bus from "./pics/Bus.jpeg"
import Car from "./pics/Car.jpeg"
import Plane from "./pics/Plane.jpeg"
import Train from "./pics/Train.jpeg"
import "./ChooseTransport.css"
import axios from 'axios';
const ChooseTransport = () => {
  const submit = async () => {
    let dateTravelled = document.forms[0][0].value
    let TimeTravelled = document.forms[0][1].value
    let Passengers = document.forms[0][2].value
    let VehicleSize = document.forms[0][3].value
    if(!dateTravelled || !TimeTravelled || !Passengers || !VehicleSize){
      alert("Fill All Fields")
    }else{
      const res = await axios.post("https://brighid.ieeegtbit.com/emissions",{
        dateTravelled,
      TimeTravelled,
      Passengers,
      VehicleSize,
      })
      if(res.data === "Created Successfully"){
        alert("Record Created Successfully")
      }
      console.log(res)
    }
  }
  return (
    <div>
      <Header />
      <div style={{background:"white",borderRadius:"10px",padding:"10px",width:"90vw",margin:"auto"}}>
      <div style={{display:"flex",justifyContent:"space-between",gap:"3vw",margin:"1rem",overflow:"scroll"}}>
      <Card transportimage={Car} transportname="Car"/>
      <Card transportimage={Bike} transportname="Bike"/>
      <Card transportimage={Bus} transportname="Bus"/>
      <Card transportimage={Plane} transportname="Plane"/>
      <Card transportimage={Train} transportname="Train"/>
      </div>
      <form action="">
        <h4>Date and Time</h4>
        <div>
          <label htmlFor="">📆 Date Travelled</label>
          <input type="date" name='date-travelled'/>
        </div>
        <br />
        <div>
          <label htmlFor="">⏳Time Travelled (Minutes)</label>
          <input type="text" />
        </div>
        <h4 style={{marginTop:"1rem"}}>Details</h4>
        <div>
          <label htmlFor="">👱🏻Number of Passengers</label>
          <input type="number" />
        </div>
        <br />
        <div>
          <label htmlFor="">🚘 Vehicle Size</label>
          <select name="" id="">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
      </form>
      </div>
      <button style={{padding:"10px 0 10px 0",background: "#40CE8CB2",width:"30%",borderRadius:"10px",margin:"1rem"}} onClick={submit}>Save</button>
    </div>
  )
}

export default ChooseTransport