import { useNavigate } from "react-router-dom";

import { categories } from "../data/categories-data";

export const Categories = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-5 px-5 md:w-5/6">
      <div className="text-2xl font-bold">Categories</div>
      <div className="flex flex-wrap gap-10">
        {categories?.map((item) => {
          const { _id, thumbnail, src, category } = item;
          return (
            <div
              key={_id}
              className="flex flex-col gap-2 hover:cursor-pointer hover:text-blue-400"
              rel="noreferrer"
              onClick={() => navigate(`/category/${_id}`)}
            >
              <div>
                <img src={thumbnail} />
              </div>
              <div className="font-bold">{category}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
