import { videoConstants } from "../constants/video-constants";

export const videosReducer = (state, { type, payload }) => {
  const { SET_VIDEOS } = videoConstants;

  switch (type) {
    case SET_VIDEOS:
      return { ...state, allVideos: payload };
    default:
      return state;
  }
};

export const initialVideos = {
  allVideos: [],
};
