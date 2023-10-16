import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddCoffee from "./Components/AddCoffee.jsx";
import UpdateCoffee from "./Components/UpdateCoffee.jsx";
import SignIn from "./SignIn/SignIn.jsx";
import SignUp from "./SignUp/SignUp.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import User from "./user/User.jsx";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () =>
      fetch(
        "https://module-56-server-side-ho81vo830-polashs-projects.vercel.app/coffee"
      ),
  },
  {
    path: "addcoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "/udatecoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) =>
      fetch(
        `https://module-56-server-side-ho81vo830-polashs-projects.vercel.app/coffee/${params.id}`
      ),
  },
  {
    path: "/signIn",
    element: <SignIn></SignIn>,
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
  },
  {
    path: "/user",
    element: <User></User>,
    loader: () =>
      fetch(
        "https://module-56-server-side-ho81vo830-polashs-projects.vercel.app/user"
      ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Route}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
