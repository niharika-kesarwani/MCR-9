import { videoConstants } from "../constants/video-constants";

export const videosReducer = (state, { type, payload }) => {
  const {
    SET_VIDEOS,
    HANDLE_WATCH_LATER_VIDEO,
    SET_EXPLORE_SEARCH_TEXT,
    SET_SELECTED_PLAYLIST,
    REMOVE_FROM_PLAYLIST,
    DELETE_PLAYLIST,
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
    case DELETE_PLAYLIST:
      return {
        ...state,
        playlists: state?.playlists?.filter(({ _id }) => _id != payload?._id),
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
        {
          _id: 36,
          title: "Quilling 3D Wall Art - Adding Depth to Paper Designs",
          views: 1756,
          chips: ["quilling", "3d wall art", "paper", "designs"],
          thumbnail: "https://picsum.photos/312/174",
          src: "https://www.youtube.com/embed/GBIIQ0kP15E",
          category: "Quilling",
          creator: "PaperArtDimensions",
        },
      ],
    },
    {
      _id: 4,
      title: "Demo 2",
      description: "Desc 2",
      videos: [
        {
          _id: 35,
          title: "Pottery Art Exhibition - Celebrating Local Artists",
          views: 2879,
          chips: ["pottery", "clay", "art exhibition", "local artists"],
          thumbnail: "https://picsum.photos/311/174",
          src: "https://www.youtube.com/embed/GBIIQ0kP15E",
          category: "Pottery",
          creator: "ArtisticExpressions",
        },
        {
          _id: 36,
          title: "Quilling 3D Wall Art - Adding Depth to Paper Designs",
          views: 1756,
          chips: ["quilling", "3d wall art", "paper", "designs"],
          thumbnail: "https://picsum.photos/312/174",
          src: "https://www.youtube.com/embed/GBIIQ0kP15E",
          category: "Quilling",
          creator: "PaperArtDimensions",
        },
      ],
    },
  ],
  selectedPlaylist: {},
};
