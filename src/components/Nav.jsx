import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <ul className="flex flex-row mb-5">
      <li>
        <NavLink
          to={"/app/recipes"}
          className={({ isActive }) =>
            [
              "border p-2 block text-center w-[7rem]  text-white",
              isActive ? "bg-green-500" : "",
            ].join(" ")
          }
        >
          Recipes
        </NavLink>
      </li>
      <li>
        <NavLink
          replace={true}
          to={"/app/add-recipe"}
          className={({ isActive }) =>
            [
              "border p-2 block text-center w-[7rem] border-l-0 text-white",
              isActive ? "bg-green-500" : "",
            ].join(" ")
          }
        >
          Add Recipe
        </NavLink>
      </li>
    </ul>
  );
}

export default Nav;
