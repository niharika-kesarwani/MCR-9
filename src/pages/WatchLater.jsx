import { VideoCard } from "../components/VideoCard";
import { useVideos } from "../main";

export const WatchLater = () => {
  const {
    videos: { allVideos },
  } = useVideos();

  const watchLaterVideos = allVideos?.filter(({ watchLater }) => watchLater);

  return (
    <div className="flex flex-col gap-5 px-5">
      <div className="text-2xl font-bold">Watch Later</div>
      <div className="flex flex-wrap gap-5">
        {watchLaterVideos?.map((video) => (
          <VideoCard video={video} key={video._id} />
        ))}
      </div>
    </div>
  );
};
