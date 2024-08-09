// src/components/CountryPage.js
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import LineChart from "./LineChart"; // Make sure to import LineChart correctly

const CountryPage = () => {
  const { cca3 } = useParams(); // Get the country cca3 code from URL params
  const country = useSelector((state) =>
    state.countries.allCountries.find((c) => c.cca3 === cca3)
  );

  if (!country) return <div>Loading...</div>;

  // Example data for LineChart (replace with actual data if available)
  const chartData = [
    { month: "Jan", amount: 500 },
    { month: "Feb", amount: 700 },
    { month: "Mar", amount: 600 },
    // Add more data as needed
  ];

  return (
    <div className="flex flex-col mt-16 p-4">
      <div className="flex gap-4">
        <div className="w-1/3 p-4 border-r border-gray-300">
          <img
            src={country.flags.svg}
            alt={`Flag of ${country.name.common}`}
            className="w-full mb-4"
          />
          <h1 className="text-xl font-bold">{country.name.common}</h1>
          <p>
            <strong>Aholisi:</strong> {country.population.toLocaleString()}
          </p>
          <p>
            <strong>Valyuta:</strong>{" "}
            {country.currencies ? Object.keys(country.currencies)[0] : "N/A"}
          </p>
        </div>
        <div className="w-2/3 p-4">
          <h2 className="text-xl font-bold mb-4">Oylik Xarajatlar</h2>
          <div className="h-80">
            <LineChart data={chartData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
