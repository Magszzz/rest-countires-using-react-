import React, { useContext, useState } from "react";
import "./App.css";

// Import Components
import { Nav } from "./components/Nav";
import { CountryProvider } from "./context/CountryContext";
import { Search } from "./components/Search";
import { Countries } from "./components/Countries";

function App() {
  // State for color Theme
  const [color, setColor] = useState(false);

  return (
    <CountryProvider>
      <div className={`app ${color ? "dark" : ""} `}>
        <Nav color={color} setColor={setColor} />
        <Search />
        <Countries color={color} />
      </div>
    </CountryProvider>
  );
}

export default App;
