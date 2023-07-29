import { VideoCard } from "../components/VideoCard";
import { videoConstants } from "../constants/video-constants";
import { useVideos } from "../main";

export const Explore = () => {
  const { setVideos, exploreVideos } = useVideos();
  const { SET_EXPLORE_SEARCH_TEXT } = videoConstants;

  return (
    <div className="flex flex-col gap-5 px-5 md:w-5/6">
      <div className="text-2xl font-bold">Explore</div>
      <input
        placeholder="Search video by title"
        className="rounded-full border-2 px-4 py-1 text-center"
        onChange={(e) =>
          setVideos({ type: SET_EXPLORE_SEARCH_TEXT, payload: e.target.value })
        }
      />
      <div className="flex flex-wrap gap-4">
        {exploreVideos?.map((video) => (
          <VideoCard video={video} key={video._id} />
        ))}
      </div>
    </div>
  );
};
