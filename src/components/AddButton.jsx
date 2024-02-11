import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function AddButton({ to }) {
  return (
    <Link
      to={to}
      className="p-2 border border-slate-300 mr-10 w-[10rem] font-bold text-bold flex items-center justify-center"
    >
      Add{" "}
    </Link>
  );
}

export default AddButton;
