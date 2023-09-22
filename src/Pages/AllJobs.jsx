import { useLoaderData } from "react-router-dom";
import BreadCrumb from "../Components/BreadCrumb";
import FeatureCard from "../Components/FeatureCard";
import { useEffect, useState } from "react";


const AllJobs = () => {

    const [filterData, setFilterData] = useState([]);
    const { jobs } = useLoaderData();
    console.log(jobs)

    useEffect(() => {
        setFilterData(jobs)
    }, [])


    const handleFilter = (e) => {
        console.log(e.target.value)
        if (e.target.value === 'ALL') {
            setFilterData(jobs)
        }
        else if(e.target.value === 'Remote'){
            const filter = jobs.filter(j => j.remote_or_onsite === 'Remote')
            setFilterData(filter)
        }
        else if(e.target.value === 'Full Time'){
            const filter = jobs.filter(j => j.job_type === 'Full Time')
            setFilterData(filter)
        }
        else if(e.target.value === 'Onsite'){
            const filter = jobs.filter(j => j.remote_or_onsite === 'Onsite')
            setFilterData(filter)
        }
    }


    return (
        <div>
            <div className="">
                <BreadCrumb path="All Jobs" />
            </div>

            <div className="containerJob mt-16">
                {/* Filter */}
                <div className="flex justify-center md:justify-end mb-6">
                    <select onChange={handleFilter} id="countries" className="bg-gray-200 cursor-pointer w-[200px] border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected disabled>Filter By</option>
                        <option value="ALL">ALL</option>
                        <option value="Remote">Remote</option>
                        <option value="Onsite">Onsite</option>
                        <option value="Full Time">Full Time</option>
                    </select>

                </div>
                {/* Feature section */}
                <div className='mb-16 mt-2 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
                    {
                        filterData?.map(j => <FeatureCard key={j.id} id={j.id} title={j.job_title} company_name={j.company_name} logo={j.logo} location={j.location} remote_or_onsite={j.remote_or_onsite} job_type={j.job_type} salary={j.salary} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllJobs;