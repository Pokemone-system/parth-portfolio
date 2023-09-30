import React, { useState } from "react";
import Parth_resume from "./Parth_Resume.pdf";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="md:space-x-10">
      <div className="md:hidden flex justify-between items-center px-8">
        <button onClick={toggleMenu} className="px-4 py-1 rounded-lg text-gray">
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
        <a
          href={Parth_resume}
          download="Parth-Resume"
          target="_blank"
          rel="noreferrer"
          className="py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg text-lg border border-black glow"
        >
          Resume
        </a>
      </div>
      <ul
        className={`${
          menuOpen ? "block" : "hidden"
        } md:flex md:flex-row space-x-4 md:space-x-10 md:text-xl justify-center md:justify-center text-center`}
      >
        <li className="md:mx-auto my-10 ">
          <a
            href="#Experience"
            onClick={closeMenu}
            className="py-2 px-6 md:px-5 hover:bg-gray focus:bg-gray rounded-lg text-lg font-bold"
          >
            Experience
          </a>
        </li>
        <li className="md:mx-auto my-10">
          <a
            href="#Projects"
            onClick={closeMenu}
            className="py-2 px-6 md:px-5 hover:bg-gray focus:bg-gray rounded-lg text-lg font-bold"
          >
            Projects
          </a>
        </li>
        <li className="md:mx-auto my-10">
          <a
            href="#Skill"
            onClick={closeMenu}
            className="py-2 px-6 md:px-5 hover:bg-gray focus:bg-gray rounded-lg text-lg font-bold"
          >
            Skill
          </a>
        </li>
        <li className="md:mx-auto my-10">
          <a
            href="#contact"
            onClick={closeMenu}
            className="py-2 px-6 md:px-5 hover:bg-gray focus:bg-gray rounded-lg text-lg font-bold"
          >
            Contact
          </a>
        </li>
        <li className="md:mx-auto my-10">
          <a
            href={Parth_resume}
            download="Parth-Resume"
            target="_blank"
            rel="noreferrer"
            className="py-2 px-6 md:px-5 hover:bg-gray focus:bg-gray rounded-lg text-lg font-bold glow"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
