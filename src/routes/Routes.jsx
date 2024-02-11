import { createBrowserRouter, Navigate } from "react-router-dom";

import { loadRecipe, loadRecipes, updateRecipe } from "../features/loadData";
import AppLayout from "../pages/AppLayout";
import EditRecipe, { action as createRecipe } from "../pages/EditRecipe";
import ErrorPage from "../pages/ErrorPage";
import Feedbacks from "../pages/Feedbacks";
import Home from "../pages/Home";
import Recipe from "../pages/Recipe";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "app",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="recipes" />,
      },
      {
        path: "recipes",
        element: <Recipe />,
        loader: loadRecipes,
      },
      {
        path: "recipes/:recipeId",
        element: <Recipe />,
        loader: loadRecipes,
      },
      {
        path: "recipes/:recipeId/edit",
        element: <EditRecipe />,
        loader: loadRecipe,
        // action: updateRecipe,
      },
      {
        path: "recipes/:recipeId/feedbacks",
        element: <Feedbacks />,
        loader: loadRecipe,
      },
      {
        path: "add-recipe",
        element: <EditRecipe />,
        action: createRecipe,
      },
    ],
  },
]);
