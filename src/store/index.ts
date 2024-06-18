import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./MainStore";
import homeReducer from "./HomeStore";
import movieReducer from "./MovieStore";
import tvShowReducer from "./TvShowStore";

const store = configureStore({
  reducer: {
    main: mainReducer,
    home: homeReducer,
    movie: movieReducer,
    tvShow: tvShowReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
