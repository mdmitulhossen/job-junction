import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import StatisticPage from "../Pages/StatisticPage";
import ApliedJob from "../Pages/ApliedJob";
import Blogs from "../Pages/Blogs";
import { statisticsLoader } from "../Utilitis/fatchData";
import AllJobs from "../Pages/AllJobs";

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
                element: <ApliedJob/>
            },
            {
                path: "/jobs",
                element: <AllJobs/>,
                loader:statisticsLoader
            },
            {
                path: "/blogs",
                element: <Blogs/>
            },
        ]
    }
]);
export default router;