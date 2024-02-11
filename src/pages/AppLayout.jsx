//components
import SideBar from "../components/SideBar";
import { RecipeProvider } from "../features/recipeContext";

//pages
import RecipeDetails from "./RecipeDetails";

function AppLayout() {
  return (
    <div className="max-w-[100vw] flex flex-row self-start h-[100vh]">
      <RecipeProvider>
        <SideBar />
        <RecipeDetails />
      </RecipeProvider>
    </div>
  );
}

export default AppLayout;
