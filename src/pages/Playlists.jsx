import { useNavigate } from "react-router-dom";
import { useVideos } from "../main";

export const Playlists = () => {
  const navigate = useNavigate();
  const {
    videos: { playlists },
  } = useVideos();

  return (
    <div className="flex flex-col gap-5 px-5 md:w-5/6">
      <div className="text-2xl font-bold">Playlists</div>
      <div className="flex flex-wrap gap-10">
        {playlists?.map((item) => {
          const { _id, title, description, videos } = item;
          return (
            <div
              key={_id}
              className="flex flex-col gap-2 hover:cursor-pointer hover:text-blue-400"
              rel="noreferrer"
              onClick={() => navigate(`/playlist/${_id}`)}
            >
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
