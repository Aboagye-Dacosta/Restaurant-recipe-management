/* eslint-disable react/prop-types */
import { IoMdClose } from "react-icons/io";
import EditButton from "./EditButton";
import Title from "./Title";

function ProcessSideBar({ open, toggleOpen, steps, ingredients }) {
  
  return (
    <div
      className={`flex items-start justify-start flex-col absolute w-0 overflow-hidden right-0 top-0 h-screen bg-slate-700 transition-[width] overflow-y-auto
      duration-200 z-40 py-3 pt-16 ${open == true ? "!w-[25rem]" : ""}`}
    >
      <div className="px-4">
        <IoMdClose
          className="absolute right-2 top-5 text-[2rem] text-white"
          onClick={() => toggleOpen()}
        />
        <div className="w-4/5">
          <Title title="Preparation process" />
        </div>

        <h4 className="font-bold text-[1.5rem] text-slate-300 capitalize">
          Ingredients
        </h4>
        <ul className="px-4">
          {ingredients.map((ingredient, id) => (
            <li key={id} className="bg-slate-300 p-2 mb-1">
              {ingredient}
            </li>
          ))}
        </ul>
        <h4 className="font-bold text-[1.5rem] text-slate-300 capitalize">
          Steps
        </h4>
        <ul className="px-4">
          {steps.map((step, id) => (
            <li key={id} className="bg-slate-300 p-2 mb-1">
              {step}
            </li>
          ))}
        </ul>
      </div>
        <div className="self-end mt-5 flex justify-end">
          <EditButton />
        </div>
    </div>
  );
}

export default ProcessSideBar;
