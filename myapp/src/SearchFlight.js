import React, { useRef } from 'react';
import axios from 'axios';
import { Component, useState, useEffect } from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import App from './App';
import SearchBarFrom from './SearchBarFrom.js';
import SearchBarTo from './SearchBarTo.js';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import './mycss.css';

//import SearchIcon from "@material-ui/icons/Search";
//import CloseIcon from "@material-ui/icons/Close";

function SearchFlight() {
  const [data, setData] = useState([]);

  const from = useRef();
  const to = useRef();
  const depDate = useRef();
  const returnDate = useRef();
  const adultNo = useRef();
  const childrenNo = useRef();
  const infantsNo = useRef();
  const classChosen = useRef();

  const [currentCountry, setcurrentCountry] = useState([]);
  const [destination, setDestination] = useState([]);
  const [leavingDate, setLeavingDate] = useState(new Date());
  const [retDate, setRetDate] = useState(new Date());
  const [adults, setAdults] = useState([]);
  const [children, setChildren] = useState([]);
  const [classCh, setClassCh] = useState([]);

  function search() {
    //console.log('class: ' + classCh);
    return axios({
      url: 'http://localhost:8000/search/departureResults',
      method: 'get',
      headers: {},
      params: {
        from: currentCountry,
        to: destination,
        depDate: leavingDate,
        returnDate: retDate,
        adultNo: adults,
        childrenNo: children,
        classChosen: classCh,
      },
    });
  }

  function searchButtonClicked() {
    //currentCountry = from.current.value;
    // const leavingArray = leavingDate.split(" ");
    // const leavingMonth="Dec";
    // switch (leavingArray[1]) {
    //     case "Dec":
    //       leavingMonth="12";
    //       break;
    //     case "":
    //         leavingMonth="12";
    //       break;
    //     case 2:
    //         leavingMonth="12";
    //       break;
    //     case 3:
    //         leavingMonth="12";
    //       break;
    //     case 4:
    //         leavingMonth="12";
    //       break;
    //     case 5:
    //         leavingMonth="12";
    //       break;
    //     case 6:
    //         leavingMonth="12"
    //   }
    // const depDate=leavingArray[2]+"-"+

    // setcurrentCountry(from.current.value);
    // setDestination(to.current.value);
    // setLeavingDate(depDate.current.value);
    // setRetDate(returnDate.current.value);
    setAdults(adultNo.current.value);
    setChildren(childrenNo.current.value);
    setClassCh(classChosen.current.value);
    console.log('search button clicked!! yaaaaayyy');
    //let daatee = moment(depDate).format("DD-MM-YYYY");
    console.log(leavingDate);

    console.log('searchButton: ' + currentCountry);
  }
  const [startDate, setStartDate] = useState(new Date('12/11/2021'));
  const [endDate, setEndDate] = useState(new Date('1/1/2022'));

  return (
    <div className='auth-wrapper center-screen'>
      <div className='auth-inner'>
        <form onSubmit={searchButtonClicked}>
          {/* <form onSubmit={(event) => handleRegister(event)}> */}
          <h3>Search Flight</h3>
          <div className='row'>
            <div className='column'>
              <div className='form-group'>
                <label>From</label>
                <SearchBarFrom />
              </div>

              <div className='form-group'>
                <label>Departure Date</label>
                <DatePicker
                  selected={leavingDate}
                  onChange={(date) => setLeavingDate(date)}
                  minDate={new Date()}
                  maxDate={new Date('10/10/2022')}
                  showDisabledMonthNavigation
                />
              </div>

              <div className='form-group'>
                <label>Adult(s)</label>
                <input
                  className='in'
                  ref={adultNo}
                  id='adultsNo'
                  label='adult(s)'
                  variant='outlined'
                  required
                  onChange={searchButtonClicked}
                />
              </div>

              <div className='form-group'>
                <label>Pick Class</label>
                <select
                  ref={classChosen}
                  className='in'
                  name='class'
                  id='classSelect'
                >
                  <option value='0'>First class</option>
                  <option value='1'>Business Class</option>
                  <option value='2'>Economy Class</option>
                </select>
              </div>
            </div>

            <div className='column'>
              <div className='form-group'>
                <label>To</label>
                <SearchBarTo />
              </div>

              <div className='form-group'>
                <label>Return Date</label>
                <DatePicker
                  selected={retDate}
                  onChange={(date) => setRetDate(date)}
                  minDate={leavingDate}
                  maxDate={new Date('10/10/2022')}
                  showDisabledMonthNavigation
                />
              </div>

              <div className='form-group'>
                <label>Children</label>
                <input
                  className='in'
                  ref={childrenNo}
                  id='childrenNo'
                  label='child(ren)'
                  variant='outlined'
                  required
                  onChange={searchButtonClicked}
                />
              </div>


              <div className = "form-group" style={{marginTop: "60px"}}>
                <button type='submit' className='btn btn-primary btn-block '>
                  Search
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    // <div className='auth-wrapper center-screen'>
    //   <div className='auth-inner'>
    //     <h2>Search Flight</h2>
    //     <div className='FromBar'>
    //       <div className='fromLabel'>
    //         <label for='from'>From</label>
    //       </div>
    //       <SearchBarFrom />
    //     </div>
    //     <div className='ToBar'>
    //       <div className='toLabel'>
    //         <label for='to'>To</label>
    //       </div>
    //       <SearchBarTo />
    //     </div>
    //     <br></br>
    //     <div className='retDatePicker'>
    //       <label for='departuredate'>Departure Date</label>
    //       <DatePicker
    //         selected={leavingDate}
    //         onChange={(date) => setLeavingDate(date)}
    //         minDate={new Date()}
    //         maxDate={new Date('10/10/2022')}
    //         showDisabledMonthNavigation
    //       />
    //     </div>
    //     <br></br>
    //     <div className='retDatePicker'>
    //       <label for='returndate'>Returning Date</label>
    //       <DatePicker
    //         selected={retDate}
    //         onChange={(date) => setRetDate(date)}
    //         minDate={leavingDate}
    //         maxDate={new Date('10/10/2022')}
    //         showDisabledMonthNavigation
    //       />
    //     </div>
    //     <div className='adultsDiv'>
    //       <label for='adultNo'>Adult(s)</label>
    //       <input
    //         className='in'
    //         ref={adultNo}
    //         id='adultsNo'
    //         label='adult(s)'
    //         variant='outlined'
    //         required
    //         onChange={searchButtonClicked}
    //       />
    //     </div>
    //     <br></br>
    //     <div className='childrenDiv'>
    //       <label for='childrenNo'>child(ren)</label>
    //       <input
    //         className='in'
    //         ref={childrenNo}
    //         id='childrenNo'
    //         label='child(ren)'
    //         variant='outlined'
    //         required
    //         onChange={searchButtonClicked}
    //       />
    //     </div>

    //     <div className='classSelect'>
    //       <label id='chooseClassLabel' className='classSelect'>
    //         {' '}
    //         Choose the Class:
    //       </label>
    //       <select
    //         ref={classChosen}
    //         className='in'
    //         name='class'
    //         id='classSelect'
    //       >
    //         <option value='0'>First class</option>
    //         <option value='1'>Business Class</option>
    //         <option value='2'>Economy Class</option>
    //       </select>
    //     </div>

    //     <button className='b' type='submit' onClick={searchButtonClicked}>
    //       {/* <Link
    //           type='submit'
    //           component={Link}
    //           to={{
    //             pathname: '/SearchTest',
    //             search: `:from=${currentCountry}
    //                      :to=${destination}
    //                      :depDate=${leavingDate}
    //                      :returnDate= ${retDate}
    //                      :adultNo=${adults}
    //                      :childrenNo=${children}
    //                      :classChosen=${classCh}`,
    //           }}
    //         >
    //           Search
    //         </Link>  */}
    //     </button>
    //   </div>
    // </div>
  );
}

export default SearchFlight;

// function SearchFlight() {
//     //for the country search with sujjestions
//   const [filteredData, setFilteredData] = useState([]);
//   const [wordEntered, setWordEntered] = useState("");

//   const handleFilter = (event) => {
//     const searchWord = event.target.value;
//     setWordEntered(searchWord);
//     const newFilter = countries.filter((value) => {
//       return value.title.toLowerCase().includes(searchWord.toLowerCase());
//     });

//     if (searchWord === "") {
//       setFilteredData([]);
//     } else {
//       setFilteredData(newFilter);
//     }
//   };

//   const clearInput = () => {
//     setFilteredData([]);
//     setWordEntered("");
//   };

//   ///////////

// //   const [searchTerm, setSearchTerm] = React.useState("");
// //   const handleChange = event => {
// //     setSearchTerm(event.target.value);
// //   };

// //   const results = !searchTerm
// //     ? countries
// //     : countries.filter(country =>
// //         country.toLowerCase().includes(searchTerm.toLocaleLowerCase())
// //       );

// //////////

// //   const [data, setData] = useState([]);

// //   const from = useRef();
// //   const to = useRef();
// //   const depDate = useRef();
// //   const returnDate = useRef();
// //   const adultNo = useRef();
// //   const childrenNo = useRef();
// //   const infantsNo = useRef();
// //   const classChosen = useRef();

// //   const [currentCountry, setcurrentCountry] = useState([]);
// //   const [destination, setDestination] = useState([]);
// //   const [leavingDate, setLeavingDate] = useState([]);
// //   const [retDate, setRetDate] = useState([]);
// //   const [adults, setAdults] = useState([]);
// //   const [children, setChildren] = useState([]);
// //   const [infants, setInfants] = useState([]);
// //   const [classCh, setClassCh] = useState([]);

// //   function search() {
// //     //console.log('class: ' + classCh);
// //     return axios({
// //       url: 'http://localhost:8000/search/departureResults',
// //       method: 'get',
// //       headers: {},
// //       params: {
// //         from: currentCountry,
// //         to: destination,
// //         depDate: leavingDate,
// //         returnDate: retDate,
// //         adultNo: adults,
// //         childrenNo: children,
// //         infantsNo: infants,
// //         classChosen: classCh,
// //       },
// //     });
// //   }

// //   function searchButtonClicked() {
// //     //currentCountry = from.current.value;
// //     setcurrentCountry(from.current.value);
// //     setDestination(to.current.value);
// //     setLeavingDate(depDate.current.value);
// //     setRetDate(returnDate.current.value);
// //     setAdults(adultNo.current.value);
// //     setChildren(childrenNo.current.value);
// //     setInfants(infantsNo.current.value);
// //     setClassCh(classChosen.current.value);
// //     // destination = to.current.value;
// //     // leavingDate = depDate.current.value;
// //     // retDate = returnDate.current.value;
// //     // adults = adultNo.current.value;
// //     // children = childrenNo.current.value;
// //     // infants = infantsNo.current.value;
// //     // classCh = classChosen.current.value;

// //     //let d = search();
// //     //console.log(d);
// //     //window.location.href = "/departureResults";

// //     console.log('searchButton: ' + currentCountry);
// //   }
//     return(
//         <>
//         <form class='Container'>
//           <h2 for='search Flight'>Search Flight</h2>
//           <label for='from'>From</label>
//           <div className="searchInputs">
//         <input
//             className='in'
//             //ref={from}
//             id='from'
//             label='from'
//             variant='outlined'
//             required
//             type="text"
//             placeholder="enter the departure country"
//             value={wordEntered}
//             onChange={handleFilter}
//         />
//         {/* <div className="searchIcon">
//           {filteredData.length === 0 ? (
//             <SearchIcon />
//           ) : (
//             <CloseIcon id="clearBtn" onClick={clearInput} />
//           )}

//         </div> */}
//       </div>
//       {filteredData.length != 0 && (
//         <div className="dataResult">
//           {filteredData.slice(0, 15).map((value, key) => {
//             return (
//               <a className="dataItem" href={value.link} target="_blank">
//                 <p>{value.title} </p>
//               </a>
//             );
//           })}
//         </div>
//       )}

//           {/* <label for='from'>From</label>
//           <input
//           className='in'
//           //ref={from}
//           id='from'
//           label='from'
//           variant='outlined'
//           required
//           type="text"
//           placeholder="enter the departure country"
//           value={searchTerm}
//           onChange={handleFilter}
//            /> */}

//           <br></br>
//           </form>
//         </>
//     )
// }
