import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='grid grid-cols-3 mx-20 my-10'>
            {
                reviews.map(review => <Review
                    key={review.review}
                    review={review}
                ></Review>)
            }
        </div>
    );
};

export default Reviews;