import Navigation from "./Components/Navigation/Navigation"
import { Outlet } from "react-router-dom"

//NOTE - Added App component back in after discussion with mentor, to allow the navbar to appear above all pages.

const App = () => {
    return (
        <>
        <Navigation />
        <Outlet />
        </>
    )
}

export default App