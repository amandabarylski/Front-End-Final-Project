import { ChangeEvent, useState } from "react"
import { Button, Form, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"


const AddRecipe = () => {
    //Apart from the icon, I started with all of the properties blank and ready for user input.
    const [newRecipe, setNewRecipe] = useState({
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
    const [isPosting, setIsPosting] = useState(false)

    // const baseURL = "http://localhost:3000/recipes"
    // const baseURL = "https://backend.michaelvarnell.com:5100/api/recipes"
    // const baseURL = "https://my-json-server.typicode.com/amandabarylski/Recipe-Book-API/recipes"
    const baseURL = "https://6701c8feb52042b542d88e77.mockapi.io/api/project/recipes"

    const navigate = useNavigate()

    //I copied this handleChange function from the last React project to track my state.
    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setNewRecipe({
            ...newRecipe,
            [event.target.name]: event.target.value
        })
    }

    //I again had to pull the URL so that I could use a fetch request.
    //In order to send the user back to the main recipe page, I had to import the useNavigate function.
    //I also saw my instructor using toast alerts and liked how they looked, so I installed react-toastify.
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault()

        try {
            setIsPosting(true)
            await fetch(baseURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newRecipe)
            })
            setIsPosting(false)
            toast.success("Recipe added!")
            navigate("/recipe-book")
        } catch (error) {
            console.log(error)
            toast.error("Failed to add recipe.")
        }

    }

    //I did basic styling to spread everything out a bit.
    //When I tested it, the onChange worked, as did the handleSubmit.
    return (
        <Form className="mx-2 p-2 bg-secondary-subtle border border-secondary" onSubmit={handleSubmit}>

            <Row className="mb-3">
                <Form.Group controlId="recipeName" className="col-md-4">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="name" name="name" onChange={handleChange} required></Form.Control>
                </Form.Group>

                <Form.Group controlId="recipeImageURL" className="col-md-4">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type="text" placeholder="image URL" name="image" onChange={handleChange} required></Form.Control>
                </Form.Group>

                <Form.Group controlId="recipeEffect" className="col-md-4">
                    <Form.Label>Effect</Form.Label>
                    <Form.Select name="effect" onChange={handleChange}>
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
                <Form.Control as="textarea" rows={3} name="description" onChange={handleChange} className="mb-3" required />
            </Form.Group>

            <Form.Group controlId="requiredIngredients" className="mb-3">
                <Form.Label>Required Ingredients (enter up to 5)</Form.Label>
                    <Form.Control type="text" name="ingredient1" onChange={handleChange} required></Form.Control>
                    <Form.Control type="text" name="ingredient2" onChange={handleChange}></Form.Control>
                    <Form.Control type="text" name="ingredient3" onChange={handleChange}></Form.Control>
                    <Form.Control type="text" name="ingredient4" onChange={handleChange}></Form.Control>
                    <Form.Control type="text" name="ingredient5" onChange={handleChange}></Form.Control>
            </Form.Group>

            <Form.Group controlId="optionalIngredients">
                <Form.Label>Optional Ingredients</Form.Label>
                <Form.Control as="textarea" rows={3} name="optional" onChange={handleChange} className="mb-3" required />
            </Form.Group>

            <Form.Group controlId="recipeNotes">
                <Form.Label>Additional Notes:</Form.Label>
                <Form.Control as="textarea" rows={3} name="notes" onChange={handleChange} className="mb-3" />
            </Form.Group>

            <div className="text-end">
                <Button variant="success" type="submit" disabled={isPosting}>Submit</Button>
            </div>

        </Form>
    )
}

export default AddRecipe