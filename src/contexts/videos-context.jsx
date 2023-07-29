/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";

import { initialVideos, videosReducer } from "../reducers/videos-reducer";
import { videoConstants } from "../constants/video-constants";
import { videos as videosData } from "../data/videos-data";

export const VideosContext = createContext();

export const VideosProvider = ({ children }) => {
  const [videos, setVideos] = useReducer(videosReducer, initialVideos);

  const { SET_VIDEOS } = videoConstants;

  useEffect(() => {
    const localStorageVideos = localStorage.getItem("videos");
    if (localStorageVideos) {
      setVideos({
        type: SET_VIDEOS,
        payload: JSON.parse(localStorageVideos),
      });
    } else {
      localStorage.setItem("videos", JSON.stringify(videosData));
      setVideos({ type: SET_VIDEOS, payload: videosData });
    }
  }, []);

  return (
    <VideosContext.Provider value={{ videos, setVideos }}>
      {children}
    </VideosContext.Provider>
  );
};

export const useVideos = () => useContext(VideosContext);
