import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function Navbar() {
  return (
    <header className="bg-black">
      <div className="h-head container mx-auto flex justify-between">
        <nav className="flex links">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inline-flex link items-center py-6 px-3 mr-4 text-white hover:text-gray-200 text-4xl font-bold cursive tracking-widest"
          >
            Derick
          </NavLink>

          <NavLink
            to="/project"
            activeClassName="text-white bg-gray-700"
            className="inline-flex link items-center py-3 px-3 my-6 rounded text-gray-400 hover:text-gray-200"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-white bg-gray-700"
            className="inline-flex link items-center py-3 px-3 my-6 rounded text-gray-400 hover:text-gray-200"
          >
            About
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6 soc">
          <SocialIcon url="https://github.com/cupofnoodlesboxofwine" className="mr-4 hover:border-white" target="_blank" bgColor="black" fgColor="#fff" style={{ height:50, width:50 }}/>
        </div>
      </div>
    </header>
  );
}
