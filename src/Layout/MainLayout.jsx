import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";

const MainLayout = () => {
    return (
        <div >
            {/* Navbar */}
            <Navbar />

            
            <div >
                <Outlet />
            </div>

            <Footer/>
        </div>
    );
};

export default MainLayout;