import React from 'react'
import FAQSection from '../components/home/FAQSection'
import TimerStats from '../components/home/TimerStats'
import VSPDataSheet from '../components/home/VPSDataSheet'

const Home = () => {
  return (
    <div>
      <VSPDataSheet/>
      <TimerStats/>
      <FAQSection/>
    </div>
  )
}

export default Home
