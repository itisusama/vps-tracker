import React from 'react';
import SubscribeSection from './SubscribeSection';
import { ReactComponent as Logo } from '../assets/images/logo.svg';
import { ReactComponent as Twitter } from '../assets/images/twitter.svg';
import { ReactComponent as Instagram } from '../assets/images/instagram.svg';
import { ReactComponent as Facebook } from '../assets/images/facebook.svg';

const Footer = () => {
  return (
    <>
      <SubscribeSection />
    <footer className="bg-gradient-to-b from-green-300 via-green-400 to-green-500 text-white">

      <div className="px-8 py-12 flex flex-col md:flex-row justify-between gap-12">
        {/* Left Side - Logo and Description */}
        <div className="flex flex-col space-y-4 max-w-sm">
          <Logo className="w-24 h-auto" />
          <p className="text-black text-sm">
            We understand that every business is unique.
            That’s why our team is committed to delivering tailored IT solutions—whether it’s
            customizing specific components or designing an end-to-end system—to meet your company’s
            distinct goals and operational needs.
          </p>
          <div className="flex space-x-4 mt-4">
            <Twitter className="w-5 h-5 cursor-pointer text-black hover:text-white" />
            <Instagram className="w-5 h-5 cursor-pointer text-black hover:text-white" />
            <Facebook className="w-5 h-5 cursor-pointer text-black hover:text-white" />
          </div>
        </div>

        {/* Right Side - Links */}
        <div className="flex flex-wrap gap-16">
          {/* Official Documents */}
          <div>
            <h4 className="text-black font-semibold mb-4">Official Documents</h4>
            <ul className="space-y-2 text-sm text-black">
              <li>General Terms & Conditions</li>
              <li>Privacy Statement</li>
              <li>Cookie Policy</li>
              <li>Disclaimer</li>
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-black font-semibold mb-4">Pages</h4>
            <ul className="space-y-2 text-sm text-black">
              <li>Home</li>
              <li>About us</li>
              <li>Private</li>
              <li>Commercial</li>
              <li>Contact us</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-black font-semibold mb-4">Contact Details</h4>
            <ul className="space-y-2 text-sm text-black">
              <li>
                Support Line<br />
                <span className="font-bold">06 - 309-309 08</span>
              </li>
              <li>
                Send an Email<br />
                <span className="text-blue-900">info@vsptracker.nl</span>
              </li>
              <li>Business Address</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-400 py-4 text-center text-sm text-black">
        © Copyright 2024, All Rights Reserved by VSP Tracker Team.
      </div>
    </footer>
    </>
  );
};

export default Footer;
