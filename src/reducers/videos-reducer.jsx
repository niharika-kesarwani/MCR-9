import { videoConstants } from "../constants/video-constants";

export const videosReducer = (state, { type, payload }) => {
  const { SET_VIDEOS, HANDLE_WATCH_LATER_VIDEO } = videoConstants;

  switch (type) {
    case SET_VIDEOS:
      return { ...state, allVideos: payload };
    case HANDLE_WATCH_LATER_VIDEO:
      return {
        ...state,
        allVideos: state?.allVideos?.map((video) =>
          video?._id === payload
            ? { ...video, watchLater: !video?.watchLater }
            : video
        ),
      };
    default:
      return state;
  }
};

export const initialVideos = {
  allVideos: [],
};
