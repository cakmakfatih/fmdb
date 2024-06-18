import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home/index.ts";
import MainLayout from "./layout/MainLayout/";
import { Provider } from "react-redux";
import store from "./store/";
import { homeLoadTrending } from "./store/HomeStore/HomeAction.ts";
import "swiper/css";
import { toggleStickyHeader } from "./store/MainStore/MainSlice.ts";
import { HEADER_HEIGHT } from "./core/globals.ts";
import {
  getMovieGenres,
  getTvShowGenres,
} from "./store/MainStore/MainAction.ts";
import ShowDetailModal from "./components/ShowDetailModal/index.tsx";
import {
  movieLoadPopular,
  movieLoadTopRated,
} from "./store/MovieStore/MovieAction.ts";
import { tvShowLoadPopular } from "./store/TvShowStore/TvShowAction.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

store.dispatch(getMovieGenres());
store.dispatch(getTvShowGenres());
store.dispatch(homeLoadTrending());
store.dispatch(movieLoadPopular());
store.dispatch(tvShowLoadPopular());
store.dispatch(movieLoadTopRated());

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
