import { Link } from "react-router-dom";
import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";

const NavbarMenu = () => {
  return (
    <Container>
      <Navbar bg="Light" expand="lg" className="navbar navbar-light bg-light">
        <Navbar.Brand to="/">NSE DATA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className="nav-students" to="/">Home</Link>
            <Link className="nav-addStudents" to="/Item">item</Link>
            <Link className="nav-addStudents" to="/Nse">BANKNIFTY</Link>
            <Link className="nav-addStudents" to="/Nifty">NIFTY</Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>

  );
};



export default NavbarMenu;