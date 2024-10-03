import { useEffect, useState } from "react"
import { Recipe } from "../../types"
import RecipeCard from "./RecipeCard/RecipeCard"
import { CardGroup, Spinner } from "react-bootstrap"


const RecipeList = () => {

    const [recipes, setRecipes] = useState<Recipe[]>( [] )
    const [loading, setLoading] = useState(false)

//NOTE - I am keeping my db.json file in the project as well, even though I am using an online API.
//This provides me with a backup of my original data, as well as another option to run a server with.
//Of course, I would need to change the baseURL, but since I am using a variable to contain it
//I would only have to alter the code in one place.
    const baseURL = "https://backend.michaelvarnell.com:5100/api/recipes"

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

    //TODO - Still need to style card group. Also need to add filter component, and want to move add recipe button here too. Perhaps put both in a sidebar?
    return (
        <>
        { loading ? (
            <Spinner animation="border" role="status" />
        ) : (
            <CardGroup>
            { recipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
            </CardGroup>
        )}
        </>
    )
}

export default RecipeList