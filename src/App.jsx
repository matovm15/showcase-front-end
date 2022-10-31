import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Messages from "./pages/Messages";
import Bookmarks from "./pages/Bookmarks";
import Reviews from "./pages/Reviews";
import ManageJobs from "./pages/ManageJobs";
import ManageCandidates from "./pages/ManageCandidates";
import PostGig from "./pages/PostGig";
import ManageTasks from "./pages/ManageTasks";
import ManageBidders from "./pages/ManageBidders";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/manage-gigs" element={<ManageJobs />} />
        <Route path="/manage-candidates" element={<ManageCandidates />} />
        <Route path="/post-gig" element={<PostGig />} />
        <Route path="/manage-tasks" element={<ManageTasks />} />
        <Route path="/manage-bidders" element={<ManageBidders />} />
      </Routes>
    </Router>
  );
};

export default App;
