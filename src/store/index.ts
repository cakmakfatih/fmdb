import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "./MainStore/mainSlice";
import homeSlice from "./HomeStore/homeSlice";

const store = configureStore({
  reducer: {
    main: mainSlice,
    home: homeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
