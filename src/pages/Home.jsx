import { Routes, Route } from "react-router-dom";

import { Sidebar } from "../utils/Sidebar";
import { Categories } from "../utils/Categories";
import { Explore } from "./Explore";
import { Playlists } from "./Playlists";
import { WatchLater } from "./WatchLater";
import { CategoryDetail } from "./CategoryDetail";
import { VideoDetail } from "./VideoDetail";

export const Home = () => {
  return (
    <div className="flex flex-col gap-5 p-10 md:flex-row">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/category/:categoryId" element={<CategoryDetail />} />
        <Route path="/video/:videoId" element={<VideoDetail />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/watchLater" element={<WatchLater />} />
      </Routes>
    </div>
  );
};
