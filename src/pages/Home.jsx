import { Routes, Route } from "react-router-dom";

import { Sidebar } from "../utils/Sidebar";
import { Categories } from "../utils/Categories";
import { Explore } from "./Explore";
import { Playlists } from "./Playlists";
import { WatchLater } from "./WatchLater";
import { CategoryDetail } from "./CategoryDetail";
import { VideoDetail } from "./VideoDetail";
import { PlaylistDetail } from "./PlaylistDetail";
import { AddNewPlaylistModal } from "../modals/AddNewPlaylistModal";
import { useVideos } from "../main";
import { videoConstants } from "../constants/video-constants";

export const Home = () => {
  const {
    videos: { showAddNewPlaylistModal },
    setVideos,
  } = useVideos();

  const { SET_SHOW_ADD_NEW_PLAYLIST_MODAL } = videoConstants;

  return (
    <div className="flex flex-col gap-5 p-10 md:flex-row">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/category/:categoryId" element={<CategoryDetail />} />
        <Route path="/video/:videoId" element={<VideoDetail />} />
        <Route path="/playlist/:playlistId" element={<PlaylistDetail />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/watchLater" element={<WatchLater />} />
      </Routes>

      {showAddNewPlaylistModal && (
        <div
          className="fixed inset-0 z-50 flex h-screen items-center justify-center bg-[black] bg-opacity-50"
          onClick={() => {
            setVideos({
              type: SET_SHOW_ADD_NEW_PLAYLIST_MODAL,
              payload: false,
            });
          }}
        >
          <AddNewPlaylistModal />
        </div>
      )}
    </div>
  );
};
