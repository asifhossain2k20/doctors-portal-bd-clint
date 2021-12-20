import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    return (
        <div className="container">
        <Navbar  bg="primary" className="rounded p-2" variant="dark" expand="lg" sticky="top">
                            <Navbar.Brand as={Link} to="/">DoctorsPortal</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                <Nav.Link className="nav-text" as={Link} to="/Home">Home</Nav.Link>
                                <Nav.Link className="nav-text"  as={Link} to="/blogs">Blogs</Nav.Link>
                                <Nav.Link  className="nav-text" as={Link} to="/developer">Developer</Nav.Link>
                                
                                {
                    
                    loggedInUser.email=== 'asif.hossain2k20@gmail.com' ?   
                    <Nav.Link className="nav-text" as={Link} to="/dashboard/appointment" >Admin</Nav.Link>
                    :   <div></div>
                }
                {
                    
                    loggedInUser.email  ?   
                    <Nav.Link className="nav-text" as={Link} to="/user" >DashBoard</Nav.Link>
                    :   <div></div>
                }
                {
                    
                    loggedInUser.P || loggedInUser.isSignIn ?   
                    <Nav.Link className="nav-text" as={Link} to="/login" onClick={()=>setLoggedInUser({})}>Sign Out</Nav.Link> 
                    :   <Nav.Link className="nav-text" as={Link} to="/login">Login</Nav.Link>
                }

                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>


        </div>
    );
};

export default NavBar;