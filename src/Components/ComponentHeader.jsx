import React from 'react';

const ComponentHeader = ({title}) => {
    return (
        <div className='text-center space-y-4'> 
            <h1 className='text-4xl font-bold'>{title}</h1>
            <p className='text-[#757575] font-semibold'>Explore thousands of job opportunities with all the  information you need.<br/> Its your future</p>
        </div>
    );
};

export default ComponentHeader;