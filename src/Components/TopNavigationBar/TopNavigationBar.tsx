import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Expand: string = 'sm';
const Title: string = 'Integration Hub';

export function TopNavigationBar() {
    return (
        <>
            {
                <Navbar key={Expand} bg="light" expand={Expand} className="mb-3" sticky="top">
                    <Container fluid>
                        <Navbar.Brand href="/">{Title}</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${Expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${Expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${Expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${Expand}`}>
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="integrations">Integrations</Nav.Link>
                                    <Nav.Link href="transactions">Transactions</Nav.Link>
                                    <Nav.Link href="about">About</Nav.Link>
                                    <NavDropdown
                                        title="Settings"
                                        id={`offcanvasNavbarDropdown-expand-${Expand}`}
                                    >
                                        <NavDropdown.Item href="account">My Account</NavDropdown.Item>
                                        <NavDropdown.Item href="notifications">Notifications</NavDropdown.Item>
                                        <NavDropdown.Item href="integrations">Integrations</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="loans">Loans (Coming Soon)</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success" size="sm">Search</Button>
                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>



            }


        </>
    );
}

export default TopNavigationBar;
