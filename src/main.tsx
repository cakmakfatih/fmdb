import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home/index.tsx";
import MainLayout from "./layout/MainLayout/";
import { Provider } from "react-redux";
import store from "./store/";
import {
  homeLoadPopular,
  homeLoadTrending,
} from "./store/HomeStore/homeAsyncThunks.ts";
import "swiper/css";
import { toggleStickyHeader } from "./store/MainStore/mainSlice.ts";
import { HEADER_HEIGHT } from "./core/globals.ts";
import {
  getMovieGenres,
  getTvShowGenres,
} from "./store/MainStore/mainAsyncThunks.ts";
import ShowDetailModal from "./components/ShowDetailModal/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

store.dispatch(getMovieGenres());
store.dispatch(getTvShowGenres());
store.dispatch(homeLoadTrending());
store.dispatch(homeLoadPopular());

window.onscroll = (_) => {
  if (window.scrollY > HEADER_HEIGHT && !store.getState().main.isHeaderSticky) {
    store.dispatch(toggleStickyHeader(true));
  } else if (
    window.scrollY < HEADER_HEIGHT &&
    store.getState().main.isHeaderSticky
  ) {
    store.dispatch(toggleStickyHeader(false));
  }
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <MainLayout>
        <RouterProvider router={router}></RouterProvider>
        <ShowDetailModal />
      </MainLayout>
    </Provider>
  </React.StrictMode>
);
