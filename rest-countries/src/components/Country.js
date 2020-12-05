import React from "react";
import { Countries } from "./Countries";

export function Country({ country, openModal, setModalDetails }) {
  function setDetails() {
    openModal();
    setModalDetails([
      {
        name: country.name,
        flag: country.flag,
        nativename: country.nativeName,
        population: country.population,
        region: country.region,
        subregion: country.subregion,
        capital: country.capital,
        topLevelDomain: country.topLevelDomain,
        currencies: country.currencies,
        languages: country.languages,
        borders: country.borders,
      },
    ]);
  }
  return (
    <div className="country" onClick={setDetails}>
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
  );
}
