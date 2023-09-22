import React, { useEffect } from 'react';
import ComponentHeader from '../Components/ComponentHeader';
import Hero from '../Components/Hero';
import CategoryCard from '../Components/CategoryCard';
import { useLoaderData } from 'react-router-dom';

const StatisticPage = () => {
    const {category} = useLoaderData();
    console.log("FromLoder",category)



    return (
        <div>
            {/* Hero section */}
            <div className="bg-blue-100 max-w-[1920px] mx-auto xl:px-[160px] lg:px-[130px] md:px-[100px] px-8">
                <Hero />
            </div> 
         
            <div className='mt-16 mb-8'>
                <ComponentHeader title="Job Category List" /> 
            </div>

            {/* Job Category List */}
            <div className='max-w-[1920px] mx-auto xl:px-[160px] lg:px-[130px] md:px-[100px] px-8 mb-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
                    {
                       category.map(c=> <CategoryCard key={c.id} name={c.category_name} icon={c.logo} availability={c.availability}/>)
                    }
                    
                </div>
            </div>

        </div>
    );
};

export default StatisticPage;