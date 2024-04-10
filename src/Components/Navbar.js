import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useSelector } from "react-redux";
function Navebar() {
  const logInStatus = useSelector((state) => state.loginstate.loggedIn);
  const navigation=useNavigate()
  console.log(logInStatus);
  function signOutHandler() {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("idToken");
    navigation("/login");
  }
  return (
    <div style={{ backgroundColor: "#f0f0f0", padding: "10px 0" }}>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container
            fluid
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <Navbar.Brand>Mail Box</Navbar.Brand>
            </NavLink>
            <div className="d-flex justify-content-end flex-grow-1">
              {!logInStatus && (
                <NavLink to="/signup">
                  <Button variant="secondary" className="me-2">
                    Signup
                  </Button>
                </NavLink>
              )}

              {!logInStatus && (
                <NavLink to="/login">
                  <Button variant="secondary" className="me-2">
                    Log In
                  </Button>
                </NavLink>
              )}

              {logInStatus && (
                <Button variant="secondary" onClick={signOutHandler}>
                  Log Out
                </Button>
              )}
            </div>
            {logInStatus && (
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
            )}
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              {/*   "justify-content-end flex-grow-1 pe-3" */}
              <Offcanvas.Body>
                <Nav className="flex-column">
                  <NavLink to="/compose" className="nav-link">
                    {" "}
                    <Button
                      variant="outline-secondary"
                      style={{
                        width: "100%",
                        marginBottom: "10px",
                        borderRadius: "0",
                        border: "none",
                        fontSize: "1.2rem",
                      }}
                    >
                      Compose
                    </Button>{" "}
                  </NavLink>
                  <NavLink to="/inbox" className="nav-link">
                    <Button
                      variant="outline-secondary"
                      style={{
                        width: "100%",
                        marginBottom: "10px",
                        borderRadius: "0",
                        border: "none",
                        fontSize: "1.2rem",
                      }}
                    >
                      Inbox
                    </Button>
                  </NavLink>
                  <NavLink to="/sentbox" className="nav-link">
                    <Button
                      variant="outline-secondary"
                      style={{
                        width: "100%",
                        marginBottom: "10px",
                        borderRadius: "0",
                        border: "none",
                        fontSize: "1.2rem",
                      }}
                    >
                      Sent
                    </Button>
                  </NavLink>
                  <NavLink to="/draft" className="nav-link">
                    <Button
                      variant="outline-secondary"
                      style={{
                        width: "100%",
                        marginBottom: "10px",
                        borderRadius: "0",
                        border: "none",
                        fontSize: "1.2rem",
                      }}
                    >
                      Draft
                    </Button>
                  </NavLink>
                  {/* <Nav.Link href="#action2">Draft</Nav.Link> */}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <Outlet></Outlet>
    </div>
  );
}

export default Navebar;
