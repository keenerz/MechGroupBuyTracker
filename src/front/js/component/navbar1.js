import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar1.css";
import { App } from "../component/popup";
import { ProjectList } from "./projectlist";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import { Button } from "react-bootstrap";

export const Navbar1 = () => {
  const { store, actions } = useContext(Context);
  const session = actions.getCurrentSession();
  const { searchbar, setsearchbar } = useContext(Context);
  const history = useHistory();
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          {" "}
          <Link
            to="/"
            className="homelink"
            onClick={() => localStorage.removeItem("projectedit")}
          >
            MechGroupBuyTracker
          </Link>
        </Navbar.Brand>

        {/* <Nav>
          <Link to="/">
            <Button
              style={{ marginLeft: "20px" }}
              onClick={() => localStorage.removeItem("projectedit")}
            >
              Home
            </Button>
          </Link>
        </Nav> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{ marginLeft: "10px" }}>
            {session ? <App /> : ""}
          </Nav>
          <Nav>
            {!session ? (
              <Link to="/login">
                <Button>Login</Button>
              </Link>
            ) : (
              <Button
                onClick={() => {
                  actions.logout();
                  history.push("/");
                }}
              >
                Logout
              </Button>
            )}
          </Nav>
          <Nav>
            {!session ? (
              <Link to="/create">
                <Button style={{ marginLeft: "10px" }}>Sign Up</Button>
              </Link>
            ) : (
              ""
            )}
          </Nav>
          <Nav>
            {session ? (
              <Link to="/accountsettings">
                <Button style={{ marginLeft: "10px" }}>Account Settings</Button>
              </Link>
            ) : (
              ""
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
