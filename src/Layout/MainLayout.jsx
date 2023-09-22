import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayout = () => {
    return (
        <div >
            {/* Navbar */}
            <Navbar />


            <div className="max-w-[1920px] mx-auto md:px-[160px] px-8">
                <Outlet />
            </div>

            <Footer/>
        </div>
    );
};

export default MainLayout;