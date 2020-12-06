import React, { useContext, useState } from "react";

// Import Context API
import { CountryContext } from "../context/CountryContext";
import { Country } from "../components/Country";

export const Countries = ({ color }) => {
  const [countries] = useContext(CountryContext);
  const [modal, setModal] = useState(false);
  const [modalDetails, setModalDetails] = useState([]);

  function openModal() {
    setModal((prev) => !prev);
  }

  return (
    <>
      {/* Modal */}
      <div className={`modal-container ${modal ? "modal-open" : ""}`}>
        {modalDetails.map((country) => (
          <div className="modal" key={Math.random() * 9999}>
            <div className="country-content">
              <button
                onClick={openModal}
                className={`btn-mode ${color ? "btn" : ""} `}
              >
                <i className="fa fa-arrow-left"></i>&nbsp;&nbsp;Back
              </button>
              <div className="flag-img">
                <img src={country.flag} alt="" />
              </div>
            </div>
            <div className="country-content p10">
              <h3>{country.name}</h3>
              <div className="other">
                <div className="other-items">
                  <p>
                    <strong>Native Name: </strong>
                    {country.nativename}
                  </p>
                  <p>
                    <strong>Population: </strong>
                    {country.population}
                  </p>
                  <p>
                    <strong>Region: </strong>
                    {country.region}
                  </p>
                  <p>
                    <strong>Sub Region: </strong>
                    {country.subregion}
                  </p>
                  <p>
                    <strong>Capital: </strong>
                    {country.capital}
                  </p>
                </div>
                <div className="other-items">
                  <p>
                    <strong>Top Level Domain: </strong>
                    {country.topLevelDomain}
                  </p>
                  <p>
                    <strong>Currencies: </strong>
                    {country.currencies.map((item) => item.code)}
                  </p>
                  <p>
                    <strong>Language/s: </strong>
                    {country.languages.map((item) => item.name)}
                  </p>
                </div>
              </div>
              <p className="mt-20">
                <strong>Borders: </strong>
                {country.borders}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Countries */}
      <div className="country-list">
        {countries.map((country) => (
          <Country
            country={country}
            openModal={openModal}
            setModalDetails={setModalDetails}
            key={Math.random() * 5000}
          />
        ))}
      </div>
    </>
  );
};

// {modalDetails.map((country) => (
//   <div className="country-main" key={Math.random() * 9999}>
//     <div className="country-content">
//       <button
//         onClick={openModal}
//         className={`btn-mode ${color ? "btn" : ""} `}
//       >
//         <i className="fa fa-arrow-left"></i>&nbsp;&nbsp;Back
//       </button>
//       <div className="flag-img">
//         <img src={country.flag} alt="" />
//       </div>
//     </div>
//     <div className="country-content p10">
//       <h3>{country.name}</h3>
//       <div className="other">
//         <div className="other-items">
//           <p>
//             <strong>Native Name: </strong>
//             {country.nativename}
//           </p>
//           <p>
//             <strong>Population: </strong>
//             {country.population}
//           </p>
//           <p>
//             <strong>Region: </strong>
//             {country.region}
//           </p>
//           <p>
//             <strong>Sub Region: </strong>
//             {country.subregion}
//           </p>
//           <p>
//             <strong>Capital: </strong>
//             {country.capital}
//           </p>
//         </div>
//         <div className="other-items">
//           <p>
//             <strong>Top Level Domain: </strong>
//             {country.topLevelDomain}
//           </p>
//           <p>
//             <strong>Currencies: </strong>
//             {country.currencies.map((item) => item.code)}
//           </p>
//           <p>
//             <strong>Language/s: </strong>
//             {country.languages.map((item) => item.name)}
//           </p>
//         </div>
//       </div>
//       <p className="mt-20">
//         <strong>Borders: </strong>
//         {country.borders}
//       </p>
//     </div>
//   </div>
// ))}
