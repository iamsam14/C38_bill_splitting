import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar className="justify-content-between mb-4 mt-2">
      <Navbar.Brand href="./">
        <img
          src={
            'https://res.cloudinary.com/jeanniet89/image/upload/v1598582455/Cuenta%20App/cuentaLogo.png'
          }
          alt="Cuentalogo"
          style={{ width: '100px' }}
        />
      </Navbar.Brand>
      <Nav>
        <Nav.Item>
          <Button id="navbtn" href="/login" variant="link">
            Log In
          </Button>
        </Nav.Item>
        <Nav.Item>
          <Button href="./signup" id="navbtn" variant="outline-primary">
            Sign Up
          </Button>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
