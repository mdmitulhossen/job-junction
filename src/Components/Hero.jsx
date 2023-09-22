import React from 'react';
import heroImage from '../assets/images/user.png'

const Hero = () => {
    return (
        <div className='h-[600px] flex items-end justify-end align-items-end'>
                <div className='flex  items-center justify-between'>
                    <div className='space-y-4 w-1/2'>
                        <h1 className='xl:text-6xl text-5xl font-bold'>
                            One Step <br /> Closer To Your <br /> <span className='bg-gradient-to-r from-indigo-500 to-blue-500 text-transparent bg-clip-text'>Dream Job</span>
                        </h1>
                        <p className='text-[#757575]'>
                            Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                        </p>
                        <button className='py-2 px-4 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold rounded'>
                            Get Start
                        </button>
                    </div>
                    <div className='w-1/2 h-[530px] flex justify-end'>
                        <img className='w-full h-auto ml-40' src={heroImage} alt="" />
                    </div>
                </div>
        </div>
    );
};

export default Hero;