import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import HomePage from "./pages/home";
import CreateHousePage from "./pages/create-hacker-house";
import ApplyPage from "./pages/apply";
import ExploreHouses from "./pages/explore/houses";
import ExploreHackers from "./pages/explore/hackers";
import ExploreProjects from "./pages/explore/projects";
import HackerHouseInfoPage from "./pages/hacker-house/info";
import ProjectInfoPage from "./pages/project/info";
import Profile from "./pages/profile";
import ManageHackerHouseIndex from "./pages/manage/index";
import ManageHackerHouse from "./pages/manage/hackerHouse";
import GuidancePage from "./pages/guidancePage";

export default function RouterLink() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/how-to-docs" element={<GuidancePage />} />
        <Route path="/explore/hacker-houses" element={<ExploreHouses />} />
        <Route path="/explore/hackers" element={<ExploreHackers />} />
        <Route path="/explore/projects" element={<ExploreProjects />} />
        <Route path="/create-hacker-house" element={<CreateHousePage />} />
        <Route path="/hacker-house/:id" element={<HackerHouseInfoPage />} />
        <Route path="/project/:id" element={<ProjectInfoPage />} />

        <Route path="/apply" element={<ApplyPage />} />
        {/* user */}
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/manage/hacker-house"
          element={<ManageHackerHouseIndex />}
        />
        <Route
          path="/manage/hacker-house/:id"
          element={<ManageHackerHouse />}
        />
      </Routes>
    </Router>
  );
}
