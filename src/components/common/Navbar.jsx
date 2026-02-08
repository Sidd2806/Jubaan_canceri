import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative w-full h-16 flex items-center justify-between">


      <h1 className="text-2xl md:text-4xl font-semibold ml-4 md:ml-20">
        <span className="text-[#E15315]">Bimal</span>-ultra
      </h1>

  
      <button
        className="md:hidden text-3xl mr-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

  
      <ul className="hidden md:flex items-center gap-10 mr-4 md:mr-20 text-xl">
        <li>
          <a className="hover:text-[#E15315]" href="#top">Home</a>
        </li>
        <li>
          <a className="hover:text-[#E15315]" href="#products">Products</a>
        </li>
        <li>
          <a className="hover:text-[#E15315]" href="#contact">Contact</a>
        </li>
        <li>
          <a className="hover:text-[#E15315]" href="#about">About</a>
        </li>
        <li>
          <a className="bg-[#E15315] rounded-full px-4 py-1 hover:bg-[#c74610]">
            Die Now
          </a>
        </li>
      </ul>

   
      {isOpen && (
        <div className="md:hidden absolute top-16 right-4 w-56 bg-black text-white rounded-xl shadow-lg p-5">
          <ul className="flex flex-col gap-4 text-lg">
            <li><a onClick={() => setIsOpen(false)} href="#top">Home</a></li>
            <li><a onClick={() => setIsOpen(false)} href="#products">Products</a></li>
            <li><a onClick={() => setIsOpen(false)} href="#contact">Contact</a></li>
            <li><a onClick={() => setIsOpen(false)} href="#about">About</a></li>
            <li>
              <a
                onClick={() => setIsOpen(false)}
                className="block text-center bg-[#E15315] rounded-full py-1"
              >
                Die Now
              </a>
            </li>
          </ul>
        </div>
      )}

    </nav>
  );
};

export default Navbar;
