import React, { useState } from 'react';
import './mycss.css';
//import "./search.css";
//import SearchIcon from "@material-ui/icons/Search";
//import CloseIcon from "@material-ui/icons/Close";

const data = ['egypt', 'africa', 'sudan', 'dubai', 'asia', 'usa', 'ksa'];

function SearchBarFrom() {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered('');
  };

  return (
    <div>
      {/* <div className="searchInputs"> */}
      <div className='form-group'>
        <input
          id='form-control'
          type='text'
          placeholder='enter departure country..'
          value={wordEntered}
          onChange={handleFilter}
        />
      </div>
      {/* <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div> */}
      {/* </div> */}
      {filteredData.length != 0 && (
        <div className='dataResult'>
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a
                className='dataItem'
                onClick={() => {
                  setWordEntered(value);
                  setFilteredData([]);
                }}
              >
                <p>{value} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBarFrom;
