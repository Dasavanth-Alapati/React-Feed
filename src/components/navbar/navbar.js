import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { Component } from 'react';
import logo from '../../favicon.ico';

class NavBar extends Component {

    state = {  }
    render() { 
        return ( <Navbar bg="primary">
        <Container>
          <img src={logo} width="30" height="30" alt="logo" />
          <Navbar.Brand href="#home" className='text-light'>KisanKiosk</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
              <Nav.Link href="#profile" className='text-light'>Profile</Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar> );
    }
}
 
export default NavBar;