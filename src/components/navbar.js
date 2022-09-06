import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../favicon.ico';
import { Link } from "react-router-dom";


const NavBar = (props) => {
    

    return (
        <Navbar className="px-3" bg="primary">
            <Navbar.Brand as={Link} to='/' className='text-light'><img src={logo} width="30" height="30" alt="logo" />KisanKiosk</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                <Nav.Link as={Link} to='login' className='text-light'>Sign In</Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;