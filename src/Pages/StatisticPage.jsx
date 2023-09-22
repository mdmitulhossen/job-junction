import React from 'react';
import ComponentHeader from '../Components/ComponentHeader';
import Hero from '../Components/Hero';

const StatisticPage = () => {
    return (
        <div>
            {/* Hero section */}
            <div className="bg-[#f0edf9] max-w-[1920px] mx-auto xl:px-[160px] lg:px-[130px] md:px-[100px] px-8">
                <Hero />
            </div> 
         
            <div className='mt-16 mb-8'>
                <ComponentHeader title="Job Category List" /> 
            </div>

            {/* Job Category List */}
            

        </div>
    );
};

export default StatisticPage;