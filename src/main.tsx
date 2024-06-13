import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home/index.tsx";
import MainLayout from "./layout/MainLayout/";
import { Provider } from "react-redux";
import store from "./store/";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <MainLayout>
        <RouterProvider router={router}></RouterProvider>
      </MainLayout>
    </Provider>
  </React.StrictMode>
);
