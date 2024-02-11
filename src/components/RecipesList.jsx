/* eslint-disable react/prop-types */
import RecipeItem from "./RecipeItem";

function RecipesList({ recipes }) {
  return (
    <div>
      {recipes ? (
        recipes.map((recipe) => (
          <RecipeItem
            key={recipe.id}
            recipeTitle={recipe.title}
            recipeId={recipe.id}
          />
        ))
      ) : (
        <span className="">No recipes add yet</span>
      )}
    </div>
  );
}

export default RecipesList;
