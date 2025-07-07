import React, { useState } from "react";
import "../assets/Header.css"; // CSSファイルをインポート
import { Link } from "react-router-dom";
import FullScreenMenu from "./hamburger.jsx";

const Header = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-10 bg-[#0f9e7f] h-[120px] shadow-lg flex items-center">
        <div className="header-title flex-grow">
          <h2 className="subtitle text-left m-0 text-white text-[20px] ml-[10%]">
            monuke
          </h2>
          <h1 className="text-left m-0 text-transparent text-[40px] ml-[10%] mt-[10px] w-1/2 relative overflow-hidden whitespace-nowrap font-bold leading-[1.1]">
            {title}
          </h1>
        </div>
        <nav className="header-nav hidden md:block">
          <ul className="flex gap-[10px] text-[20px] list-none p-0">
            <li>
              <Link
                to="/"
                className="text-[#f4f4f4] py-[5px] px-[10px] no-underline hover:text-[#333] transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Vocaloid"
                className="text-[#f4f4f4] py-[5px] px-[10px] no-underline hover:text-[#333] transition-colors duration-300"
              >
                Vocaloid Original
              </Link>
            </li>
            {/* <li><Link to="/Soundmake">Sound Make</Link></li> */}
            <li>
              <Link
                to="/Otherwork"
                className="text-[#f4f4f4] py-[5px] px-[10px] no-underline hover:text-[#333] transition-colors duration-300"
              >
                Other Works
              </Link>
            </li>
          </ul>
        </nav>
        <FullScreenMenu />
      </header>
    </>
  );
};

export default Header;
