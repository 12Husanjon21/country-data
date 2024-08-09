import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSelectCountry } from "../redux/CountriesSlice";
import { Pagination } from "flowbite-react";
import { Link } from "react-router-dom";

const CountryTable = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.allCountries);
  const selectedCountries = useSelector(
    (state) => state.countries.selectedCountries
  );

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = countries.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCountries = countries.slice(startIndex, endIndex);

  const isSelected = (country) => {
    return selectedCountries.some((c) => c.cca3 === country.cca3);
  };

  const handleSelect = (country) => {
    dispatch(toggleSelectCountry(country));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log(`Joriy sahifa: ${page}`);
  };

  return (
    <div className="px-28">
      <table className="min-w-full border-collapse mt-4 mb-6">
        <thead className="bg-teal-700 text-white">
          <tr>
            <th className="p-2">Nomi</th>
            <th className="p-2">Aholisi</th>
            <th className="p-2">Poytaxti</th>
            <th className="p-2">Bayrogi</th>
            <th className="p-2">Tanlash</th>
          </tr>
        </thead>
        <tbody>
          {currentCountries.map((country) => (
            <tr key={country.cca3}>
              <td className="p-2 border">
                <Link to={`/country/${country.cca3}`}>
                  {country.name.common}
                </Link>
              </td>
              <td className="p-2 border">{country.population}</td>
              <td className="p-2 border">
                {country.capital ? country.capital[0] : "N/A"}
              </td>
              <td className="p-2 border">
                <img
                  src={country.flags.svg}
                  alt={`Flag of ${country.name.common}`}
                  className="w-8 h-5"
                />
              </td>
              <td className="p-2 border">
                <button
                  className={`p-1 px-2 rounded ${
                    isSelected(country) ? "bg-green-300" : "bg-gray-400"
                  }`}
                  onClick={() => handleSelect(country)}
                >
                  Tanlash
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center mt-4 mb-12">
        <Pagination
          currentPage={currentPage}
          layout="pagination"
          onPageChange={handlePageChange}
          showIcons
          totalPages={totalPages}
          previousLabel="Oldingi"
          nextLabel="Keyingi"
        />
      </div>
    </div>
  );
};

export default CountryTable;
