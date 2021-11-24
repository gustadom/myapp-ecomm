import React from 'react'
import { Container, Nav } from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Mr.BEER</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#Productos">Productos</Nav.Link>
                        <Nav.Link href="#Contacto">Contacto</Nav.Link>
                    </Nav>
                    <CartWidget />
                </Container>
            </Navbar>
        </div>
    )
}

export default Navbar;





