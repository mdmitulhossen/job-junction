import test from "../assets/logo/google.png"
import locationIcon from "../assets/icons/Location.png"
import doller from "../assets/icons/money.png"
import { useNavigate } from "react-router-dom";
const FeatureCard = ({id,title,company_name,logo,location,remote_or_onsite,job_type,salary}) => {
    const navigate = useNavigate();
     const handleViewDetails = (id) => {
        navigate(`/job/${id}`)
     }
    return (
        <div className="w-full p-10 border border-[#E8E8E8] rounded-md">
            <div className="space-y-3">
                <img src={logo} alt="" />
                <p className="text-xl font-bold">{title}</p>
                <p className="text-[#757575] font-semibold">{company_name}</p>


                <div className="flex gap-4">
                    <p className="font-semibold border-2 border-blue-300 text-blue-600 px-2  rounded-md">{remote_or_onsite}</p>
                    <p className="font-semibold border-2 border-blue-300 text-blue-600 px-2  rounded-md">{job_type}</p>
                </div>
                <div className="flex gap-2 flex-wrap">
                    <span className="flex gap-1"><img src={locationIcon} alt="" /><span>{location}</span></span>
                    <span className="flex gap-1"><img src={doller} alt="" /><span>Salary : {salary}</span></span>
                </div>

                <button onClick={()=>handleViewDetails(id)} className="btnJob">View Details</button>
            </div>
        </div>
    );
};

export default FeatureCard;