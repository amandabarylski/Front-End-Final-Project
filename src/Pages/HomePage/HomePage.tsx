import "react-bootstrap"
import { Button } from "react-bootstrap"

const HomePage = () => {
    return (
    <div>
        <div>
            <h1>Welcome!</h1>
            <p>Let's get cooking!</p>
            <Button variant="info" href="/browse">Browse Recipes</Button>
        </div>
    </div>
    )
}

export default HomePage