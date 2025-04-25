import React from 'react';

const SubscribeSection = () => {
  return (
    <div className="bg-green-800 text-white rounded-t-xl p-8 flex flex-col md:flex-row justify-between items-center w-[90%] mx-auto">
      <div className="flex flex-col space-y-2">
        <h2 className="text-2xl font-bold text-black">Let’s Start Tracking Smarter Today!</h2>
        <p className="text-black text-sm">Feel free to send us your questions or request a free consultation.</p>
      </div>

      <div className="flex flex-col md:items-end space-y-2 mt-6 md:mt-0">
        <p className="text-black text-sm">Optimizing Every Load, Every Second, Every Site.</p>
        <div className="flex">
          <input
            type="email"
            placeholder="E-mail address"
            className="rounded-l-full py-2 px-4 text-black focus:outline-none w-60 bg-gray-100"
          />
          <button className="bg-black text-white rounded-r-full px-6 hover:bg-green-700">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
