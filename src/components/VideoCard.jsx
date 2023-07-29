/* eslint-disable react/prop-types */
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

export const VideoCard = ({ video }) => {
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
  return (
    <div className="flex w-80 flex-col gap-3">
      <div className="relative h-44 w-full text-blue-400 ">
        <img src={thumbnail} className="object-fit h-full w-full" />
        <div className="absolute right-0 top-0 rounded-bl-md bg-white p-1 hover:cursor-pointer">
          {watchLater ? <WatchLaterIcon /> : <WatchLaterOutlinedIcon />}
        </div>
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
