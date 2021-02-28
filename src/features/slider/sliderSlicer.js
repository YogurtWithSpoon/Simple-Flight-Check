import { createSlice } from "@reduxjs/toolkit";

export const sliderSlice = createSlice({
  name: "slider",
  initialState: {
    images: [
      "http://images.unsplash.com/photo-1534430480872-3498386e7856?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080",
      "https://st2.depositphotos.com/5648852/8240/i/600/depositphotos_82409274-stock-photo-new-york-skyline-on-a.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/1024px-New_york_times_square-terabass.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/New_York_City_skyline.jpg/640px-New_York_City_skyline.jpg",
      "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F988900144%2F960x0.jpg%3Ffit%3Dscale",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDgKi1x-abc5g5juYJqiLjaEr1Rrh9kn9qcg&usqp=CAU",
      "https://images.contentstack.io/v3/assets/blte6ca0397941e65d8/blt8c539a74e6e8a82b/5d7c25e94ef4443e4a0cd179/Manhattan_New_York_Statue_of_Liberty.jpg",
    ],
  },
  reducers: {},
});

export const selectPic = (state) => state.slider.images;
export default sliderSlice.reducer;
