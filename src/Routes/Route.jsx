import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import StatisticPage from "../Pages/StatisticPage";
import ApliedJob from "../Pages/ApliedJob";
import Blogs from "../Pages/Blogs";
import { statisticsLoader } from "../Utilitis/fatchData";

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
                path: "/jobs",
                element: <ApliedJob/>
            },
            {
                path: "/blogs",
                element: <Blogs/>
            }
        ]
    }
]);
export default router;