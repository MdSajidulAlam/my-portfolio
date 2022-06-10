import React from 'react';
import { AiOutlineDownload } from 'react-icons/ai';
import { BsTwitter, BsGithub, BsLinkedin, BsFacebook } from 'react-icons/bs';

const About = () => {
    return (
        <div className='mt-[-400px]'>
            <h2 className='text-primary text-center text-5xl font-extrabold'><span className='text-secondary'>ABOUT</span> ME</h2>
            <div className='mt-12 w-4/6 mx-auto'>
                <h1 className='text-secondary text-2xl font-bold'>PERSONAL INFOS</h1>
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 mt-8 text-lg'>
                    <div >
                        <h1 className='my-2'>Name: <span className='text-secondary font-semibold'>Mohammad Sajidul Alam</span></h1>
                        <h1 className='my-2'>Age: <span className='text-secondary font-semibold'>23 years</span></h1>
                        <h1 className='my-2'>Phone: <span className='text-secondary font-semibold'>+8801826150764</span></h1>
                        <div className='my-2 flex'>
                            <a className=' font-semibold text-3xl mx-3 hover:text-primary' href="https://github.com/MdSajidulAlam" target='_blank' >
                                <BsGithub />
                            </a>
                            <a className=' font-semibold text-3xl mx-3 hover:text-primary' href="https://www.linkedin.com/in/md-sajidul-alam/" target='_blank'>
                                <BsLinkedin />
                            </a>
                            <a className='font-semibold text-3xl mx-3 hover:text-primary' href="https://twitter.com/MdSajidulAlam1" target='_blank'>
                                <BsTwitter />
                            </a>
                            <a className='font-semibold text-3xl mx-3 hover:text-primary' href="https://www.facebook.com/profile.php?id=100010173556202" target='_blank'>
                                <BsFacebook />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h1 className='my-2 '>Nationality: <span className='text-secondary font-semibold'>Bangladeshi</span></h1>
                        <h1 className='my-2'>Address: <span className='text-secondary font-semibold'>Chittagong, Bangladesh</span></h1>
                        <h1 className='my-2'>Email: <span className='text-secondary font-semibold'>mdsajidulalam1245@gmail.com</span></h1>
                        <h1 className='my-2'>Language: <span className='text-secondary font-semibold'>Bangla, English, Hindi</span></h1>
                    </div>
                </div>
                <a href="https://drive.google.com/file/d/11qqah1GnXd8rnKYkIO9RG2R9asO5X_tz/view?usp=sharing" target='_blank'>
                    <button className='w-1/4 btn btn-outline btn-primary text-secondary my-6 rounded-full'>Download Resume <AiOutlineDownload className='text-2xl mx-2' /></button>
                </a>
            </div>
            <div>

            </div>
        </div>
    );
};

export default About;