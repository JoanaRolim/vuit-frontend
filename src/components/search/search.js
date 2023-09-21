import React from "react";
import "./search.css";

export const Search = () => {
  return (
    <div className=" hero">
      <h2 className="hero__h2">Como podemos te ajudar?</h2>
      <div className="search-container">
        <input type="text" placeholder="Pesquise o que você precisa" className="search-input" />
        <button className="search-btn">
          <box-icon name="right-arrow-alt" className="search-icon"></box-icon>
        </button>
      </div>
    </div>
  );
};

export default Search;