import React, { useContext, useState } from "react";
import Modal from "react-modal";

// Import Context API
import { CountryContext } from "../context/CountryContext";
import { Country } from "../components/Country";

Modal.setAppElement("#root");

export const Countries = ({ color }) => {
  const [countries] = useContext(CountryContext);
  const [modal, setModal] = useState(false);
  const [modalDetails, setModalDetails] = useState([]);

  function openModal() {
    setModal((prev) => !prev);
  }

  return (
    <div className="country-list">
      {/* Modal */}
      <Modal
        isOpen={modal}
        onRequestClose={openModal}
        className={`modal ${color ? "darkModal" : ""} `}
      >
        <h1>{modalDetails.map((item) => item.name)}</h1>
        <button onClick={openModal}>Back</button>
      </Modal>

      {/* Countries */}
      {countries.map((country) => (
        <Country
          country={country}
          setModal={setModal}
          openModal={openModal}
          setModalDetails={setModalDetails}
          key={Math.random() * 5000}
        />
      ))}
    </div>
  );
};
