import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Detalle } from './detalle';
import { Lista } from './lista';

export const HomePage = () => {
  const [list, setList] = useState(true)

  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">BuildsApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=>setList(true)}>Lista</Nav.Link>
            <Nav.Link onClick={()=>setList(false)}>Detalle</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/api/auth/logout">Salir</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {list ? <Lista /> : <Detalle />}
    
    </>
    
  )
}
