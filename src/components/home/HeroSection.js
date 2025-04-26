import React from 'react';
import Hero from "../../assets/images/hero.png"

const HeroSection = () => {
  return (
    <section className='mt-[-3rem] relative z-[-1]'>
      <div className="relative bg-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center py-12 md:py-24">
          {/* Left content section */}
          <div className="flex flex-col w-full lg:w-1/2 justify-center items-start p-8 z-10">
            <h3 className="text-lg md:text-xl text-green-700 font-medium mb-2">
              VPS TRACKER
            </h3>
            <div className="mb-6">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
                UNLOCK PEAK PERFORMANCE:
              </h1>
              <p className="text-lg md:text-xl text-gray-700">
                real-time productivity tracking for every fleet, every brand.
              </p>
            </div>
            <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md font-medium">
              Contact Us
            </button>
          </div>
          
          {/* Right image section */}
          <div className="w-full lg:w-1/2 p-8">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden">
                <img 
                  src={Hero} 
                  alt="Construction vehicles in action" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
