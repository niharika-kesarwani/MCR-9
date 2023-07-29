import { Routes, Route } from "react-router-dom";

import { Sidebar } from "../utils/Sidebar";
import { Categories } from "../utils/Categories";
import { Explore } from "./Explore";
import { Playlists } from "./Playlists";
import { WatchLater } from "./WatchLater";

export const Home = () => {
  return (
    <div className="flex flex-col p-10 md:flex-row">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/watchLater" element={<WatchLater />} />
      </Routes>
    </div>
  );
};
