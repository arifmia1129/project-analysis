import React from 'react';
import { StarIcon } from '@heroicons/react/solid'


const Review = ({ review }) => {
    const { name, comment } = review;
    return (
        <div className='border-4 rounded-lg p-5 m-5'>
            <a className='border-b-4 p-1 border-blue-300' href="/">{name}</a>
            <p className='my-5 border-l-4 p-1 border-blue-300 pl-3'>{comment}.</p>
            <hr />
            <div className='flex justify-center items-center mt-3 text-orange-600'>
                <StarIcon className='h-6 w-6'></StarIcon>
                <StarIcon className='h-6 w-6'></StarIcon>
                <StarIcon className='h-6 w-6'></StarIcon>
                <StarIcon className='h-6 w-6'></StarIcon>
                <StarIcon className='h-6 w-6'></StarIcon>
            </div>
        </div>
    );
};

export default Review;