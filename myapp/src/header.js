import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

function Header() {
  return (
    <div className='row'>
      <div className='col-md-12'>
        <Navbar bg="dark" variant="dark" expand='lg' sticky='top'>
          <Container>
            <Navbar.Brand href='/'>Byte</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto'>
                <Nav.Link href='/'>Home</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse className='justify-content-end'>
              <NavDropdown title='Tools' id='basic-nav-dropdown'>
                <NavDropdown.Item href='/reserved'>My Itinerary </NavDropdown.Item>
                <NavDropdown.Item href='/myflights'>My Flights</NavDropdown.Item>
                <NavDropdown.Item href='/departure'>Departure Flights</NavDropdown.Item>
                <NavDropdown.Item href='/arrival'>Arrival Flights</NavDropdown.Item>
                <NavDropdown.Item href='/search'>Search</NavDropdown.Item>
                <NavDropdown.Item href='/user'>Edit My Info</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='' style={{ color: 'red' }}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default Header;
