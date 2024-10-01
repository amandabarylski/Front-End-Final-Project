import { Outlet } from "react-router-dom"
import Navigation from "../../Components/Navigation/Navigation"


const RecipePage = () => {
    return (
        <>
        <Navigation />
        <Outlet />
        </>
    )
}

export default RecipePage