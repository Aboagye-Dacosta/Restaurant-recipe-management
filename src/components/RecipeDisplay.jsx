/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { BiDollar } from "react-icons/bi";
import { Link, useFetcher, useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import Title from "./Title";

function RecipeDisplay() {
  const { recipeId } = useParams();
  const fetcher = useFetcher();

  useEffect(() => {
    if (!fetcher.data && fetcher.state == "idle") {
      fetcher.load("/app/recipes");
    }
  }, [fetcher, recipeId]);

  useEffect(() => {
    if (
      fetcher.data &&
      !fetcher.data.find((item) => item.id === recipeId) &&
      recipeId
    ) {
      fetcher.load("/app/recipes");
    }
  }, [fetcher, recipeId]);

  const isLoading = fetcher.state === "loading";
  const recipe = fetcher.data?.find((recipe) => recipe.id === recipeId);

  if (!recipeId) {
    return (
      <div className="flex-1 flex items-center justify-center flex-col h-[calc(100vh-20rem)] relative ">
        <img
          src="../../images/LogoTwo.png"
          alt=""
          className="absolute bottom-2 right-2 w-[5rem]"
        />
        <img
          src="../../images/img-4.jpg"
          className="h-[20rem] rotate-90 absolute top-0 rounded-full object-contain left-44 -z-[12]"
          alt=""
        />
        <div className="w-min min-w-[20rem] before:w-full before:h-full before:-skew-x-[30deg] before:absolute relative before:bg-[#fc7c7c] before:-z-10  before:translate-x-28  after:absolute after:w-full after:h-full after:top-0 after:-left-10 after:bg-[#ffffff] after:-z-[11] after:opacity-80 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
          perspiciatis soluta rerum? Illo ab, ad quisquam quasi recusandae iste
          qui nihil totam facere optio consequatur aut, sed sequi voluptatibus
          harum.
        </div>

        <Link
          to="/app/add-recipe"
          className="my-5 bg-green-500 py-2 px-3 shadow-md shadow-slate-400 capitalize font-bold hover:scale-x-110 transition-transform duration-200"
        >
          Let&apos;s add some sumptuous recipes 👌{" "}
        </Link>
      </div>
    );
  }

  return (
    <>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-stone-300/50 backdrop-blur-sm z-[1000] ">
          <ClipLoader />
        </div>
      )}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-[30rem] self-start -ml-48 -mt-20 after:absolute after:h-1/3 after:w-full after:bg-slate-500 after:bottom-0 after:left-0 after:bg-opacity-65">
          <div className="border border-slate-700 rounded overflow-hidden">
            <img
              src="/images/img-3.jpg"
              alt=""
              className="w-[30rem] bg-contain"
            />
          </div>
          <div className="absolute w-full top-56 -right-72  flex flex-col z-40">
            <Title title={recipe?.title} />
            <p>{recipe?.description}</p>
            <span className="flex justify-end items-center">
              <span className="text-[#fc7c7c] font-bold mr-3">
                Recipe Pricing
              </span>
              <span className=" font-bold text-[2rem] self-end w-max flex items-center justify-center bg-green-500 px-2 my-2 mr-2">
                <BiDollar /> {recipe?.price}
              </span>
            </span>
            <div className="flex justify-between items-center my-3 bg-white p-2">
              <span className="font-bold">Recipe Rating</span>
              <span>⭐⭐⭐⭐⭐</span>
            </div>
            <div className="flex justify-between items-center">
              <Link
                to={`/app/recipes/${recipeId}/edit`}
                className="bg-[#fc7c7c] p-2 w-[15rem] text-center font-bold"
              >
                Edit
              </Link>
              <Link
                to={`/app/recipes/${recipeId}/feedbacks`}
                className=" hover:text-[#fc7c7c]"
              >
                view feedback
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecipeDisplay;
