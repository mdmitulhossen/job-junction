import React, { useState } from 'react';
import {Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <div className=' max-w-[1920px] bg-transparent dark:bg-gray-900  mx-auto xl:px-[160px]  lg:px-[100px] md:px-[60px] px-8 absolute top-0 left-0 right-0 z-20'>
            <nav className=" w-full z-20">
                <div className=" flex flex-wrap items-center justify-between mx-auto py-4">
                    <Link to="/" className="flex items-center">
                        {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo"/> */}
                        <span className="text-2xl font-bold whitespace-nowrap dark:text-white">JobJunction</span>
                    </Link>
                    <div className="flex md:order-2">
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Start Applying</button>
                        <button onClick={()=>setNavbarOpen(!navbarOpen)}  type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className={`items-center bg-gray-200 md:bg-transparent justify-between ${navbarOpen?'block':'hidden'} w-full md:flex md:w-auto md:order-1 z-20`} >
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  md:flex-row md:justify-between lg:gap-5 xl:gap-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) => {
                                        return isActive ? "block py-2 px-3 text-sm bg-blue-700 rounded font-semibold  text-white"
                                            :
                                            "block py-2 px-3 bg-transparent  text-black font-semibold hover:text-blue-700"

                                    }}
                                >
                                    Statistics
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/applidJobs"
                                    className={({ isActive }) => {
                                        return isActive ? "block py-2 px-3 text-sm bg-blue-700 rounded font-semibold  text-white"
                                            :
                                            "block py-2 px-3 bg-transparent  text-black font-semibold hover:text-blue-700"

                                    }}
                                >
                                    Applied Jobs
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/blogs"
                                    className={({ isActive }) => {
                                        return isActive ? "block py-2 px-3 text-sm bg-blue-700 rounded font-semibold  text-white"
                                            :
                                            "block py-2 px-3 bg-transparent  text-black font-semibold hover:text-blue-700"

                                    }}
                                >
                                    Blogs
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;