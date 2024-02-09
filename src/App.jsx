import React from "react";
import AppRouter from "./Utils/AppRouter";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export const API_URL = "https://65c5d0e0e5b94dfca2e0573b.mockapi.io/axios";

function App() {
  const router = createBrowserRouter(AppRouter);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
