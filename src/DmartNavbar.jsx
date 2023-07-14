import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useContext } from "react";
import { GlobalContext } from "./App";

export default function DmartNavbar () {

  
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState(null);
  const global = useContext(GlobalContext);
  const artist = global.artistConfig?.artist || "";

  const handleSubmit = (e) => {
    console.log("submit")
    navigate(`search/${searchTerm}`);
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  }

  console.log("artist config",artist);
  return (
    <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#">{artist}</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/recent">Recent Work</Nav.Link>
            <Nav.Link href="/all">All Work</Nav.Link>
            <Nav.Link href="/categories">By Category</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleSearchChange}
            />
            <Button variant="outline-success" type="submit">Search</Button>
          </Form>
        </Navbar.Collapse>
        </Container>
    </Navbar>
);
}
