import "react-bootstrap"
import { Button, Stack, Container } from "react-bootstrap"

//I eventually had to break up the styling class names for the container here so I could see them all at once.
const HomePage = () => {
    return (
        <Container className="text-center bg-secondary-subtle border border-secondary p-2">
            <h1>Welcome!</h1>
            <p>Let's get cooking!</p>
            <img src="https://www.gamespew.com/wp-content/uploads/2017/03/Zelda-Breath-of-the-Wild.jpg" 
            className="object-fit-scale w-75 mb-3" alt="A picture of Link from Breath of the Wild cooking" />
            <Stack direction="horizontal" gap={3} className="w-75 mx-auto">
                <Button variant="info" className="mx-auto" href="/recipe-book">Recipes</Button>
                <Button variant="info" className="mx-auto" href="/elixer-info">Elixers</Button>
            </Stack>
        </Container>
    )
}

export default HomePage