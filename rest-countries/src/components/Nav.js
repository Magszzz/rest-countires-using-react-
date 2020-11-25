import React, { useContext } from "react";

// IMPORT COMPONENTS
import { CountryContext } from "../context/CountryContext";

export const Nav = () => {
  const [countries, setCountries] = useContext(CountryContext);
  return <nav>{countries.map((item) => console.log(item.name))}</nav>;
};
