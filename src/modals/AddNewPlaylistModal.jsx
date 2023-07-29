/* eslint-disable react/prop-types */
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { videoConstants } from "../constants/video-constants";
import { useVideos } from "../main";
import CloseIcon from "@mui/icons-material/Close";

export const AddNewPlaylistModal = ({ addToPlaylist }) => {
  const {
    videos: { playlists, selectedVideo },
    setVideos,
  } = useVideos();
  const [formDetails, setFormDetails] = useState({
    _id: uuid(),
    title: "",
    description: "",
    src: "https://picsum.photos/320/176",
    videos: [],
  });

  const {
    ADD_NEW_PLAYLIST,
    SET_SHOW_ADD_NEW_PLAYLIST_MODAL,
    SET_SHOW_ADD_TO_PLAYLIST_MODAL,
    DELETE_PLAYLIST,
    ADD_TO_PLAYLIST,
  } = videoConstants;

  const updateForm = (e) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    setVideos({
      type: ADD_NEW_PLAYLIST,
      payload: addToPlaylist
        ? { ...formDetails, videos: [selectedVideo] }
        : formDetails,
    });
    setVideos({
      type: addToPlaylist
        ? SET_SHOW_ADD_TO_PLAYLIST_MODAL
        : SET_SHOW_ADD_NEW_PLAYLIST_MODAL,
      payload: false,
    });
  };

  return (
    <div
      className="m-3 flex w-full max-w-xl flex-col justify-between gap-3 rounded-lg bg-blue-100 p-3 md:mt-3 md:p-5"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="font-bold">
        Add {addToPlaylist ? "To" : "New"} Playlist
      </div>
      <form className="flex flex-col gap-5" onSubmit={submitFormHandler}>
        <input
          placeholder="Enter title of your playlist"
          className="rounded-lg border px-3 py-1"
          name="title"
          onChange={(e) => updateForm(e)}
          required
        />
        <input
          placeholder="Write a description"
          className="rounded-lg border px-3 py-1"
          name="description"
          onChange={(e) => updateForm(e)}
          required
        />
        <button
          type="submit"
          className="rounded-lg bg-blue-400 py-1 text-white"
        >
          Create New Playlist
        </button>
      </form>
      {addToPlaylist && (
        <div className="flex flex-col gap-5">
          <hr className="h-px border-0 bg-gray-500" />
          {playlists?.map((playlist) => {
            const { _id, title, description, src, videos } = playlist;
            return (
              <div
                key={_id}
                className="flex justify-between"
                title="Add To Playlist"
                onClick={() => {
                  setVideos({ type: ADD_TO_PLAYLIST, payload: playlist });
                  setVideos({
                    type: SET_SHOW_ADD_TO_PLAYLIST_MODAL,
                    payload: false,
                  });
                }}
              >
                <div>{title}</div>
                <div
                  title="Delete Playlist"
                  onClick={(e) => {
                    e.stopPropagation();
                    setVideos({ type: DELETE_PLAYLIST, payload: playlist });
                  }}
                >
                  <CloseIcon />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
