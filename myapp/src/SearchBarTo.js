import React, { useState } from "react";
//import "./search.css";
//import SearchIcon from "@material-ui/icons/Search";
//import CloseIcon from "@material-ui/icons/Close";

const data= [
    "egypt",
    "africa",
    "sudan",
    "dubai",
    "asia",
    "usa",
    "ksa"
  ];

function SearchBarTo() {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="ToBar">
      {/* <div className="searchInputs"> */}
        <input
          type="text"
          placeholder="departure country"
          value={wordEntered}
          onChange={handleFilter}
        />
        {/* <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div> */}
      {/* </div> */}
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem"onClick={() => {
                setWordEntered(value);
                setFilteredData([]);}}>
                <p>{value} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBarTo;