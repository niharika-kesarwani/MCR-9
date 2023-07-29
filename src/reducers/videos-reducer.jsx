import { videoConstants } from "../constants/video-constants";

export const videosReducer = (state, { type, payload }) => {
  const {
    SET_VIDEOS,
    HANDLE_WATCH_LATER_VIDEO,
    SET_EXPLORE_SEARCH_TEXT,
    SET_SELECTED_PLAYLIST,
    REMOVE_FROM_PLAYLIST,
  } = videoConstants;

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
    case SET_EXPLORE_SEARCH_TEXT:
      return { ...state, exploreSearchText: payload };
    case SET_SELECTED_PLAYLIST:
      return { ...state, selectedPlaylist: payload };
    case REMOVE_FROM_PLAYLIST:
      return {
        ...state,
        playlists: state?.playlists?.map((playlist) =>
          playlist._id == state?.selectedPlaylist?._id
            ? {
                ...playlist,
                videos: playlist?.videos?.filter(
                  ({ _id }) => _id != payload?._id
                ),
              }
            : playlist
        ),
      };
    default:
      return state;
  }
};

export const initialVideos = {
  allVideos: [],
  exploreSearchText: "",
  playlists: [
    {
      _id: 2,
      title: "Demo",
      description: "Demo desc",
      videos: [
        {
          _id: 34,
          title: "Stop Motion Animation Tips and Tricks",
          views: 3172,
          chips: ["stop motion", "animation", "tips", "tricks"],
          thumbnail: "https://picsum.photos/310/174",
          src: "https://www.youtube.com/embed/GBIIQ0kP15E",
          category: "Stop Motion",
          creator: "AnimateMagic",
        },
      ],
    },
  ],
  selectedPlaylist: {},
};
