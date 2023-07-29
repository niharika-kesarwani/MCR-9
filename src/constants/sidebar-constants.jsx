import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

export const sidebarConstants = [
  {
    icon: <HomeIcon />,
    text: "Home",
    route: "/",
  },
  {
    icon: <ExploreIcon />,
    text: "Explore",
    route: "/explore",
  },
  {
    icon: <PlaylistAddIcon />,
    text: "Playlists",
    route: "/playlists",
  },
  {
    icon: <WatchLaterIcon />,
    text: "Watch Later",
    route: "/watchLater",
  },
];
