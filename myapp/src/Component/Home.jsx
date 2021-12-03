import React from "react";
//import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";



function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img src="./Logo.Jpeg"
            alt=""/>
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Flights</h1>
            
            {/* <Datepicker
                select="range"
               inputComponent="input"
             inputProps={{
        placeholder: 'Please Select...'
    }}
/> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;