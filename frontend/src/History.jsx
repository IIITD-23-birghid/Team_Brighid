import React from 'react'
import PieChart from './HistoryPageComp/PieChart'
import Header from './HomePageComp/Header'
import Card from './HistoryPageComp/Card'
import Chicken from "./pics/chicken.png"
import fish from "./pics/fish.png"
import pizza from "./pics/pizza.png"
const History = () => {
  return (
    <div style={{height:"150vh"}}>
      <Header />
      <PieChart />
      <div className="main-container">
      <div className="card-container">
        <Card
          image={Chicken}
          text="Bus"
          time="Today 12:32pm"
        />
        <Card
          image={pizza}
          text="Chicken"
          time="Yesterday 02:12pm"
        />
        <Card
          image={fish}
          text="Fish"
          time="Yesterday 02:12pm"
        />
        {/* <Card
          image={pizzaImage}
          text="Pizza"
          time="Today 12:32pm"
        />
        <Card
          image={topup}
          text="Top Up"
          time="Yesterday 02:12pm"
        /> */}
      </div>
    </div>
    </div>
  )
}

export default History