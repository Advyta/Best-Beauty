import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './ComponentsStyle.css'
import { NavLink, useNavigate } from 'react-router-dom';
import SidebarContent from '../Pages/Products_Page/SidebarContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { auth } from '../Pages/Authentication/Context/firebase';

export default function Navigationbar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged(user => {
      setLoggedIn(!!user);
    });
    return unsubcribe;
  }, []);

  const handleLogout = () => {
    auth.signOut()
    .then(() => {
      navigate('/');
    })
    .catch((error) => {
      console.log('Logout error: ', error);
    });
  };

  const expand = 'md';
  return (
    <header>
      <Navbar key={expand} expand={expand} className="mb-3 navigation">
        <Container fluid>
          <Navbar.Brand href="/">Best Beauty</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Options
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {/* links */}
                <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
                <Nav.Link as={NavLink} to="/Products">All products</Nav.Link>
                <NavDropdown
                  title="Makeup"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <SidebarContent />
                </NavDropdown>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="mx-2 background"
                    aria-label="Search"
                  />
                </Form>

                {/* Login page link and Logout functionality */}

                {loggedIn? (
                  <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                ) : (
                  <Nav.Link as={NavLink} to={"/Login"}>Login</Nav.Link>
                )}
                
                <Nav.Link as={NavLink} to='/CartPage'>
                  <FontAwesomeIcon icon={faCircle} className='yellow fs-5' />
                  <FontAwesomeIcon icon={faCartShopping} className='z-2 cart-icon' />
                  <span className='cart'>Cart</span>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  )
}