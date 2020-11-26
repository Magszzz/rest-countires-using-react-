import React, { useState } from "react";

export const Search = () => {
  const [filter, setFilter] = useState(false);

  function openFilter() {
    setFilter((prev) => !prev);
  }

  return (
    <div className="search-container">
      <div className="search">
        <i className="fas fa-search"></i>
        <input
          type="text"
          placeholder="Search for a country..."
          className="input"
        />
      </div>

      <div onClick={openFilter} className={`dropdown ${filter ? "open" : ""}`}>
        Filter by Region
        <i className="fas fa-chevron-down"></i>
        <ul>
          <li>All</li>
          <li>Africa</li>
          <li>Americas</li>
          <li>Asia</li>
          <li>Europe</li>
          <li>Oceania</li>
        </ul>
      </div>
    </div>
  );
};
