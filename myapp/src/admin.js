import React from 'react';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import axios from 'axios';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Header from './header';
import Home from './home';

function AdminHome() {
  const navigate = useNavigate();
  var flag = false;


  useEffect(() => {
    axios({
      method: 'post',
      url: 'http://localhost:8000/user/isAdmin',
      headers: {
        'authorization': window.localStorage.getItem("token"),
      },
    }).then((res) => {
      console.log("response:" + res.data.message);
      if(res.data.message === "false"){
         flag = true;
      }
      var refreshToken = window.localStorage.getItem("token");
      console.log("flag:" + flag)
      //if logged in user is not admin so not allowed to be here
      //OR not logged in redirect to search page
      if(flag || !refreshToken){
        navigate('/search');
      }
    });

  }, );

  return (
    <>
      <Nav fill variant='tabs' bg='dark' variant='dark'>
        <Nav.Item>
          <Nav.Link href='/admin/create'>Create A Flight</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/admin/list'>List All Flights</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/search'>Search</Nav.Link>
        </Nav.Item>
      </Nav>
      <Home />
    </>
  );
}

export default AdminHome;
