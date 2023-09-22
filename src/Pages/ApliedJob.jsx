import React, { useEffect, useState } from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import ApliedJobCard from '../Components/ApliedJobCard';
import { useLoaderData } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const ApliedJob = () => {
    const appliedJobData = useLoaderData();
    const [appliedJob, setAppliedJob] = useState([])
    useEffect(() => {
        setAppliedJob(appliedJobData)
    }  , [])

    const handleRemoveAppliedDetails = (id) => {
        
        const newAppliedJob = appliedJob?.filter(j => j.id !== parseInt(id))

        localStorage.removeItem('appliedJobId')

        localStorage.setItem('appliedJobId', JSON.stringify(newAppliedJob))

        toast.success('Successfully Removed')
        
        setAppliedJob(newAppliedJob)
    }

    return (
        <div>
            <BreadCrumb path="Aplied Job" />

            <div className='my-16 containerJob space-y-8'>
                {

                    appliedJob?.map(j => <ApliedJobCard key={j.id} id={j.id} title={j.job_title} company_name={j.company_name} logo={j.logo} location={j.location} remote_or_onsite={j.remote_or_onsite} job_type={j.job_type} salary={j.salary} handleRemoveAppliedDetails={handleRemoveAppliedDetails}/>)
                }
            </div>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </div>
    );
};

export default ApliedJob;