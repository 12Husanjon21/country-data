// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";

const Header = ({ onDrawerOpen }) => {
  return (
    <header className="bg-[#0891b2] text-white shadow-md fixed w-full max-w-[900px] ">
      <div className="flex justify-between items-center px-4 py-2">
        <Link to="/" className="text-2xl font-semibold">
          Logo
        </Link>
        <Button onClick={onDrawerOpen}>Tanlanganlar</Button>
      </div>
    </header>
  );
};

export default Header;
