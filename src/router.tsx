import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import RecipeList from "./Components/RecipeList/RecipeList";
import RecipeView from "./Components/RecipeList/RecipeCard/RecipeView/RecipeView";
import AddRecipe from "./Components/AddRecipe/AddRecipe";
import EditRecipe from "./Components/RecipeList/RecipeCard/RecipeView/EditRecipe";
import App from "./App";
import ElixerInfo from "./Components/ElixerInfo/ElixerInfo";

//I chose to have my router in a separate file and export it into my main.tsx file.
//This keeps the growing list more contained and keeps it from cluttering up another file.

//NOTE - removed RecipePage as now App holds the navbar.

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Navigate to="/home" replace={true} />,
                errorElement: <ErrorPage />,
            },
            {
                path: "home",
                element: <HomePage />
            },
            {
                path: "/recipe-book",
                element: <RecipeList />,
                errorElement: <ErrorPage />,
            },
            {
                path: "/recipe/:recipeId",
                element: <RecipeView />,
                errorElement: <ErrorPage />,
            },
            {
                path: "/recipe/:recipeId/edit",
                element: <EditRecipe />,
                errorElement: <ErrorPage />,
            },
            {
                path: "/recipe/new",
                element: <AddRecipe />,
                errorElement: <ErrorPage />,
            },
            {
                path: "/elixer-info",
                element: <ElixerInfo />,
                errorElement: <ErrorPage />,
            }
        ]
    },

])

export default router