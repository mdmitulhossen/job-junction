import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import StatisticPage from "../Pages/StatisticPage";
import ApliedJob from "../Pages/ApliedJob";
import Blogs from "../Pages/Blogs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement:<ErrorPage/>,
        children: [
            {
                path: "/",
                element: <StatisticPage/>
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