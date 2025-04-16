import React from 'react';

const Newsletter = () => {
    return (
        <div className='px-54 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
            <div className='flex items-center justify-center lg:w-3/5 mx-auto'>
                <div className='text-center'>
                    <h2 className=' lg:text-5xl text-3xl  text-neutral-800 font-semiblod mb-6  lg:leading-snug'>
                        Pellentesque suscipit fringilla libero eu
                    </h2>
                    <div className='flex items-center justify-center gap-8'>
                        <button className='px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4'>Get a Demo</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Newsletter;