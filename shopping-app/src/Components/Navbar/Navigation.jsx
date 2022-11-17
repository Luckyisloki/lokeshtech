import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navigation.css';

function Navigation() {
  return (
    <Navbar bg="" expand="lg" className='navbar'>
      <Container fluid>
        <Navbar.Brand href="#">LOKI COLLECTION</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="products">Products</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <div className='buttons'>
          <a href="" className='btn btn-outline-dark'>
          <i class="fa fa-sign-in" aria-hidden="true"></i>Login
          </a>
          <a href="" className='btn btn-outline-dark ms-2'>
            <i className='fa fa-user-plus me-1'></i>Register
          </a>
          <a href="" className='btn btn-outline-dark ms-2'>
            <i className='fa fa-sign-in me-1'></i>Cart 0
          </a>
          </div>&nbsp;
          {/* <Button>Login</Button>&nbsp;
          <Button>Register</Button>&nbsp;
          <Button>Cart</Button>&nbsp; */}
          <i class="fa fa-sign-in" aria-hidden="true"></i>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;