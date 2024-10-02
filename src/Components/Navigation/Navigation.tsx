import { Container, Nav, Navbar } from "react-bootstrap"

//I was originally going to call this component Navbar,
//but I didn't want to have it confused with the Bootstrap component.

const Navigation = () => {
    return (
        <Navbar expand="lg" className="bg-body-secondary">
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="/recipe-book">Recipes</Nav.Link>
                    <Nav.Link href="/recipe/new">Add</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigation