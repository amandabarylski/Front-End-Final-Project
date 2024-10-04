import { ChangeEvent, useState } from "react"
import { Button, Form, Row } from "react-bootstrap"
import { chilly, electro, enduring, energizing, hasty, healing, hearty, mighty, sneaky, spicy, tough } from "../../icons"
import { useNavigate } from "react-router-dom"


const AddRecipe = () => {
//Apart from the icon, I started with all of the properties blank and ready for user input.
    const [newRecipe, setNewRecipe] = useState({
        image: "",
        name: "",
        icon: "https://static.wikia.nocookie.net/zelda_gamepedia_en/images/2/2e/BotW_Heart_Icon.png/revision/latest?cb=20160616142421&format=original",
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

    const baseURL = "https://backend.michaelvarnell.com:5100/api/recipes"

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
            navigate("/recipe-book")
        } catch (error) {
            console.log(error)
        }

    }

//REVIEW - still needs styling, will use this as a base for the edit form once that's done.
//I also want to add a modal that pops up to show success or failure.
    return (
        <Form className="mx-2" onSubmit={handleSubmit}>

            <Row className="mb-3">
            <Form.Group controlId="recipeName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="name" name="name" onChange={handleChange} required></Form.Control>
            </Form.Group>

            <Form.Group controlId="recipeImageURL">
                <Form.Label>Image URL</Form.Label>
                <Form.Control type="text" placeholder="image URL" name="image" onChange={handleChange} required></Form.Control>
            </Form.Group>

            <Form.Group controlId="recipeEffect">
                <Form.Label>Effect</Form.Label>
                <Form.Select name="icon" onChange={handleChange}>
                    <option value={healing}><img src={healing} /> None</option>
                    <option value={hearty}><img src={hearty} /> Hearty</option>
                    <option value={energizing}><img src={energizing} /> Energizing</option>
                    <option value={enduring}><img src={enduring} /> Enduring</option>
                    <option value={mighty}><img src={mighty} /> Mighty</option>
                    <option value={tough}><img src={tough} /> Tough</option>
                    <option value={hasty}><img src={hasty} /> Hasty</option>
                    <option value={sneaky}><img src={sneaky} /> Sneaky</option>
                    <option value={spicy}><img src={spicy} /> Spicy</option>
                    <option value={chilly}><img src={chilly} /> Chilly</option>
                    <option value={electro}><img src={electro} /> Electro</option>
                </Form.Select>
            </Form.Group>
            </Row>

            <Form.Group controlId="requiredIngredients">
                <Form.Label>Required Ingredients (enter up to 5)</Form.Label>
                <Form.Control type="text" name="ingredient1" onChange={handleChange} required></Form.Control>
                <Form.Control type="text" name="ingredient2" onChange={handleChange}></Form.Control>
                <Form.Control type="text" name="ingredient3" onChange={handleChange}></Form.Control>
                <Form.Control type="text" name="ingredient4" onChange={handleChange}></Form.Control>
                <Form.Control type="text" name="ingredient5" onChange={handleChange}></Form.Control>
            </Form.Group>

            <Form.Group controlId="optionalIngredients">
                <Form.Label>Optional Ingredients</Form.Label>
                <Form.Control as="textarea" rows={3} name="optional" onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId="recipeNotes">
                <Form.Label>Additional Notes:</Form.Label>
                <Form.Control as="textarea" rows={3} name="notes" onChange={handleChange} />
            </Form.Group>

            <Button variant="success" type="submit" disabled={isPosting}>Submit</Button>
        </Form>
    )
}

export default AddRecipe