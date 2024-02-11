import {FaCopyright} from "react-icons/fa"

function Footer() {
  return (
    <div className="text-[1rem] flex items-center justify-center">
      <FaCopyright className="mr-2" /> by Dacosta on {new Date().getFullYear()}
    </div>
  );
}

export default Footer