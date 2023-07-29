import { useNavigate, useLocation } from "react-router-dom";

import { sidebarConstants } from "../constants/sidebar-constants";

export const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="md:w-1/6">
      {sidebarConstants?.map(({ icon, text, route }, index) => {
        const onSameRoute = location.pathname === route;
        return (
          <li
            key={index}
            className={`flex list-none items-center gap-3 p-5 font-bold hover:cursor-pointer hover:text-blue-400 ${
              onSameRoute && "text-blue-400"
            }`}
            onClick={() => navigate(route)}
            title={text}
          >
            <div>{icon}</div>
            <div>{text}</div>
          </li>
        );
      })}
    </div>
  );
};
