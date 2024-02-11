import { useState } from "react";
import { useParams } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";
import ProcessSideBar from "../components/ProcessSideBar";
import RecipeDisplay from "../components/RecipeDisplay";
import { useRecipe } from "../features/recipeContext";

function RecipeDetails() {
  const [openSlider, setOpenSlider] = useState(false);
  const { recipeId } = useParams();

  const { loading, data } = useRecipe(recipeId);



  return (
    <div className="relative flex-1 px-5 py-5 mih-h-screen pb-0 flex flex-col before:absolute before:w-full before:bg-cover before:h-[100%] before:bg-[url(/images/splashScreenOne.png)] after:bg-slate-400 after:w-full after:h-[100%] after:opacity-90 after:absolute before:-z-20 after:-z-20 after:left-0 after:top-0 before:left-0 before:top-0 ">
      
      <Header openSlider={() => setOpenSlider(true)} />

      <RecipeDisplay recipe={data} loading={loading} />
      {loading ? null : (
        <ProcessSideBar
          open={openSlider}
          toggleOpen={() => setOpenSlider(false)}
          steps={data.steps}
          ingredients={data.ingredients}
        />
      )}
      <Footer />
    </div>
  );
}

export default RecipeDetails;
