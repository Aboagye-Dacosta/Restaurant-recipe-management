import { useParams } from "react-router-dom";

import BackButton from "../components/BackButton";
import FeedbackItem from "../components/FeedbackItem";
import Title from "../components/Title";
import { useRecipe } from "../features/recipeContext";

function Feedbacks() {
  const { recipeId } = useParams();
  const { loading, data } = useRecipe(recipeId);


  return (
    <div className="flex flex-col items-center justify-center">
      <Title title="Feedbacks" />
      <div className="flex items-center justify-end mb-5 ml-3">
        <button className="w-[8rem] bg-green-500 py-2 border border-green-500">
          Add
        </button>
        <BackButton />
      </div>
      {loading ? (
        <span>...loading</span>
      ) : (
        <div>
          {data.feedbacks.length==0 ? (
            <span>No feedbacks foo this recipe</span>
          ) : (
            data.feedbacks.map((feedback, id) => (
              <FeedbackItem
                key={id}
                message={feedback.message}
                date={feedback.date}
              />
            ))
          )}
        </div>
      )}
      {/* <div>
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
                required
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className="w-[10rem] py-2 bg-green-500">Save</button>
            <button onClick={() => {}} className="w-[10rem] py-2 border border-slate-300">
              Hide
            </button>
          </div>
        </Form>
      </div> */}
    </div>
  );
}

export default Feedbacks;
