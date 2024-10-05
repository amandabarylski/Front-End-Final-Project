import "react-bootstrap"
import { Button, Stack, Container } from "react-bootstrap"

//I wanted the image to be in the background with a 50% opacity container in front of it.
//However, even once the size was correct, it created a lot of white space below the div housing the image.
//It wasn't a part of the div as I'd changed the background color of the div and this was white.
//I am not sure what caused it, but after an hour and a half of trying to make it work
//I decided to just put the image in the container with the rest of the content.
//I'll try and learn about background images another time, but I can't spend all my time on styling.
//For the buttons I used Stack because it allowed for easier spacing with Bootstrap.
//ButtonGroup sticks them too close together.
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