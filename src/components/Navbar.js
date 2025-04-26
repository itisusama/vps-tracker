import { Link } from "react-router-dom";
import { ReactComponent as YoutubeIcon } from "../assets/images/youtube.svg";
import { ReactComponent as TwitterIcon } from "../assets/images/twitter.svg";
import { ReactComponent as InstagramIcon } from "../assets/images/instagram.svg";
import { ReactComponent as FacebookIcon } from "../assets/images/facebook.svg";
import { ReactComponent as Logo } from "../assets/images/logo.svg";

export default function Navbar() {
  return (
    <nav className="relative top-0">
      <div className="flex flex-col">
        {/* Top bar */}
        <div className="flex justify-end items-center py-4 space-x-3 bg-[#1a1a1a]">
          <YoutubeIcon className="h-5 w-5 text-white" />
          <TwitterIcon className="h-5 w-5 text-white" />
          <InstagramIcon className="h-5 w-5 text-white" />
          <FacebookIcon className="h-5 w-5 text-white" />
        </div>

        {/* Main Navbar */}
        <div className="flex items-center mt-[-1rem] justify-between bg-black px-6 py-3 mx-auto rounded-md">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Logo className="h-10 w-auto" />
          </div>

          {/* Menu */}
          <div className="flex space-x-6 text-white text-sm">
            <Link to="/" className="text-green-500 hover:underline">
              HOME
            </Link>
            <Link to="/machines" className="hover:underline">
              MACHINES
            </Link>
            <Link to="/devices-positioning" className="hover:underline">
              DEVICES & POSITIONING
            </Link>
            <Link to="/workflows" className="hover:underline">
              WORKFLOWS
            </Link>
            <Link to="/tools-calculators" className="hover:underline">
              TOOLS & CALCULATORS
            </Link>
            <Link to="/resources-support" className="hover:underline">
              RESOURCES & SUPPORT
            </Link>
            <Link to="/portal-app" className="hover:underline">
              PORTAL & APP
            </Link>
          </div>

          {/* Contact Button */}
          <div>
            <Link
              to="/contact"
              className="bg-[#0a0a0a] ml-4 border border-green-700 text-green-500 px-4 py-2 rounded-md hover:bg-green-700 hover:text-white transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}