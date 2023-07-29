import { useState } from "react";
import { v4 as uuid } from "uuid";
import { videoConstants } from "../constants/video-constants";
import { useVideos } from "../main";

export const AddNewPlaylistModal = () => {
  const { setVideos } = useVideos();
  const [formDetails, setFormDetails] = useState({
    _id: uuid(),
    title: "",
    description: "",
    src: "https://picsum.photos/320/176",
    videos: [],
  });

  const { ADD_NEW_PLAYLIST, SET_SHOW_ADD_NEW_PLAYLIST_MODAL } = videoConstants;

  const updateForm = (e) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    setVideos({ type: ADD_NEW_PLAYLIST, payload: formDetails });
    setVideos({ type: SET_SHOW_ADD_NEW_PLAYLIST_MODAL, payload: false });
  };

  return (
    <div
      className="m-3 flex w-full max-w-xl flex-col justify-between gap-3 rounded-lg bg-white p-3 md:mt-3 md:p-5"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="font-bold">Add New Playlist</div>
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
    </div>
  );
};
