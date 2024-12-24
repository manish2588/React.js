import React from 'react';

const Card = ({ name, email,onclick}) => {
    return (
        <div className=" w-full  box-border bg-blue-300 shadow-lg rounded-lg overflow-hidden border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="p-4 box-border">
                <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
                <p className="mt-2 text-gray-600">
                 Email: <a href={`mailto:${email}`} className="text-blue-500 hover:underline">{email}</a>
                </p>
                <div className='flex gap-4 mt-2'>
                <button className='p-2 bg-gray-600 text-white hover:scale-105 hover:shadow-xl ' onClick={onclick}> Update</button>
                <button   className='p-2 bg-gray-600 text-white hover:scale-105 hover:shadow-xl ' onClick={onclick}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Card;