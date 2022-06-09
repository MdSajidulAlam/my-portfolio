import React from 'react';
import banner from '../../assets/banner.JPG'
import { BsArrowRightShort } from 'react-icons/bs';

const Banner = () => {
    return (
        <div className='mt-[-400px] grid lg:grid-cols-2 sm:grid-cols-1'>
            <div className='w-4/6 mx-auto '>
                <img className='rounded-3xl h-[500px]' src={banner} alt="" />
            </div>
            <div className='flex flex-col justify-center items-start w-4/6'>
                <h2 className='text-5xl text-primary'>- I'm Sajid.</h2>
                <h2 className='text-5xl text-secondary'>Web Developer</h2>
                <p className='text-secondary w-4/5 my-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus doloremque a ipsum placeat dignissimos voluptates aliquam magni ratione non nostrum, nihil, omnis architecto, modi fugit possimus earum laudantium quae eaque.</p>
                <button className='btn btn-outline btn-primary text-secondary my-6 rounded-full'>More About Me <BsArrowRightShort className='text-2xl' /></button>
            </div>
        </div>
    );
};

export default Banner;