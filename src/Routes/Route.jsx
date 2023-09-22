import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement:<ErrorPage/>,
        children: [
            {
                path: "/",
                element: <h1>Home Page</h1>
            },
            {
                path: "/jobs",
                element: <h1>JoB applid page Page</h1>
            },
            {
                path: "/blogs",
                element: <h1>BlogPage</h1>
            }
        ]
    }
]);
export default router;