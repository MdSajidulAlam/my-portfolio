import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';


const PrimaryButton = () => {
    return (
        <div>
            <button className='btn btn-outline btn-primary text-secondary my-6 rounded-full'>More About Me <BsArrowRightShort className='text-2xl' /></button>
        </div>
    );
};

export default PrimaryButton;