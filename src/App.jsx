import {
  createBrowserRouter as Router,
  RouterProvider,
} from "react-router-dom";
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
import RequireAuth from "./features/auth/RequireAuth";
import Prefetch from "./features/auth/Prefetch";
import RequireNoAuth from "./features/auth/RequireNoAuth";
import NotFound from "./pages/NotFound";

const App = () => {
  const router = Router([
    {
      path: "/",
      element: <RequireNoAuth />,
      errorElement: <NotFound />,
      children: [
        { path: "", element: <Home /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "freelancers", element: <Freelancers /> },
        { path: "/find-freelancers", element: <FindFreelancers /> },
        { path: "/freelancer-profile", element: <FreelancerProfile /> },
        {
          path: "/gigs",
          children: [
            { path: "browse", element: <BrowseGigs /> },
            { path: "view-bid", element: <Bid /> },
          ],
        },
      ],
    },
    {
      path: "/dashboard",
      element: <RequireAuth />,
      children: [
        {
          path: "",
          element: <Prefetch />,
          errorElement: <NotFound />,
          children: [
            { path: "", element: <Dashboard /> },
            { path: "messages", element: <Messages /> },
            { path: "bookmarks", element: <Bookmarks /> },
            { path: "reviews", element: <Reviews /> },
            { path: "manage-gigs", element: <ManageJobs /> },
            { path: "manage-candidates", element: <ManageCandidates /> },
            { path: "post-gig", element: <PostGig /> },
            { path: "manage-tasks", element: <ManageTasks /> },
            { path: "manage-bidders", element: <ManageBidders /> },
            { path: "active-bids", element: <ActiveBids /> },
            { path: "post-task", element: <PostTask /> },
            { path: "settings", element: <Settings /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
