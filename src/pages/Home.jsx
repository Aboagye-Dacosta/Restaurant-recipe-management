import { Link } from "react-router-dom";

function Home ()
{
  return (
    <div className="relative h-screen w-screen flex items-center justify-center bg-[url(./images/img-2.jpg)] bg-cover before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-slate-800 before:bg-opacity-80 after:absolute after:top-0 after:left-0 home after:w-full after:h-full after:bg-blend-color after:bg-contain after:shadow-lg ">
      <div className=" z-30 top-4 left-4 absolute rounded-full h-[6rem] w-[6rem] bg-[#fc7c7c]">
        <img
          src="./images/logoTwo.png"
          alt=""
          className=" absolute w-[4rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div className="z-20 w-[30rem] relative">
        <h1 className="text-[5rem] font-bold mb-5">
          <span className="text-green-500 tracking-widest">Recipe</span>Man
        </h1>
        <p className="relative before:absolute before:bg-green-500 before:w-full before:h-full before:-skew-x-[40deg] before:-translate-x-60 before:-z-10 py-4 before:top-0 before:border before:border-slate-700 before:shadow-sm text-white text-[1.2rem]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
          vel nulla similique dolorum laboriosam totam pariatur dignissimos
          magni. Voluptatum ipsum porro et velit sed possimus molestiae alias
          minus suscipit in?
        </p>

        <Link
          to="/app/recipes"
          className="before:bg-[#fc7c7c] before:absolute before:top-0 before:left-0 before:-skew-x-[40deg] before:w-full before:h-full before:-z-20 after:bg-green-500 after:absolute after:top-2 after:left-0 after:-skew-x-[40deg] after:w-full after:h-full after:-z-10 p-2 absolute right-0 font-bold"
        >
          Let&apos;s checkout some recipes
        </Link>
      </div>
    </div>
  );
}

export default Home;
