import React, { useContext } from "react";

// Import Context API
import { CountryContext } from "../context/CountryContext";

export const Countries = () => {
  const [countries, setCountries] = useContext(CountryContext);

  return (
    <div className="country-list">
      {countries.map((country) => (
        <div className="country">
          <img src={country.flag} alt="" />
          <div className="country-details">
            <h3>{country.name}</h3>
            <p>
              <strong>Populations:</strong> <span>{country.population}</span>
            </p>
            <p>
              <strong>Region:</strong> <span>{country.region}</span>
            </p>
            <p>
              <strong>Capital:</strong> <span>{country.capital}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
