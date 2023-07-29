import { videoConstants } from "../constants/video-constants";

export const videosReducer = (state, { type, payload }) => {
  const {
    SET_VIDEOS,
    HANDLE_WATCH_LATER_VIDEO,
    SET_EXPLORE_SEARCH_TEXT,
    SET_SELECTED_PLAYLIST,
    REMOVE_FROM_PLAYLIST,
    DELETE_PLAYLIST,
    SET_SHOW_ADD_NEW_PLAYLIST_MODAL,
    ADD_NEW_PLAYLIST,
    SET_SHOW_ADD_TO_PLAYLIST_MODAL,
    SET_SELECTED_VIDEO,
    ADD_TO_PLAYLIST,
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
    case SET_SHOW_ADD_NEW_PLAYLIST_MODAL:
      return { ...state, showAddNewPlaylistModal: payload };
    case ADD_NEW_PLAYLIST:
      return { ...state, playlists: [...state.playlists, payload] };
    case SET_SHOW_ADD_TO_PLAYLIST_MODAL:
      return { ...state, showAddToPlaylistModal: payload };
    case SET_SELECTED_VIDEO:
      return { ...state, selectedVideo: payload };
    case ADD_TO_PLAYLIST:
      return {
        ...state,
        playlists: state?.playlists?.map((playlist) =>
          playlist?._id === payload?._id
            ? {
                ...playlist,
                videos: [state.selectedVideo, ...playlist.videos],
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
  playlists: [],
  selectedPlaylist: {},
  showAddNewPlaylistModal: false,
  showAddToPlaylistModal: false,
  selectedVideo: {},
};
