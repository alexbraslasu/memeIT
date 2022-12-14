import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Navbar.css'
import logo from './Logo.png';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Navigationbar = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <>
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <img className='Logo' src={logo} alt="LOGO" />
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav>
                    <NavLink  eventKey="1" onClick={handleShow}>Logare</NavLink>
                    <NavLink  eventKey="2" to="/Creare">Creare</NavLink>
                </Nav>
            </Navbar.Collapse>     
        </Navbar>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    );
}
 
export default Navigationbar;
