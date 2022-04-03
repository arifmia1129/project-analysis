import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <nav className='flex justify-center items-center font-bold mt-5'>
                <CustomLink className='mr-5 border-b-4 px-8 py-2' to="/">HOME</CustomLink>
                <CustomLink className='mr-5 border-b-4 px-8 py-2' to="/reviews">REVIEWS</CustomLink>
                <CustomLink className='mr-5 border-b-4 px-8 py-2' to="/dashboard">DASHBOARD</CustomLink>
                <CustomLink className='mr-5 border-b-4 px-8 py-2' to="/blogs">BLOGS</CustomLink>
                <CustomLink className='mr-5 border-b-4 px-8 py-2' to="/about">ABOUT</CustomLink>
            </nav>
        </div>
    );
};

export default Header;