import { ChangeEvent, useEffect, useState } from "react"
import { Button, Form, Row, Spinner } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import { Recipe } from "../../../../types"
import { toast } from "react-toastify"


const EditRecipe = () => {

    const { recipeId } = useParams<string>()

    const [updatedRecipe, setUpdatedRecipe] = useState<Recipe>({
        id: "",
        image: "",
        name: "",
        effect: "",
        ingredient1: "",
        ingredient2: "",
        ingredient3: "",
        ingredient4: "",
        ingredient5: "",
        description: "",
        optional: "",
        notes: ""
    })
    const [isPutting, setIsPutting] = useState(false)
    const [loading, setLoading] = useState(false)

    // const baseURL = "http://localhost:3000/recipes"
    // const baseURL = "https://backend.michaelvarnell.com:5100/api/recipes"
    // const baseURL = "https://my-json-server.typicode.com/amandabarylski/Recipe-Book-API/recipes"
    const baseURL = "https://6701c8feb52042b542d88e77.mockapi.io/api/project/recipes"

    const navigate = useNavigate()

    //In order to fill in default values, I had to fetch the recipe.
    useEffect(() => {
        const fetchRecipe = async () => {
            setLoading(true)
            try {
                const response = await fetch(`${baseURL}/${recipeId}`)
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                const data = await response.json()
                setUpdatedRecipe(data)
                console.log(data)
            } catch (error) {
                console.error('Error:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchRecipe()
    }, [])

    //I copied this from the AddRecipe form, as well as the HandleChange and the form.
    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setUpdatedRecipe({
            ...updatedRecipe,
            [event.target.name]: event.target.value
        })
    }


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        
        try {
            setIsPutting(true)
            const response = await fetch(`${baseURL}/${recipeId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedRecipe),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            setIsPutting(false)
            toast.success("Recipe edited!")
            navigate("/recipe-book")
        } catch (error) {
            console.error('Error:', error)
            toast.error("Failed to edit recipe.")
        }
    }

//I used defaultValue to prefill the edit form with the existing information.
//Since the form doesn't load until the recipe is fetched, I was able to use the initial state after loading.
//The cancel button returns the user to the recipe details page.
    return (
        <>
        {loading ? (
                <Spinner animation="border" role="status" />
            ) :(
                <Form className="mx-2 p-2 bg-secondary-subtle border border-secondary" onSubmit={handleSubmit}>

            <Row className="mb-3">
                <Form.Group controlId="recipeName" className="col-md-4">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="name" name="name" 
                    onChange={handleChange} defaultValue={updatedRecipe.name} required></Form.Control>
                </Form.Group>

                <Form.Group controlId="recipeImageURL" className="col-md-4">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type="text" placeholder="image URL" name="image" 
                    onChange={handleChange} defaultValue={updatedRecipe.image} required></Form.Control>
                </Form.Group>

                <Form.Group controlId="recipeEffect" className="col-md-4">
                    <Form.Label>Effect</Form.Label>
                    <Form.Select name="effect" onChange={handleChange} defaultValue={updatedRecipe.effect}>
                        <option value={"None"}>None</option>
                        <option value={"Hearty"}>Hearty</option>
                        <option value={"Energizing"}>Energizing</option>
                        <option value={"Enduring"}>Enduring</option>
                        <option value={"Mighty"}>Mighty</option>
                        <option value={"Tough"}>Tough</option>
                        <option value={"Hasty"}>Hasty</option>
                        <option value={"Sneaky"}>Sneaky</option>
                        <option value={"Spicy"}>Spicy</option>
                        <option value={"Chilly"}>Chilly</option>
                        <option value={"Electro"}>Electro</option>
                    </Form.Select>
                </Form.Group>
            </Row>

            <Form.Group controlId="recipeDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} className="mb-3" name="description" 
                onChange={handleChange} defaultValue={updatedRecipe.description} required />
            </Form.Group>

            <Form.Group controlId="requiredIngredients" className="mb-3">
                <Form.Label>Required Ingredients (enter up to 5)</Form.Label>

                <Form.Control type="text" name="ingredient1" onChange={handleChange} 
                defaultValue={updatedRecipe.ingredient1} required></Form.Control>

                <Form.Control type="text" name="ingredient2" onChange={handleChange} 
                defaultValue={updatedRecipe.ingredient2}></Form.Control>

                <Form.Control type="text" name="ingredient3" onChange={handleChange} 
                defaultValue={updatedRecipe.ingredient3}></Form.Control>

                <Form.Control type="text" name="ingredient4" onChange={handleChange} 
                defaultValue={updatedRecipe.ingredient4}></Form.Control>

                <Form.Control type="text" name="ingredient5" onChange={handleChange} 
                defaultValue={updatedRecipe.ingredient5}></Form.Control>
            </Form.Group>

            <Form.Group controlId="optionalIngredients">
                <Form.Label>Optional Ingredients</Form.Label>
                <Form.Control as="textarea" rows={3} className="mb-3" name="optional" 
                onChange={handleChange} defaultValue={updatedRecipe.optional} required />
            </Form.Group>

            <Form.Group controlId="recipeNotes">
                <Form.Label>Additional Notes:</Form.Label>
                <Form.Control as="textarea" rows={3} className="mb-3" name="notes" 
                onChange={handleChange} defaultValue={updatedRecipe.notes} />
            </Form.Group>

            <div className="text-end">
                <Button variant="secondary" type="button" className="me-3" 
                disabled={isPutting} href={`/recipe/${updatedRecipe.id}`}>Cancel</Button>
                <Button variant="success" type="submit" disabled={isPutting}>Save</Button>
            </div>

        </Form>
            )}
        
        </>
    )
}

export default EditRecipe