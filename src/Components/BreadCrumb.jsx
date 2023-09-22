import React from 'react';

const BreadCrumb = ({path}) => {
    return (
        <div className='max-w-[1920px] mx-auto h-[250px] w-full bg-[#f0edf9] flex justify-center items-center'>
            <p className='text-4xl font-bold'>{path}</p>
        </div>
    );
};

export default BreadCrumb;