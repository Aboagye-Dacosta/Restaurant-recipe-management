import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const routerError = useRouteError();

  return (
    <div className="flex items-center justify-center text-[1.5rem] font-bold">
      {routerError.message || routerError.data}
    </div>
  );
}

export default ErrorPage;
