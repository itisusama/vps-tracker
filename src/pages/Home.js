import React from 'react'
import FAQSection from '../components/home/FAQSection'
import TimerStats from '../components/home/TimerStats'
import VSPDataSheet from '../components/home/VPSDataSheet'
import Banner from '../components/home/Banner'
import WorkingCards from '../components/home/WorkingCards'
import VPSCards from '../components/home/VPScards'
import TopSection from '../components/home/TopSection'
import HeroSection from '../components/home/HeroSection'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <TopSection/>
      <div className='py-8 flex justify-evenly bg-[#D8D8D8]'>
      <VPSCards text="DUMP TRACKER"/>
      <VPSCards text="EXCAVATER"/>
      <VPSCards text="SCRAPER"/>
      </div>
      <WorkingCards/>
      <Banner/>
      <VSPDataSheet/>
      <TimerStats/>
      <FAQSection/>
    </div>
  )
}

export default Home
