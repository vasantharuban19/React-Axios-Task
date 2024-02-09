import React from "react";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function TopBar() {
  let navigate = useNavigate();
  return (
    <>
      <Navbar data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/home")}
          >
            React-Axios
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => navigate("/home")}>Home</Nav.Link>
              <Nav.Link onClick={() => navigate("/")}>Dashboard</Nav.Link>
              <Nav.Link onClick={() => navigate("/create")}>Create</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default TopBar;
