/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import CloseIcon from "@mui/icons-material/Close";
import { useVideos } from "../main";
import { videoConstants } from "../constants/video-constants";

export const VideoCard = ({ video, playlistPage }) => {
  const { setVideos } = useVideos();
  const navigate = useNavigate();
  const {
    _id,
    title,
    views,
    chips,
    thumbnail,
    src,
    category,
    creator,
    watchLater,
  } = video;

  const { HANDLE_WATCH_LATER_VIDEO, REMOVE_FROM_PLAYLIST } = videoConstants;

  return (
    <div
      className="flex w-80 flex-col gap-3 hover:cursor-pointer hover:text-blue-400"
      onClick={() => navigate(`/video/${_id}`)}
    >
      <div className="relative h-44 w-full text-blue-400 ">
        <img src={thumbnail} className="object-fit h-full w-full" />
        <div
          className="absolute right-0 top-0 rounded-bl-md bg-white p-1 hover:cursor-pointer"
          title={`${watchLater ? "Remove from" : "Add to"} Watch Later`}
          onClick={(e) => {
            e.stopPropagation();
            setVideos({ type: HANDLE_WATCH_LATER_VIDEO, payload: _id });
          }}
        >
          {watchLater ? <WatchLaterIcon /> : <WatchLaterOutlinedIcon />}
        </div>
        {playlistPage && (
          <div
            className="absolute left-0 top-0 rounded-br-md bg-white p-1 hover:cursor-pointer"
            title="Remove from Playlist"
            onClick={(e) => {
              e.stopPropagation();
              setVideos({ type: REMOVE_FROM_PLAYLIST, payload: video });
            }}
          >
            <CloseIcon />
          </div>
        )}
      </div>
      <div className="flex gap-3">
        <div>
          <img src="https://picsum.photos/40/40" className="rounded-full" />
        </div>
        <div className="flex w-full flex-col">
          <div className="font-bold">{title}</div>
          <div className="font-bold">{category}</div>
          <div>
            {views} views | {creator}
          </div>
        </div>
      </div>
    </div>
  );
};
