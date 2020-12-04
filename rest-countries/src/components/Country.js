import React from "react";

export function Country({ country, setModal, openModal, setModalDetails }) {
  function setDetails() {
    openModal();
    setModalDetails([
      {
        name: country.name,
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
