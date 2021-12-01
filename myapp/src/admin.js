import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Home from './home';

function AdminHome() {
  return (
    <>
      <Nav fill variant='tabs' bg="dark" variant="dark">
        <Nav.Item>
          <Nav.Link href='/admin/create'>Create A Flight</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/admin/list'>List All Flights</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/admin/search'>Search</Nav.Link>
        </Nav.Item>
        
      </Nav>
      <Home />
    </>
  );
}

export default AdminHome;
