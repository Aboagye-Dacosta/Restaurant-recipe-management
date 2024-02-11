const BASE_URL = "http://localhost:9000/recipes";

const loadRecipes = async () => {
  try {
    const response = await fetch(BASE_URL);

    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Response({
      status: false,
    });
  } catch (error) {
    throw new Error("Sorry could not load data");
  }
};

const loadRecipe = async ({ params }) => {
  try {
    const { recipeId: id } = params;
    const response = await fetch(`${BASE_URL}/${id}`);

    if (response.ok) return await response.json();
    throw new Response({ type: "single", message: "Could not load recipe" });
  } catch (error) {
    throw new Error("Oops could not load recipe");
  }
};

const createRecipe = async (data) => {
  try {
    const response = await fetch(BASE_URL, {
      method: "Post",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return await response.json();
    }

    throw new Response({ status: false, message: "could not load data" });
  } catch (error) {
    throw new Error("Oops could not save recipe");
  }
};

const updateRecipe = async () => {};

export { BASE_URL, createRecipe, loadRecipe, loadRecipes, updateRecipe };
