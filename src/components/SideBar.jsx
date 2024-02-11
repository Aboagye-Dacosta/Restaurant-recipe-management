import { Link, Outlet } from "react-router-dom";

function SideBar() {
  return (
    <div className="w-[25rem] bg-[#fc7c7c] flex flex-col justify-start items-center overflow-y-auto">
      <Link to="/">
        <h1 className="font-bold text-[2rem] flex items-center justify-center py-4 my-5">
          <img
            src="/images/Logo.png"
            alt="app logo"
            className="w-[5rem] mr-3"
          />
          <span className="self-end"> RecipeMan</span>
        </h1>
      </Link>
      <Outlet />
    </div>
  );
}

export default SideBar;
