import { useParams } from "react-router-dom";
import { useVideos } from "../main";
import { VideoCard } from "../components/VideoCard";
import { videoConstants } from "../constants/video-constants";
import { useEffect } from "react";

export const PlaylistDetail = () => {
  const { playlistId } = useParams();
  const {
    videos: { allVideos, playlists },
    setVideos,
  } = useVideos();

  const { SET_SELECTED_PLAYLIST } = videoConstants;

  const selectedPlaylist = playlists?.find(({ _id }) => _id == playlistId);

  const { _id, title, description, videos } = selectedPlaylist;

  useEffect(() => {
    setVideos({ type: SET_SELECTED_PLAYLIST, payload: selectedPlaylist });
  }, [selectedPlaylist]);

  return (
    <div className="flex flex-col gap-5 px-5">
      <div className="text-2xl font-bold">{title}</div>
      <div className="flex flex-wrap gap-5">
        {videos?.map((video) => {
          const updatedVideo = allVideos?.find(({ _id }) => _id === video?._id);
          return (
            <VideoCard
              video={updatedVideo}
              key={updatedVideo._id}
              playlistPage
            />
          );
        })}
      </div>
    </div>
  );
};
