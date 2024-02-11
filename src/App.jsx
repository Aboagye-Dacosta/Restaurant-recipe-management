import { RouterProvider } from "react-router-dom";
import FallbackPage from "./pages/FallbackPage";
import { Router } from "./routes/Routes";

function App() {
  return <RouterProvider router={Router} fallbackElement={<FallbackPage />} />;
}

export default App;
