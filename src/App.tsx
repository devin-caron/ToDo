import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage.tsx";
import SigninPage from "./pages/Signin.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import SignupPage from "./pages/SignupPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SigninPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "signup",
    element: <SignupPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
