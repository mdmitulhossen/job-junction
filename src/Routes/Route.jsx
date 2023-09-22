import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import StatisticPage from "../Pages/StatisticPage";
import ApliedJob from "../Pages/ApliedJob";
import Blogs from "../Pages/Blogs";
import { appliedJobLoader, detailsLoader, statisticsLoader } from "../Utilitis/fatchData";
import AllJobs from "../Pages/AllJobs";
import JobDetails from "../Pages/JobDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement:<ErrorPage/>,
        children: [
            {
                path: "/",
                element: <StatisticPage/>,
                loader:statisticsLoader
            },
            {
                path: "/applidJobs",
                element: <ApliedJob/>,
                loader:appliedJobLoader
            },
            {
                path: "/jobs",
                element: <AllJobs/>,
                loader:statisticsLoader
            },
            {
                path: "/job/:id",
                element: <JobDetails/>,
                loader: detailsLoader
            },
            {
                path: "/blogs",
                element: <Blogs/>
            },
        ]
    }
]);
export default router;