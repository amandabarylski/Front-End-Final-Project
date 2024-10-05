import { useEffect, useState } from "react"
import { Recipe } from "../../types"
import RecipeCard from "./RecipeCard/RecipeCard"
import { CardGroup, Row, Spinner, Card, CardBody, Button } from "react-bootstrap"


const RecipeList = () => {

    const [recipes, setRecipes] = useState<Recipe[]>([])
    const [loading, setLoading] = useState(false)

    //NOTE - I am keeping my db.json file in the project as well, even though I am using an online API.
    //This provides me with a backup of my original data, as well as another option to run a server with.
    //Of course, I would need to change the baseURL, but since I am using a variable to contain it
    //I would only have to alter the code in one place.
    //Eventually to make testing with both easier I wrote down both and commented out the one I wasn't using.
    //Unfortunately it takes altering the id name between id and dataId as well.
    const baseURL = "http://localhost:3000/recipes"
    // const baseURL = "https://backend.michaelvarnell.com:5100/api/recipes"

    //I started with a basic useEffect and fetch request when testing the API,
    //and then went back later to add loading and error functionality.
    useEffect(() => {
        const fetchRecipes = async () => {
            setLoading(true)
            try {
                const response = await fetch(baseURL)
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                const data = await response.json()
                setRecipes(data)
            } catch (error) {
                console.error('Error:', error)
            }
            setLoading(false)
        }
        fetchRecipes()
    }, [])

    //I wanted the add button to be here, so I put it in a card as well. By making the CardBody flex,
    //I was able to center the button as I wanted.
    //For the general display, I put a gap between the cards and show different numbers on different sized screens.
    //However, I was not able to get all of the cards to be exactly the same height.
    return (
        <>
            {loading ? (
                <Spinner animation="border" role="status" />
            ) : (
                <CardGroup className="m-1 p-2">
                    <Row xs={2} md={3} lg={4} className="g-3">
                        <Card>
                            <CardBody className="d-flex">
                                <Button variant="outline-info" size="lg" 
                                className="mx-auto my-auto"
                                href="/recipe/new">Add New Recipe</Button>
                            </CardBody>
                        </Card>
                        {recipes.map(recipe => (
                            <RecipeCard key={recipe.id} recipe={recipe} />
                        ))}
                    </Row>
                </CardGroup>
            )}
        </>
    )
}

export default RecipeList