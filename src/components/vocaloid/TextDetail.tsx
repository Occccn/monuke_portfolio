import { useState } from "react";

interface TextDetailProps {
  description_detail: string[];
}

const TextDetail = ({ description_detail }: TextDetailProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="cursor-pointer border-none py-2.5 px-5 text-base !bg-white text-[rgb(67,64,230)] transition-colors duration-300 hover:text-[rgba(65,62,241,0.3)]"
        onClick={toggleMenu}
      >
        read more
      </button>
      {isOpen && (
        <div className="fixed inset-0 w-full h-full text-white bg-black bg-opacity-90 flex justify-center items-center text-left z-50 whitespace-normal">
          <div
            className="absolute top-2.5 right-2.5 cursor-pointer text-2xl before:content-['×'] before:text-white before:text-4xl hover:before:text-gray-300"
            onClick={toggleMenu}
          ></div>
          <div className="w-[70%]">
            <ul className="list-none text-center">
              {description_detail.map((item, index) => (
                <li key={index} className="p-2.5">
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default TextDetail;
