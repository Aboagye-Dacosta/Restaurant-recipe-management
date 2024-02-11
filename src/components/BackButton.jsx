import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function BackButton() {
  return (
    <div className="self-end">
      <Link
        to={-1}
        className="p-2 border border-slate-300 mr-10 w-[10rem] font-bold text-bold flex items-center justify-center"
      >
        <FaArrowLeft className="mr-2" />
        Back{" "}
      </Link>
    </div>
  );
}

export default BackButton;
