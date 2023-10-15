import React from 'react'
import Card from './HomePageComp/Card'
import LineChart from './HomePageComp/LineChart'
import Header from './HomePageComp/Header'
import pieChart from "./pics/piechartimg.png"
const Home = () => {
  return (
    <div style={{height:"120vh"}}>
      <Header />
      <div style={{width:"50vw",margin:"auto"}}>
      <img src={pieChart} style={{objectFit:"contain",width:"100%"}} alt="" />
      </div>
      <div className='flex-box-scroll'>
      <Card src="//unsplash.it/500/500" heading="test" complete="//unsplash.it/200/200" percentage="50" weight="100"/>
      <Card src="//unsplash.it/500/500" heading="test" complete="//unsplash.it/200/200" percentage="50" weight="100"/>
      <Card src="//unsplash.it/500/500" heading="test" complete="//unsplash.it/200/200" percentage="50" weight="100"/>
      <Card src="//unsplash.it/500/500" heading="test" complete="//unsplash.it/200/200" percentage="50" weight="100"/>
      </div>
      <LineChart />
    </div>
  )
}

export default Home