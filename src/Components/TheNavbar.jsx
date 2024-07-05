import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/netflix5.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export const TheNavbar = () => {
  return (
    <Navbar bg="transparent" variant="light" expand="md" className="flex-wrap">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/My_Profile">Accueil</Nav.Link>
            <Nav.Link href="/Animés">Animés</Nav.Link>
            <Nav.Link href="/Tendances">Tendances</Nav.Link>
            <Nav.Link href="/ma-liste">Ma liste</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/recherche">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Nav.Link>
            <Nav.Link href="/nouveautes">Nouveautés</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
