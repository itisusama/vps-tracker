import React from 'react';
import Music from "../../assets/images/music.png";

const TopSection = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content Section */}
        <div className="flex-1 max-w-xl">
          <h2 className="text-gray-700 font-medium mb-4">
            Why Smart Tap VSP Tracker?
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Welcome To Smart Tap Productivity
          </h1>
          <p className="text-gray-600 mb-8">
            The VSP Tracker Productivity System simplifies tracking across mixed-brand fleets.
          </p>
          
          {/* Features List */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 mt-1 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-700">Brand Agnostic & Universally Compatible</p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 mt-1 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-700">Effortless & Accurate Operator Logging</p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 mt-1 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-700">Seamless System Integration & Visualization</p>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex-1">
          <img 
            src={Music}
            alt="VSP Tracker Visualization"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default TopSection;
