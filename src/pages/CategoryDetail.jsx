import { useParams } from "react-router-dom";
import { useVideos } from "../main";
import { categories } from "../data/categories-data";
import { VideoCard } from "../components/VideoCard";

export const CategoryDetail = () => {
  const { categoryId } = useParams();
  const {
    videos: { allVideos },
  } = useVideos();

  const selectedCategory = categories?.find(({ _id }) => _id === categoryId);

  const selectedCategoryVideos = allVideos?.filter(
    ({ category }) => category === selectedCategory.category
  );

  const { _id, thumbnail, src, category } = selectedCategory;

  return (
    <div className="flex flex-col gap-5 px-5">
      <div className="text-2xl font-bold">{category}</div>
      <div className="flex flex-wrap gap-5">
        {selectedCategoryVideos?.map((video) => (
          <VideoCard video={video} key={video._id} />
        ))}
      </div>
    </div>
  );
};
