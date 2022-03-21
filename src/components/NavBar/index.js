import React from 'react'
import { EcoAgroLogo, UserProfile } from './styles'
import { Navbar, Container, Nav, Form, FormControl } from 'react-bootstrap';
import './styles.css'
const NavBar = () => {
    return (
        <Navbar expand="lg" className='bg_alt'>
            <Container>
                <Navbar.Brand href="#">
                    <EcoAgroLogo src='https://www.ecoagro.agr.br/images/logo.png'></EcoAgroLogo>
                </Navbar.Brand>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    <Form className="d-flex customForm">
                        <FormControl
                            type="search"
                            placeholder="Busca"
                            className="me-2"
                            aria-label="Search"
                        />
                    </Form>
                    <UserProfile src='https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375__340.png'></UserProfile>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar