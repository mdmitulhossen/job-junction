import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
    const { status, data, statusText } = error
    console.log(error)
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='flex flex-col gap-4 border-2 border-red-200 p-5 items-center'>
                <h1 className='text-4xl text-lime-700 bg-gray-200 px-4 py-1 rounded-md'>Ooops, Error....</h1>
                <p>{data}</p>
                <p>Status Code: {status}</p>
                <p className='text-2xl text-purple-400 font-bold'> {statusText}</p>
            </div>
        </div>
    );
};

export default ErrorPage;