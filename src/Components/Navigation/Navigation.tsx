import { Container, Navbar } from "react-bootstrap"

//I was originally going to call this component Navbar,
//but I didn't want to have it confused with the Bootstrap component.

const Navigation = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Navigation