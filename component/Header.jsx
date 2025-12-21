import {React,useEffect,useState} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router';
import FrontPage from './FrontPage';

export default function Header() {
  let nav = useNavigate();
  return (
    <>
    <Navbar expand="lg" 
    style={{ position: 'sticky', top: 0, zIndex: 1000, color: 'white' }}>
      <Container fluid>
        <Navbar.Brand>Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to='/' className='linkstyle p-2'>
                Home</Link>

            <Link to='/about' className='linkstyle p-2'>About</Link>  

            <Link to='/frontpage' className='linkstyle p-2'>Product</Link>

            <Link to='/login' className='linkstyle p-2'>login</Link>

            <Link to='/signup' className='linkstyle p-2'>Signup</Link>

            <Link to='/ProductSeller' className='linkstyle p-2'>Sell</Link>
              
            <Link className='linkstyle p-2' to='/cart' >cart</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
    
    </>
  );
  }