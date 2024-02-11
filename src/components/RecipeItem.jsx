/* eslint-disable react/prop-types */
import { IoCloseCircleOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function RecipeItem({ recipeTitle, recipeId }) {
  return (
    <div className="flex items-center justify-between group mb-3">
      <NavLink
        to={`/app/recipes/${recipeId}`}
        className={({ isActive }) =>
          [
            "hover:border-green-500 p-2 rounded text-[1rem] capitalize bg-[#f1dbdb] border-2 border-slate-50 flex items-center transition-all duration-200",
            isActive
              ? "bg-green-500 !border-green-500 shadow-sm text-white"
              : "",
          ].join(" ")
        }
      >
        <img
          src="/images/LogoTwo.png"
          alt=""
          className="w-[2rem] mr-3"
        />
        {recipeTitle} - 😋
      </NavLink>
      <IoCloseCircleOutline className="ml-5 opacity-0  group-hover:opacity-100 transition-opacity duration-200" />
    </div>
  );
}

export default RecipeItem;
