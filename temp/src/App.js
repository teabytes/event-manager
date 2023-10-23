import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomeMain from "./pages/home-main";
import ProfileRegistered from "./pages/profile-registered";
import ProfileParticipated from "./pages/profile-participated";
import ProfileParticipatedMain from "./pages/profile-participated-main";
import ProfileRegisteredMain from "./pages/profile-registered-main";
import Home from "./pages/home";
import Explore from "./pages/explore";
import ExploreMain from "./pages/explore-main";
import MyClubs from "./pages/my-clubs";
import MyClubsMain from "./pages/my-clubs-main";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/profile-registered":
        title = "";
        metaDescription = "";
        break;
      case "/profile-participated":
        title = "";
        metaDescription = "";
        break;
      case "/profile-participated-main":
        title = "";
        metaDescription = "";
        break;
      case "/profile-registered-main":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
      case "/explore":
        title = "";
        metaDescription = "";
        break;
      case "/explore-main":
        title = "";
        metaDescription = "";
        break;
      case "/my-clubs":
        title = "";
        metaDescription = "";
        break;
      case "/my-clubs-main":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomeMain />} />
      <Route path="/profile-registered" element={<ProfileRegistered />} />
      <Route path="/profile-participated" element={<ProfileParticipated />} />
      <Route
        path="/profile-participated-main"
        element={<ProfileParticipatedMain />}
      />
      <Route
        path="/profile-registered-main"
        element={<ProfileRegisteredMain />}
      />
      <Route path="/home" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/explore-main" element={<ExploreMain />} />
      <Route path="/my-clubs" element={<MyClubs />} />
      <Route path="/my-clubs-main" element={<MyClubsMain />} />
    </Routes>
  );
}
export default App;
