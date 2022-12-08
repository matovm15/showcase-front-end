import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Freelancers from "./pages/Freelancers";
import Dashboard from "./pages/Dashboard";
import Messages from "./pages/Messages";
import Bookmarks from "./pages/Bookmarks";
import Reviews from "./pages/Reviews";
import ManageJobs from "./pages/ManageJobs";
import ManageCandidates from "./pages/ManageCandidates";
import PostGig from "./pages/PostGig";
import ManageTasks from "./pages/ManageTasks";
import ManageBidders from "./pages/ManageBidders";
import ActiveBids from "./pages/ActiveBids";
import PostTask from "./pages/PostTask";
import Settings from "./pages/Settings";
import FindFreelancers from "./pages/FindFreelancers";
import FreelancerProfile from "./pages/FreelancerProfile";
import BrowseGigs from "./pages/BrowseGigs";
import Bid from "./pages/Bid";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/freelancers" element={<Freelancers />} />
        <Route path="/dashboard">
          <Route index element={<Dashboard />} />
          <Route path="messages" element={<Messages />} />
          <Route path="bookmarks" element={<Bookmarks />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="manage-gigs" element={<ManageJobs />} />
          <Route path="manage-candidates" element={<ManageCandidates />} />
          <Route path="post-gig" element={<PostGig />} />
          <Route path="manage-tasks" element={<ManageTasks />} />
          <Route path="manage-bidders" element={<ManageBidders />} />
          <Route path="active-bids" element={<ActiveBids />} />
          <Route path="post-task" element={<PostTask />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="/find-freelancers" element={<FindFreelancers />} />
        <Route path="/freelancer-profile" element={<FreelancerProfile />} />
        <Route path="/gigs">
          <Route path="browse" element={<BrowseGigs />} />
          <Route path="view-bid" element={<Bid />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
