import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='mt-10 mx-20'>
            <div className='pb-20'>
                <h1 className='text-6xl font-bold left-20 absolute tracking-widest font-mono'><span className='text-sky-500'>Product</span> <span className='text-orange-400'>Analyst</span></h1>
            </div>
            <br />
            <div className='grid grid-cols-2'>
                <div className='my-auto'>
                    <h1 className='text-4xl font-bold text-purple-700'>Perfect and Best Book for You</h1>
                    <br />
                    <p>Ever wondered if there's a practical way to lead a productive lifestyle that combines the best of Islamic tradition and modern psychology and science? In The Productive Muslim, Mohammed Faris, the founder of ProductiveMuslim.com, provides this practical framework that helps urban global Muslims lead a productive lifestyle – spiritually, physically and socially.

                        Combining his love for Islam with modern productivity techniques, in this book, Mohammed will teach you:

                        How to spiritually book your productivity

                        How to manage your sleep, nutrition, and fitness

                        How to be socially productive outside your home and community

                        how to manage your focus in an age of distractions

                        How to build productive habits and routines

                        How to manage your time and invest in your hereafter

                        How to be productive during Ramadan</p>
                    <button className='my-5 border-4 px-5 py-2 border-red-300 font-bold rounded-xl hover:bg-red-500 hover:text-white'><a href='https://www.amazon.com/Productive-Muslim-Where-Faith-Productivity/dp/1905837380' >About This!</a></button>
                </div>
                <div className='flex justify-center items-center '>
                    <img className='w-1/2 rounded-lg' src="content.jpg" alt="" />
                </div>
            </div>
            <div className='my-10'>
                <h3 className='text-3xl text-center font-bold text-blue-900'>Customer Reviews</h3>

                <div className='grid grid-cols-3 my-5'>
                    {
                        reviews.slice(0, 3).map(review => <Review
                            key={review.review}
                            review={review}
                        ></Review>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;