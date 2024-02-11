import ClipLoader from "react-spinners/ClipLoader";

function FallbackPage() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <ClipLoader size="lg"/>
    </div>
  );
}

export default FallbackPage;
