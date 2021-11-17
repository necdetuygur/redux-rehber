import { configureStore } from "@reduxjs/toolkit";
import kisiReducer from "./kisiSlice";

export default configureStore({
  reducer: {
    kisi: kisiReducer,
  },
});
