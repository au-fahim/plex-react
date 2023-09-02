import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./homeSlice";
import videoPopupSlice from './videoPoupuSlice';

export const store = configureStore({
  reducer: {
    home: homeSlice,
    videoPopup: videoPopupSlice,
  },
});