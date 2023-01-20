import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Navbar from 'react-bootstrap/Navbar';

export const NavbarFake = () => {
  return (
    <>
    <Navbar className='' style={{zIndex:"3"}} variant="dark">
    <Container>
      <Navbar.Brand style={{fontSize:"50px",color:"#e50914",fontWeight:"bold"}} href="/">NETFLIX</Navbar.Brand>
    </Container>
  </Navbar>
    </>
  )
}