import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCountries } from "../redux/CountriesSlice";
import CountryTable from "./CountryTable";
import CarouselComponent from "./CarouselComponent";
import Footer from "./Footer";
// import PaginationComponent from "./PaginationComponent";

const HomePage = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.allCountries);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => dispatch(setCountries(data)));
  }, [dispatch]);

  return (
    <div className="mt-28">
      <section className="text-center ">
        <h1 className="text-4xl font-bold">Davlatlar ro'yxati</h1>
        <CarouselComponent />
      </section>
      <CountryTable countries={countries} />
      {/* <PaginationComponent /> */}
      <Footer />
    </div>
  );
};

export default HomePage;
