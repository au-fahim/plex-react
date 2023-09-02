import { createSlice } from "@reduxjs/toolkit";

export const videoPopupSlice = createSlice({
  name: "videoPopup",
  initialState: {
    showVideoPopup: false,
    videoId: ""
  },
  reducers: {
    setVideoId: (state, action) => {
      state.videoId = action.payload
    },
    setShowVideoPopup: (state, action) => {
      state.showVideoPopup = action.payload
    }
  }
})


export const { setVideoId, setShowVideoPopup } = videoPopupSlice.actions

export default videoPopupSlice.reducer