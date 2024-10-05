import { Button, Card, Col, ListGroup, ListGroupItem } from "react-bootstrap"
import { Recipe } from "../../../types"


type RecipeCardProps = {
    recipe: Recipe
}

//After adding my data to the mock API, I made a rough version of the recipe cards to double check everything was working.
//I only displayed the image, name, and ingredient properties without extra styling.
//Only these loaded, with no other properties appearing when a recipe had less than 5 ingredients.
//However, the list group items still appeared even when there wasn't anything in that property, which wasn't what I was hoping for.
//I was able to add a ternary to them so that they only had text if the property existed, which made it work.
const RecipeCard = ({ recipe }: RecipeCardProps) => {
    return (
        <Col>
        <Card className="p-1">
            <Card.Img src={recipe.image} className="mb-1" />
            <Card.Title>{recipe.name}</Card.Title>
            <ListGroup>
                <ListGroupItem>{recipe.ingredient1}</ListGroupItem>
                {recipe.ingredient2 ? <ListGroupItem>{recipe.ingredient2}</ListGroupItem> : null }
                {recipe.ingredient3 ? <ListGroupItem>{recipe.ingredient3}</ListGroupItem> : null }
                {recipe.ingredient4 ? <ListGroupItem>{recipe.ingredient4}</ListGroupItem> : null }
                {recipe.ingredient5 ? <ListGroupItem>{recipe.ingredient5}</ListGroupItem> : null }
            </ListGroup>
            <Card.Footer className="text-center">
                <Button variant="info" href={`/recipe/${recipe.id}`}>Details</Button>
            </Card.Footer>
        </Card>
        </Col>
    )
}

export default RecipeCard