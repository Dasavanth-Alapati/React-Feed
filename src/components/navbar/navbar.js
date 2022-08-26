import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { Component } from 'react';
import logo from '../../favicon.ico';
import { Link } from "react-router-dom";


class NavBar extends Component {

    state = {  }
    render() { 
        return ( 
        <Navbar bg="primary">
        <Container>
          <Navbar.Brand as={Link} to='/' className='text-light'><img src={logo} width="30" height="30" alt="logo" />KisanKiosk</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
              <Nav.Link as={Link} to='login' className='text-light'>Sign In</Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      );
    }
}
 
export default NavBar;