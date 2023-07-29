import { useParams, useNavigate } from "react-router-dom";
import { useVideos } from "../main";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { videoConstants } from "../constants/video-constants";
import { AddNewPlaylistModal } from "../modals/AddNewPlaylistModal";
import { useEffect } from "react";

export const VideoDetail = () => {
  const { videoId } = useParams();
  const {
    videos: { allVideos, showAddToPlaylistModal },
    setVideos,
  } = useVideos();
  const navigate = useNavigate();

  const selectedVideo = allVideos?.find(({ _id }) => _id == videoId);
  const moreVideos = allVideos?.filter(({ _id }) => _id != videoId);

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
  } = selectedVideo;

  const {
    HANDLE_WATCH_LATER_VIDEO,
    SET_SHOW_ADD_TO_PLAYLIST_MODAL,
    SET_SELECTED_VIDEO,
  } = videoConstants;

  useEffect(() => {
    setVideos({ type: SET_SELECTED_VIDEO, payload: selectedVideo });
  }, [selectedVideo]);

  return (
    <div
      className="flex flex-col gap-5 px-5 md:flex-row"
      onClick={() =>
        setVideos({ type: SET_SHOW_ADD_TO_PLAYLIST_MODAL, payload: false })
      }
    >
      <div className="flex w-3/5 flex-col gap-3">
        <iframe
          className="w-full"
          height="350"
          src={src}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className="flex w-full items-center gap-5">
          <div>
            <img src="https://picsum.photos/40/40" className="rounded-full" />
          </div>
          <div className="grow font-bold">{title}</div>
          <div
            title={`${watchLater ? "Remove from" : "Add to"} Watch Later`}
            onClick={() =>
              setVideos({ type: HANDLE_WATCH_LATER_VIDEO, payload: _id })
            }
            className="hover:cursor-pointer"
          >
            {watchLater ? <WatchLaterIcon /> : <WatchLaterOutlinedIcon />}
          </div>
          <div
            className="relative hover:cursor-pointer"
            title="Add To Playlist"
            onClick={(e) => {
              e.stopPropagation();
              setVideos({
                type: SET_SHOW_ADD_TO_PLAYLIST_MODAL,
                payload: true,
              });
            }}
          >
            <PlaylistAddIcon />
            {showAddToPlaylistModal && (
              <div className="absolute right-0 top-0" title="">
                <AddNewPlaylistModal addToPlaylist />
              </div>
            )}
          </div>
          <div>
            <EditNoteIcon />
          </div>
        </div>
        <hr className="h-px border-0 bg-gray-500" />
        <div>
          <div className="text-xl font-bold">My Notes</div>
        </div>
      </div>
      <div className="flex w-2/5 flex-col gap-5">
        <div className="text-xl font-bold">More Videos:</div>
        <div className="flex flex-col gap-5">
          {moreVideos?.map((video) => {
            const {
              _id,
              title,
              views,
              chips,
              thumbnail,
              src,
              category,
              creator,
            } = video;
            return (
              <div
                key={_id}
                className="flex h-32 gap-3 hover:cursor-pointer"
                onClick={() => navigate(`/video/${_id}`)}
              >
                <div className="h-full w-1/2">
                  <img src={thumbnail} className="object-fit h-full w-full" />
                </div>
                <div className="flex w-1/2 flex-col text-blue-400">
                  <div className="font-bold">{title}</div>
                  <div>{creator}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
