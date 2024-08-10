import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-inherit border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <hr className=" h-[1px] slate" />
      <div className="container p-8 flex justify-between">
        <Link to="/" className=" text-slate-400 text-2xl font-semibold">
          Logo
        </Link>
        <span className="text-slate-400">
          Built with Reactjs, JavaScript & Tailwind
        </span>
        <p className="text-slate-400">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
