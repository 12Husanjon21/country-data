import React from "react";
import { useSelector } from "react-redux";
import { Carousel } from "flowbite-react";

const CarouselComponent = () => {
  const selectedCountries = useSelector(
    (state) => state.countries.selectedCountries
  );

  // Elementlarni 4 ta guruhlarga bo'lish
  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const countryChunks = chunkArray(selectedCountries, 4);

  return (
    <div className="carousel mt-4 px-10">
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 bg-inherit mb-10">
        <Carousel slideInterval={3000}>
          {countryChunks.map((chunk, index) => (
            <div key={index} className="flex justify-center items-center">
              {chunk.map((country, idx) => (
                <div key={idx} className="carousel-item m-2 p-4 max-w-40">
                  <img
                    src={country.flags.svg}
                    alt={`Flag of ${country.name.common}`}
                    className="w-full h-full"
                  />
                  <p>{country.name.common}</p>
                  <p>Aholisi: {country.population}</p>
                </div>
              ))}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselComponent;
