import { categories } from "../data/categories-data";

export const Categories = () => {
  return (
    <div className="flex flex-col gap-5 px-5 md:w-5/6">
      <div className="text-2xl font-bold">Categories</div>
      <div className="flex flex-wrap gap-10">
        {categories?.map((item) => {
          const { _id, thumbnail, src, category } = item;
          return (
            <a
              target="_blank"
              href={src}
              key={_id}
              className="flex flex-col gap-2 hover:cursor-pointer hover:text-blue-400"
              rel="noreferrer"
            >
              <div>
                <img src={thumbnail} />
              </div>
              <div className="font-bold">{category}</div>
            </a>
          );
        })}
      </div>
    </div>
  );
};
