import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../favicon.ico';
import { Link } from "react-router-dom";
import { clearAuthTokens } from 'axios-jwt';
import { useDispatch, useSelector } from 'react-redux';
import { setProfile } from '../redux/slices/profileSlice';




const NavBar = (props) => {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile.data);
    let loginprompt;
    if(props.loggedIn && profile != null) 
        loginprompt = (<><Navbar.Text className='text-light px-3'>Welcome, <strong>{profile.name}</strong></Navbar.Text><Nav.Link as={Link} to='login' onClick={()=>{clearAuthTokens();props.setLoggedIn(false);dispatch(setProfile(null))}} className='text-light'> Logout</Nav.Link></>)
    else 
        loginprompt = (<Nav.Link as={Link} to='login' className='text-light'>Sign In</Nav.Link>)

    return (
        <Navbar className="px-3" bg="primary" variant="light">
            <Navbar.Brand as={Link} to='/' className='text-light'><img src={logo} width="30" height="30" alt="logo" />KisanKiosk</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end text-light'>
                {loginprompt}
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;