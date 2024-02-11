import { useLoaderData } from "react-router-dom";

import Nav from "../components/Nav";
import RecipesList from "../components/RecipesList";

function Recipe() {
  const recipes = useLoaderData();

  return (
    <>
      <Nav />
      <RecipesList recipes={recipes} />
    </>
  );
}

export default Recipe;
