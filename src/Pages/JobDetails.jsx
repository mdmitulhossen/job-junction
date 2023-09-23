import BreadCrumb from '../Components/BreadCrumb';
import iconMoney from '../assets/icons/money.png'
import iconPhone from '../assets/icons/phone.png'
import iconEmail from '../assets/icons/email.png'
import iconLocation from '../assets/icons/location2.png'
import iconCalender from '../assets/icons/calendar.png'
import { useLoaderData, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';

const JobDetails = () => {
    const [applyBtn, setApplyBtn] = useState(true)
    const { job_description, educational_requirements, experiences, job_responsibility, job_title, salary, contact_information, id } = useLoaderData();
    const navigate = useNavigate();
    console.log(job_description)


    useEffect(() => {
        const appliedJob = JSON.parse(localStorage.getItem('appliedJobId'))
        const duplicate = appliedJob?.find(j => j === id)
        if (duplicate) {
            setApplyBtn(false)
        }
    }, [])

    const handleApply = () => {
        const applied = JSON.parse(localStorage.getItem('appliedJobId'))
        const d = applied?.find(j=>j===id)
        console.log(d)
        if (d) {
            setApplyBtn(false)
            toast.error('Already Applied')
            return
        }
        else if (applied) {
            localStorage.setItem('appliedJobId', JSON.stringify([...applied, id]))
            setApplyBtn(false)
        }
        else {
            localStorage.setItem('appliedJobId', JSON.stringify([id]))
            setApplyBtn(false)
        }

        toast.success('Successfully Applied')
    }

    const handleAppliedJob = () => {    
        navigate("/applidJobs")
    }

    return (
        <div>
            <div className="">
                <BreadCrumb path="Job Details" />
            </div>

            <div className='my-16 containerJob grid grid-flow-col-1 md:grid-cols-2 gap-10'>
                <div className='space-y-4 w-full'>
                    <p className='font-semibold text-[#757575]'>
                        <span className='text-black font-bold'>Job Description:</span>
                        {job_description}
                    </p>
                    <p className='font-semibold text-[#757575]'>
                        <span className='text-black font-bold'>Job Responsibility:</span>
                        {
                            job_responsibility
                        }
                    </p>
                    <p className='text-black font-bold'>Educational Requirements:</p>
                    <p className='font-semibold text-[#757575]'>{educational_requirements}</p>
                    <p className='text-black font-bold'>Experiences:</p>
                    <p className='font-semibold text-[#757575]'>{experiences}</p>
                </div>


                <div className='w-full'>
                    <div className='p-7 bg-blue-200 space-y-4 rounded-md'>
                        <h1 className='font-bold text-xl'>Job Details</h1>
                        <hr />
                        <div className='flex gap-2'>
                            <span>
                                <img className='w-6 h-6' src={iconCalender} alt="" />
                            </span>
                            <span className='font-bold'>Job Title : </span>
                            <span className='font-semibold text-[#757575]'>{job_title}</span>
                        </div>
                        <div className='flex gap-2'>
                            <span>
                                <img className='w-6 h-6' src={iconMoney} alt="" />
                            </span>
                            <span className='font-bold'>Salary : </span>
                            <span className='font-semibold text-[#757575]'>{salary} (Per Month)</span>
                        </div>

                        <h1 className='font-bold text-xl pt-5'>Contact Information</h1>
                        <hr />
                        <div className='flex gap-2'>
                            <span>
                                <img className='w-6 h-6' src={iconPhone} alt="" />
                            </span>
                            <span className='font-bold'>Phone : </span>
                            <span className='font-semibold text-[#757575]'>{contact_information?.phone}</span>
                        </div>
                        <div className='flex gap-2'>
                            <span>
                                <img className='w-6 h-6' src={iconEmail} alt="" />
                            </span>
                            <span className='font-bold'>Email: </span>
                            <span className='font-semibold text-[#757575]'>{contact_information?.email}</span>
                        </div>
                        <div className='flex gap-2'>
                            <span>
                                <img className='w-6 h-6' src={iconLocation} alt="" />
                            </span>
                            <span className='font-bold'>Address: </span>
                            <span className='font-semibold text-[#757575]'>{contact_information?.address}</span>
                        </div>


                    </div>
                    {
                        applyBtn ? <button onClick={handleApply} className='btnJob w-full mt-4'>Apply Now
                        </button>
                        :
                        <button onClick={handleAppliedJob} className='btnJob w-full mt-4'>Applied Jobs
                        </button>
                    }
                </div>
            </div>

            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </div>
    );
};

export default JobDetails;