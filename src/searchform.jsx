import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Searchform() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const queryObj = { category, date };

    navigate(`/search?category=${encodeURIComponent(category)}&date=${encodeURIComponent(date)}`);
  };

  return (
    <div className="search searchform">
      <input
        list="browsers"
        name="browser"
        className="searchbar"
        placeholder="search for category.."
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <datalist id="browsers">
        <option value="books"></option>
        <option value="travel"></option>
        <option value="accessories"></option>
        <option value="entertainment"></option>
        <option value="food"></option>
        <option value="healthcare"></option>
      </datalist>

      <input
        type="date"
        className="searchbtn"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button onClick={handleSubmit} className="searsubmit">
        <svg className="searchicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </button>
    </div>
  );
}

export default Searchform;
