import { useNavigate } from "react-router-dom";
import { useVideos } from "../main";
import CloseIcon from "@mui/icons-material/Close";
import { videoConstants } from "../constants/video-constants";

export const Playlists = () => {
  const navigate = useNavigate();
  const {
    videos: { playlists },
    setVideos,
  } = useVideos();

  const { DELETE_PLAYLIST } = videoConstants;

  return (
    <div className="flex flex-col gap-5 px-5 md:w-5/6">
      <div className="text-2xl font-bold">Playlists</div>
      <div className="flex flex-wrap gap-10">
        {playlists?.map((playlist) => {
          const { _id, title, description, videos } = playlist;
          return (
            <div
              key={_id}
              className="relative flex flex-col gap-2 hover:cursor-pointer hover:text-blue-400"
              rel="noreferrer"
              onClick={() => navigate(`/playlist/${_id}`)}
            >
              <div
                className="absolute right-0 top-0 rounded-bl-md bg-white p-1 hover:cursor-pointer"
                title="Delete Playlist"
                onClick={(e) => {
                  e.stopPropagation();
                  setVideos({ type: DELETE_PLAYLIST, payload: playlist });
                }}
              >
                <CloseIcon />
              </div>
              <div>
                <img src="https://picsum.photos/320/176" />
              </div>
              <div className="font-bold">{title}</div>
              <div>{description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
