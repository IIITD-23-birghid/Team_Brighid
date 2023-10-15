import React, { useEffect, useState } from 'react'
import Header from './HomePageComp/Header'
import Card from './HistoryPageComp/Card'
import Chicken from "./pics/chicken.png"
import Pizza from "./pics/pizza.png"
import Fish from "./pics/fish.png"
import Plane from "./pics/Plane.jpeg"
import Bus from "./pics/Bus.jpeg";
import Bike from "./pics/Bike.jpeg";
import Car from "./pics/Car.jpeg";
import axios from 'axios'

const Category = () => {
  const [emission,setEmissions] = useState([]);
  useEffect(() => {
    const a = async () => {
      const emissions = await axios.get("https://brighid.ieeegtbit.com/emissions");
      console.log(emissions.data)
      setEmissions(emissions.data)
    }
    a();
  }, [])
  
  return (
    <div style={{height:"140vh"}}>
      <Header />
      <h1 style={{color:"white",margin:"1rem"}}>Category</h1>
      <div style={{background:"white",width:"80vw",borderRadius:"10px",margin:"auto"}}>
        <h3 style={{color: "#129976",margin:"1rem"}}>Transport</h3>
        {emission ? emission.map(em => (
          <Card image={Car} text="Car" time={em.TimeTravelled} white="true" />
        )): <h1>No Emissions</h1>}
          {/* <Card image={Plane}
          text="Plane"
          time="Today 1am" white="true" />
          <Card  image={Bus}
          text="Bus"
          time="Today 12:32pm" white="true"/>
          <Card image={Bike}
          text="Bike"
          time="Yesterday 4:50pm" white="true" />
          <Card image={Bike}
          text="Bike"
          time="13 Oct 3:50pm" white="true" />
          <Card image={Car}
          text="Car"
          time="12 Oct 12:50pm" white="true" /> */}
      </div>
      <div style={{background:"white",width:"80vw",borderRadius:"10px",margin:"auto"}}>
        <h3 style={{color: "#129976",margin:"1rem"}}>Food</h3>
        <Card  image={Chicken}
          text="Chicken"
          time="Today 12:32pm" white="true"/>
          <Card image={Fish}
          text="Fish"
          time="Yesterday 4:50pm" white="true" />
          <Card image={Pizza}
          text="Pizza"
          time="13 Oct 3:50pm" white="true" />
          <Card image={Fish}
          text="Fish"
          time="12 Oct 12:50pm" white="true" />
      </div>

    </div>
  )
}

export default Category