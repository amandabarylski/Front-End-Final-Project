import { ChangeEvent } from "react"
import { Button, Form, InputGroup, Row } from "react-bootstrap"

type UIBarProps = {
    setFilter: (filterBy: string) => void
}

//I wanted a top section to hold the add button and search filter.
//To use the state in the main component, I had to pass down setFilter as a prop.
//I could have included this in the main RecipeList function, but it would have been more cramped.
const UIBar = ({ setFilter }: UIBarProps) => {

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        let filterBy = event.target.value
        setFilter(filterBy)
    }
    return (
        <Row className="mt-3 p-1">
            <InputGroup>
            <Button variant="outline-info" href="/recipe/new" className="me-3">Add Recipe</Button>
                <InputGroup.Text>Filter by effect:</InputGroup.Text>
                <Form.Select name="filterEffect" onChange={handleChange}>
                    <option value={"any"}>Any</option>
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
            </InputGroup>
        </Row>
    )
}

export default UIBar