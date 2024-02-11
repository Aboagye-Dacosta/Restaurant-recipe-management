import { Link, useParams } from "react-router-dom";

function EditButton ()
{
  const {recipeId} = useParams()
  return (
    <Link
      to={`/app/recipes/${recipeId}/edit`}
      className="p-2 border border-green-500 bg-green-500 mr-10 w-[10rem] font-bold text-bold flex items-center justify-center"
    >
      Edit{" "}
    </Link>
  );
}

export default EditButton;
