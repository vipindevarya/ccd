import React from 'react'
import logo from '../assets/logo.png';
import { Navbar,Nav,Container } from 'react-bootstrap';
import './header.css';

 function Header() {
  return (
    <div className='header'>
          <Navbar  expand="lg">
      <Container>
        <Navbar.Brand className='d-flex align-items-center ' href="/"><img id='logo'
          width="40"
          height="40"
          className="d-inline-block align-top"
           src={logo}></img>&nbsp; &nbsp; &nbsp;<span className='logo'>Coffee Cafe Day</span></Navbar.Brand>
        <Navbar.Toggle className='toggle' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link className='text-white mx-4 ' href="/">Home</Nav.Link>
            <Nav.Link className='text-white mx-4 ' href="/galleries">Gallery</Nav.Link>
            <Nav.Link className='text-white mx-4' href="/services">Service</Nav.Link>
            <Nav.Link className='text-white mx-4' href="/menu">Menu</Nav.Link>
            <Nav.Link className='text-white mx-4' href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       

    </div>
  )
}
export default Header;