
import locationIcon from "../assets/icons/Location.png"
import doller from "../assets/icons/money.png"
import { useNavigate } from 'react-router-dom';


const ApliedJobCard = ({id,title,company_name,logo,location,remote_or_onsite,job_type,salary,handleRemoveAppliedDetails}) => {
    const navigate = useNavigate();
    const handleViewAppliedDetails = (id) => {  
        navigate(`/job/${id}`)
    }

 
    return (
        <div>
            <div className='p-7 border rounded-md flex justify-between flex-wrap gap-4'>
                <div className='flex gap-6 flex-wrap' >
                    <div className='bg-gray-200  p-4 flex items-center rounded-md'>
                        <img className='w-[200px]' src={logo} alt="" />
                    </div>
                    <div className='space-y-2'>
                        <h1 className='text-xl font-bold'>{title}</h1>
                        <p className='font-semibold text-[#757575]'>{company_name}</p>

                        <div className="flex gap-4">
                            <p className="font-semibold border-2 border-blue-300 text-blue-600 px-2  rounded-md">{remote_or_onsite}</p>
                            <p className="font-semibold border-2 border-blue-300 text-blue-600 px-2  rounded-md">{job_type}</p>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                            <span className="flex gap-1"><img src={locationIcon} alt="" /><span>{location}</span></span>
                            <span className="flex gap-1"><img src={doller} alt="" /><span>Salary : {salary}</span></span>
                        </div>
                    </div>

                </div>
                <div className='flex justify-center items-center gap-2'>
                    <button onClick={()=>handleViewAppliedDetails(id)} className='btnJob'>View Details</button>
                    <button onClick={()=>handleRemoveAppliedDetails(id)} className='btnJob'>Remove</button>
                </div>
            </div>
        </div>
    );
};

export default ApliedJobCard;