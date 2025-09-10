import { useState } from "react";
import { Link } from "react-router-dom";

const FullScreenMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* ハンバーガーメニューアイコン - スマホでのみ表示 */}
      <div
        className={`fixed top-5 right-5 z-50 cursor-pointer flex md:hidden flex-col justify-around w-10 h-6 ${
          isOpen ? "open" : ""
        }`}
        onClick={toggleMenu}
      >
        <div
          className={`bg-gray-800 h-0.5 w-full mb-0.5 transition-all duration-300 ease-linear ${
            isOpen ? "transform rotate-45 translate-y-2" : ""
          }`}
        ></div>
        <div
          className={`bg-gray-800 h-0.5 w-full mb-0.5 transition-all duration-300 ease-linear ${
            isOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`bg-gray-800 h-0.5 w-full transition-all duration-300 ease-linear ${
            isOpen ? "transform -rotate-45 -translate-y-2" : ""
          }`}
        ></div>
      </div>

      {/* フルスクリーンメニュー - スマホでのみ表示 */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-90 flex justify-center items-center md:hidden">
          <ul className="list-none text-center mt-1/2 p-0">
            <li className="p-2.5">
              <Link
                to="/"
                className="text-white no-underline text-2xl hover:underline"
              >
                Home
              </Link>
            </li>
            <li className="p-2.5">
              <Link
                to="/Vocaloid"
                className="text-white no-underline text-2xl hover:underline"
              >
                vocaloid original
              </Link>
            </li>
            {/* <li><Link to="/Soundmake">sound make</Link></li> */}
            <li className="p-2.5">
              <Link
                to="/Otherwork"
                className="text-white no-underline text-2xl hover:underline"
              >
                other works
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default FullScreenMenu;
