import React from 'react';
import test from "../assets/icons/creative.png"

const CategoryCard = ({icon,name,availability}) => {
    return (
        <div className='p-10 space-y-4 w-full bg-blue-50 rounded-md'>
           <div className='bg-blue-200 rounded-md w-[70px] h-[70px] flex justify-center items-center'>
               <img src={icon} alt="" />
            </div> 
           <p className='text-xl font-bold'>{name}</p>
           <p className='font-semibold text-[#757575]'>{availability}</p>
        </div>
    );
};

export default CategoryCard;