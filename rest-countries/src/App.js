import React, { useContext } from "react";
import "./App.css";

// Import Components
import { Nav } from "./components/Nav";
import { CountryProvider } from "./context/CountryContext";

function App() {
  // GET CONTEXT API
  // const value = useContext(CountryList);

  return (
    <CountryProvider>
      <div className="App">
        {/* <h1>{value}</h1> */}
        <Nav />
      </div>
    </CountryProvider>
  );
}

export default App;
