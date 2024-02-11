import { Form, redirect, useFetcher, useParams } from "react-router-dom";

import { useEffect } from "react";
import BackButton from "../components/BackButton";
import Nav from "../components/Nav";
import { createRecipe } from "../features/loadData";

function EditRecipe() {
  const { recipeId } = useParams();

  const fetcher = useFetcher();

  useEffect(() => {
    if (!fetcher.data && fetcher.state == "idle") {
      fetcher.load("/app/recipes");
    }
  });

  const recipe = fetcher.data?.find((item) => item.id == recipeId);

  return (
    <>
      {!recipeId && <Nav />}
      {!recipeId && (
        // <Form method="POST">
        //   <div className="flex flex-col justify-start mb-2">
        //     <label
        //       htmlFor="title"
        //       className="font-bold text-[1rem] capitalize mb-2"
        //     >
        //       Recipe title 🍅
        //     </label>
        //     <div className="border border-slate-200 py-2 rounded px-2">
        //       <input
        //         type="text"
        //         name="title"
        //         className="border-0 outline-none focus:outline-none bg-transparent w-[20rem]"
        //         defaultValue={recipe?.title}
        //         required
        //       />
        //     </div>
        //   </div>
        //   <div className="flex flex-col justify-start mb-2">
        //     <label
        //       htmlFor="price"
        //       className="font-bold text-[1rem] capitalize mb-2"
        //     >
        //       Recipe Pricing 🍅
        //     </label>
        //     <div className="border border-slate-200 py-2 rounded px-2">
        //       <input
        //         type="number"
        //         name="price"
        //         className="border-0 outline-none focus:outline-none bg-transparent w-[20rem]"
        //         defaultValue={recipe?.price}
        //         required
        //       />
        //     </div>
        //   </div>
        //   <div className="flex flex-col justify-start mb-2">
        //     <label
        //       htmlFor="description"
        //       className="font-bold text-[1rem] capitalize mb-2"
        //     >
        //       Recipe Description 🍅
        //     </label>
        //     <div className="border border-slate-200 py-2 rounded px-2">
        //       <textarea
        //         name="description"
        //         className="border-0 outline-none focus:outline-none bg-transparent w-[20rem]"
        //         defaultValue={recipe?.description}
        //         required
        //       />
        //     </div>
        //   </div>
        //   <div className="flex flex-col justify-start mb-2">
        //     <label
        //       htmlFor="ingredients"
        //       className="font-bold text-[1rem] capitalize mb-2"
        //     >
        //       Recipe Ingredients 🍅
        //     </label>
        //     <div className="border border-slate-200 py-2 rounded px-2">
        //       <input
        //         type="text"
        //         name="ingredients"
        //         className="border-0 outline-none focus:outline-none bg-transparent w-[20rem]"
        //         defaultValue={recipe?.ingredients.join(", ")}
        //         required
        //       />
        //     </div>
        //     <p>Separate them with a comma</p>
        //   </div>
        //   <div className="flex flex-col justify-start mb-2">
        //     <label
        //       htmlFor="steps"
        //       className="font-bold text-[1rem] capitalize mb-2"
        //     >
        //       Recipe Description 🍅
        //     </label>
        //     <div className="border border-slate-200 py-2 rounded px-2">
        //       <textarea
        //         name="steps"
        //         className="border-0 outline-none focus:outline-none bg-transparent w-[20rem]"
        //         defaultValue={recipe?.steps.join("\n")}
        //         required
        //       />
        //     </div>
        //     <p>Start each step on new line</p>
        //   </div>
        //   <div className="flex justify-center items-center">
        //     <button className="w-[10rem] py-2 bg-green-500">Save</button>
        //   </div>
        // </Form>
        <Form method="POST" action={`/app/recipes/${recipeId}`}>
          <div className="flex flex-col justify-start mb-2">
            <label
              htmlFor="title"
              className="font-bold text-[1rem] capitalize mb-2"
            >
              Recipe title 🍅
            </label>
            <div className="border border-slate-200 py-2 rounded px-2">
              <input
                type="text"
                name="title"
                className="border-0 outline-none focus:outline-none bg-transparent w-[20rem]"
                required
              />
            </div>
          </div>
          <div className="flex flex-col justify-start mb-2">
            <label
              htmlFor="price"
              className="font-bold text-[1rem] capitalize mb-2"
            >
              Recipe Pricing 🍅
            </label>
            <div className="border border-slate-200 py-2 rounded px-2">
              <input
                type="number"
                name="price"
                className="border-0 outline-none focus:outline-none bg-transparent w-[20rem]"
                required
              />
            </div>
          </div>
          <div className="flex flex-col justify-start mb-2">
            <label
              htmlFor="description"
              className="font-bold text-[1rem] capitalize mb-2"
            >
              Recipe Description 🍅
            </label>
            <div className="border border-slate-200 py-2 rounded px-2">
              <textarea
                name="description"
                className="border-0 outline-none focus:outline-none bg-transparent w-[20rem]"
                required
              />
            </div>
          </div>
          <div className="flex flex-col justify-start mb-2">
            <label
              htmlFor="price"
              className="font-bold text-[1rem] capitalize mb-2"
            >
              Recipe Ingredients 🍅
            </label>
            <div className="border border-slate-200 py-2 rounded px-2">
              <input
                type="text"
                name="price"
                className="border-0 outline-none focus:outline-none bg-transparent w-[20rem]"
                required
              />
            </div>
            <p>Separate them with a comma</p>
          </div>
          <div className="flex flex-col justify-start mb-2">
            <label
              htmlFor="description"
              className="font-bold text-[1rem] capitalize mb-2"
            >
              Recipe Description 🍅
            </label>
            <div className="border border-slate-200 py-2 rounded px-2">
              <textarea
                name="description"
                className="border-0 outline-none focus:outline-none bg-transparent w-[20rem]"
                required
              />
            </div>
            <p>Start each step on new line</p>
          </div>
          <div className="flex justify-center items-center">
            <button className="w-[10rem] py-2 bg-green-500">Save</button>
          </div>
        </Form>
      )}
      {recipeId && (
        
          <Form method="POST">
          <div className="flex flex-col justify-start mb-2">
            <label
              htmlFor="title"
              className="font-bold text-[1rem] capitalize mb-2"
            >
              Recipe title 🍅
            </label>
            <div className="border border-slate-200 py-2 rounded px-2">
              <input
                type="text"
                name="title"
                className="border-0 outline-none focus:outline-none bg-transparent w-[20rem]"
                defaultValue={recipe?.title}
                required
              />
            </div>
          </div>
          <div className="flex flex-col justify-start mb-2">
            <label
              htmlFor="price"
              className="font-bold text-[1rem] capitalize mb-2"
            >
              Recipe Pricing 🍅
            </label>
            <div className="border border-slate-200 py-2 rounded px-2">
              <input
                type="number"
                name="price"
                className="border-0 outline-none focus:outline-none bg-transparent w-[20rem]"
                defaultValue={recipe?.price}
                required
              />
            </div>
          </div>
          <div className="flex flex-col justify-start mb-2">
            <label
              htmlFor="description"
              className="font-bold text-[1rem] capitalize mb-2"
            >
              Recipe Description 🍅
            </label>
            <div className="border border-slate-200 py-2 rounded px-2">
              <textarea
                name="description"
                className="border-0 outline-none focus:outline-none bg-transparent w-[20rem]"
                defaultValue={recipe?.description}
                required
              />
            </div>
          </div>
          <div className="flex flex-col justify-start mb-2">
            <label
              htmlFor="ingredients"
              className="font-bold text-[1rem] capitalize mb-2"
            >
              Recipe Ingredients 🍅
            </label>
            <div className="border border-slate-200 py-2 rounded px-2">
              <input
                type="text"
                name="ingredients"
                className="border-0 outline-none focus:outline-none bg-transparent w-[20rem]"
                defaultValue={recipe?.ingredients.join(", ")}
                required
              />
            </div>
            <p>Separate them with a comma</p>
          </div>
          <div className="flex flex-col justify-start mb-2">
            <label
              htmlFor="steps"
              className="font-bold text-[1rem] capitalize mb-2"
            >
              Recipe Description 🍅
            </label>
            <div className="border border-slate-200 py-2 rounded px-2">
              <textarea
                name="steps"
                className="border-0 outline-none focus:outline-none bg-transparent w-[20rem]"
                defaultValue={recipe?.steps.join("\n")}
                required
              />
            </div>
            <p>Start each step on new line</p>
          </div>
           <div className="flex justify-center items-center">
            <button className="w-[10rem] py-2 bg-green-500">Save</button>
            {recipeId != undefined && <BackButton />}
          </div>
        </Form>
      )}
    </>
  );
}

export default EditRecipe;

export async function action({ request }) {
  const formData = await request.formData();
  let data = Object.fromEntries(formData);

  const steps = data.steps.split("\n");
  const ingredients = data.ingredients.split(",");

  data = {
    ...data,
    steps,
    ingredients,
    feedbacks: [],
    rating: 0,
  };
  const result = await createRecipe(data);

  // console.log(result)

  return redirect(`/app/recipes/${result.id}`);
}
