import "react-bootstrap"
import { Button, Container } from "react-bootstrap"

const HomePage = () => {
    return (
    <div id="background-img">
        <Container>
            <h1>Welcome!</h1>
            <p>Let's get cooking!</p>
            <Button variant="info" href="/recipe-book">Browse Recipes</Button>
        </Container>
    </div>
    )
}

export default HomePage