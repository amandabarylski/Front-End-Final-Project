import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import RecipePage from "./Pages/RecipePage/RecipePage";
import RecipeList from "./Components/RecipeList/RecipeList";
import RecipeView from "./Components/RecipeList/RecipeCard/RecipeView/RecipeView";
import AddRecipe from "./Components/AddRecipe/AddRecipe";
import EditRecipe from "./Components/RecipeList/RecipeCard/RecipeView/EditRecipe";

//I chose to have my router in a separate file and export it into my main.tsx file.
//This keeps the growing list more contained and keeps it from cluttering up another file.

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/browse",
        element: <RecipePage />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "recipe-book",
                element: <RecipeList />,
                errorElement: <ErrorPage />,
            },
            {
                path: "recipe/:id",
                element: <RecipeView />,
                errorElement: <ErrorPage />,
            },
            {
                path: "recipe/:id/edit",
                element: <EditRecipe />,
                errorElement: <ErrorPage />,
            },
            {
                path: "recipe/new",
                element: <AddRecipe />,
                errorElement: <ErrorPage />,
            },
        ]
    }
])

export default router