// import React, { useState, useEffect } from "react";
// import { Pagination } from "flowbite-react";

// // API orqali davlat ma'lumotlarini olish
// const fetchCountries = async () => {
//   try {
//     const response = await fetch("https://restcountries.com/v3.1/all");
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Failed to fetch countries", error);
//     return [];
//   }
// };

// const PaginationComponent = ({ itemsPerPage }) => {
//   const [countries, setCountries] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);

//   useEffect(() => {
//     const getCountries = async () => {
//       const countriesData = await fetchCountries();
//       setCountries(countriesData);
//     };
//     getCountries();
//   }, []);

//   const totalItems = countries.length;
//   const totalPages = Math.ceil(totalItems / itemsPerPage);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//     console.log(`Joriy sahifa: ${page}`);
//   };

//   // Ma'lumotlarni sahifalarga bo'lish
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const currentCountries = countries.slice(startIndex, endIndex);

//   return (
//     <div>
//       <div className="items">
//         {currentCountries.map((country, index) => (
//           <div key={index} className="p-2 border-b">
//             <p>
//               <strong>Nom:</strong> {country.name.common}
//             </p>
//             <p>
//               <strong>Axolisi:</strong> {country.population}
//             </p>
//             <p>
//               <strong>Poytaxti:</strong> {country.capital}
//             </p>
//             <img
//               src={country.flags.svg}
//               alt={`Flag of ${country.name.common}`}
//               className="w-12 h-8"
//             />
//           </div>
//         ))}
//       </div>

//       <div className="flex justify-center mt-4">
//         <Pagination
//           currentPage={currentPage}
//           layout="pagination"
//           onPageChange={handlePageChange}
//           showIcons
//           totalPages={totalPages}
//           previousLabel="Oldingi"
//           nextLabel="Keyingi"
//         />
//       </div>
//     </div>
//   );
// };

// // Usage Example
// const ExampleUsage = () => {
//   const itemsPerPage = 10; // Har bir sahifada 10 ta element ko'rsatish

//   return (
//     <div>
//       <PaginationComponent itemsPerPage={itemsPerPage} />
//     </div>
//   );
// };

// export default ExampleUsage;
