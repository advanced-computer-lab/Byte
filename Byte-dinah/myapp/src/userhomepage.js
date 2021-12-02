import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import{useEffect,useState} from'react'

//import Home from './home';

function UserHome(props) {
    const[data,setData]=useState([])
    console.warn("props",props.match.params.id)
    useEffect(async()=>{

        let result =await fetch("http://localhost:8000/user/home"+props.match.params.id)
        result=await result.json
        setData(result)
    })
  return (
    <>
    
     
    </>
  );
}

export default UserHome;