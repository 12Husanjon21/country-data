import React from "react";
import { useSelector } from "react-redux";
import { IoExitOutline } from "react-icons/io5";

const DrawerComponent = ({ isOpen, onClose }) => {
  const selectedCountries = useSelector(
    (state) => state.countries.selectedCountries
  );

  return (
    <div className={`drawer ${isOpen ? "block" : "hidden"}`}>
      <div className="drawer-content">
        <button onClick={onClose} className="close-drawer">
          <span className="text-xl">
            <IoExitOutline />
          </span>
        </button>
        <ul>
          {selectedCountries.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DrawerComponent;
