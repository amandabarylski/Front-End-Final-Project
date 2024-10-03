import { useEffect, useState } from "react"
import { Container, ListGroup, ListGroupItem, Spinner } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { Recipe } from "../../../../types"


const RecipeView = () => {

    const { recipeId } = useParams()

    const [recipe, setRecipe] = useState<null | Recipe>(null)
    const [loading, setLoading] = useState(false)

    //REVIEW - Copied and pasted the baseURL here, not sure how to handle passing it down instead
    //since this component isn't directly tied to the RecipeList component, despite being a child of it.
    //Having the variable needed in multiple components kind of defeats the purpose of it.
    const baseURL = "https://backend.michaelvarnell.com:5100/api/recipes"

    //NOTE - Copied the loading state as well as the error try/catch from the RecipeList page.
    useEffect(() => {
        const fetchRecipe = async () => {
            setLoading(true)
            try {
                const response = await fetch(baseURL + "/" + recipeId)
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                const data = await response.json()
                setRecipe(data)
            } catch (error) {
                console.error('Error:', error)
            }
            setLoading(false)
        }
        fetchRecipe()
    })

    //ANCHOR - Main part of the component below
    //I liked the spinner so I used it again for the loading here.
    //For the rest of it I simply plugged in the properties and added styling.
    return (
        <>
            {loading ? (
                <Spinner animation="border" role="status" />
            ) : (
                <Container>
                    <h1>{recipe?.name}</h1>
                    <img src={recipe?.image} />
                    <p>{recipe?.description}</p>
                    <div>
                        <h4>Required Ingredients:</h4>
                        <ListGroup>
                            <ListGroupItem>{recipe?.ingredient1}</ListGroupItem>
                            {recipe?.ingredient2 ? <ListGroupItem>{recipe.ingredient2}</ListGroupItem> : null}
                            {recipe?.ingredient3 ? <ListGroupItem>{recipe.ingredient3}</ListGroupItem> : null}
                            {recipe?.ingredient4 ? <ListGroupItem>{recipe.ingredient4}</ListGroupItem> : null}
                            {recipe?.ingredient5 ? <ListGroupItem>{recipe.ingredient5}</ListGroupItem> : null}
                        </ListGroup>
                        <h4>Optional Ingredients:</h4>
                        <p>{recipe?.optional}</p>
                    </div>
                    {recipe?.notes ? <p>{recipe.notes}</p> : null}
                </Container>
            )}
        </>
    )
}

export default RecipeView