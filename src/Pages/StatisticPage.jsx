import React, { useEffect } from 'react';
import ComponentHeader from '../Components/ComponentHeader';
import Hero from '../Components/Hero';
import CategoryCard from '../Components/CategoryCard';
import { useLoaderData, useNavigate } from 'react-router-dom';
import FeatureCard from '../Components/FeatureCard';

const StatisticPage = () => {
    const navigate = useNavigate();
    const { category,jobs } = useLoaderData();
    console.log("FromLoder", category,jobs)

const handleViewAll=()=>{
    navigate('/jobs')
}

    return (
        <div>
            {/* Hero section */}
            <div className="bg-blue-100 max-w-[1920px] mx-auto xl:px-[160px]  lg:px-[100px] md:px-[60px] px-8">
                <Hero />
            </div>

            <div className='max-w-[1920px] mx-auto xl:px-[160px] lg:px-[100px] md:px-[60px] px-8'>


                <div className='mt-16 mb-8'>
                    <ComponentHeader title="Job Category List" />
                </div>

                {/* Job Category List */}
                <div className='mb-10'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
                        {
                            category.map(c => <CategoryCard key={c.id} name={c.category_name} icon={c.logo} availability={c.availability} />)
                        }

                    </div>
                </div>

                {/* Feature section */}

                <div className='mt-16 mb-8'>
                    <ComponentHeader title="Featured Jobs" />
                </div>


                {/* Feature section */}
                <div className='mb-10 grid md:grid-cols-2 grid-cols-1 gap-4'>
                    {
                        jobs.slice(0,4).map(j=> <FeatureCard key={j.id} id={j.id} title={j.job_title} company_name={j.company_name} logo={j.logo} location={j.location} remote_or_onsite={j.remote_or_onsite} job_type={j.job_type} salary={j.salary} />)
                    }
                </div>

                <div className='flex justify-center mb-16'>
                    <button onClick={handleViewAll} className='btnJob'>View All</button>
                </div>
            </div>

        </div>
    );
};

export default StatisticPage;