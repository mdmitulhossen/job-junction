import React from 'react';
import heroImage from '../assets/images/user.png'

const Hero = () => {
    return (
        <div className='h-[600px] flex md:items-end md:justify-end md:align-items-end'>
                <div className='flex  items-center justify-center md:justify-between'>
                    <div className='space-y-4 w-[90%] md:w-1/2 text-center md:text-left'>
                        <h1 className='xl:text-6xl text-5xl font-bold'>
                            One Step <br /> Closer To Your <br /> <span className='bg-gradient-to-r from-indigo-500 to-blue-500 text-transparent bg-clip-text'>Dream Job</span>
                        </h1>
                        <p className='text-[#757575]'>
                            Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                        </p>
                        <button className='btnJob'>
                            Get Start
                        </button>
                    </div>
                    <div className='w-1/2 h-[530px] hidden md:flex  justify-end'>
                        <img className='w-full h-auto ml-0' src={heroImage} alt="" />
                    </div>
                </div>
        </div>
    );
};

export default Hero;