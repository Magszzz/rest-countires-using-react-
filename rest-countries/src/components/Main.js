import React, { useContext, useState } from "react";

// Import Context API
import { CountryContext } from "../context/CountryContext";

// Import components
import { Search } from "./Search";
import { Countries } from "./Countries";
import { Modals } from "./Modals";

export const Main = ({ color }) => {
  // States
  const [countries] = useContext(CountryContext);
  const [modal, setModal] = useState(false);
  const [modalDetails, setModalDetails] = useState([]);
  const [filterSearch, setFilterSearch] = useState("");

  // Functions
  function openModal() {
    setModal((prev) => !prev);
  }

  // FILTER Data

  const filtered = countries.filter((country) =>
    country.name.toLowerCase().includes(filterSearch)
  );

  return (
    <>
      <Search setFilterSearch={setFilterSearch} />
      <Modals
        modalDetails={modalDetails}
        color={color}
        modal={modal}
        openModal={openModal}
      />
      <Countries
        openModal={openModal}
        filtered={filtered}
        setModalDetails={setModalDetails}
      />
    </>
  );
};
