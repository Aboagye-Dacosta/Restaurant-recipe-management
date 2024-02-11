import { FaBars } from "react-icons/fa";
import { useParams } from "react-router-dom";

import Title from "./Title";

// eslint-disable-next-line react/prop-types
function Header({ openSlider }) {
  const { recipeId } = useParams();
  console.log(openSlider);
  return (
    <div className="flex w-full flex-row justify-between items-start relative z-30">
      <Title title="Recipe" />
      {recipeId && (
        <FaBars
          onClick={() => {
            console.log("clicked");
            openSlider();
          }}
        />
      )}
    </div>
  );
}

export default Header;
