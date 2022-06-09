import React from 'react';
import { FaHome } from 'react-icons/fa';
import { BsPersonFill, BsInboxesFill } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import { AiFillMessage } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <aside class="w-40 mt-12 ml-auto " aria-label="Sidebar">
            <div class="overflow-y-auto py-4 px-3">
                <div class="space-y-2">
                    <Link to='/'>
                        <div className=' hover:bg-primary text-secondary rounded-full '>
                            <p className='p-5 text-3xl'> <FaHome className='' /></p>
                        </div>
                    </Link>
                    <Link to='/about'>
                        <div className=' hover:bg-primary text-secondary rounded-full '>
                            <p className='p-5 text-3xl'> <BsPersonFill /></p>
                        </div>
                    </Link>
                    <div className=' hover:bg-primary text-secondary rounded-full '>
                        <p className='p-5 text-3xl'> <BsInboxesFill /></p>
                    </div>
                    <div className=' hover:bg-primary text-secondary rounded-full '>
                        <p className='p-5 text-3xl'> <GrMail /></p>
                    </div>
                    <div className=' hover:bg-primary text-secondary rounded-full '>
                        <p className='p-5 text-3xl'> <AiFillMessage /></p>
                    </div>
                </div>
            </div>
        </aside>

    );
};

export default Navbar;