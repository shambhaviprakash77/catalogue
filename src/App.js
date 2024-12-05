import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Add from "./components/addcatalogue/Add";
import Get from "./components/getcatalogue/Get";

function App() {
  // Correctly define the router using createBrowserRouter
  const router = createBrowserRouter([
    {
      path: "/create",
      element: <Add />,
    },
    {
      path: "/get",
      element: <Get />,
    },
  ]);

  return (
    <div >
      {/* Use RouterProvider to render the router */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;