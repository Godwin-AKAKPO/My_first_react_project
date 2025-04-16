import React from 'react';
import img2 from '../assets/img2.png';
import ic1 from '../assets/ic1.png';
import ic2 from '../assets/ic2.png';
import ic3 from '../assets/ic3.png';
import ic4 from '../assets/ic4.png';


const About = () => {
    return (
        <div>
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='about'>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                    <div>
                        <img src={img2} alt="" />
                    </div>
                    <div className='md:w-3/5 mx-auto'>
                        <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>The unseen of spending three years at Pixelgrade</h2>
                        <p className ='md:w-3/4 text-sm text-neutralGrey mb-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate deleniti deserunt magni recusandae
                        ipsam odit, sapiente laudantium praesentium architecto veritatis maxime natus hic earum obcaecati exercitat
                        ionem ab ad. Quod, labore.</p>
                        <button className='px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4'>Learn more</button>
                    </div>
                </div>
            </div>
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSliver py-16'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-2'>
                    <div className='md:w-1/2'>
                        <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3'>Helping a local <span className='text-brandPrimary'>business reinvent itself</span> </h2>
                        <p className =''>We reached here with our hard work and dedication</p>
                    </div>
                    <div  className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
                        <div className='space-y-8'>
                            <div className='flex items-center gap-4'>
                                <img src={ic4} alt="" className="w-8 h-8 object-cover"/>
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>2,245,341</h4>
                                    <p>Menbers</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src={ic3} alt="" className="w-8 h-8 object-cover"/>
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>46,328</h4>
                                    <p>Clubs</p>
                                </div>
                            </div>
                        </div>
                        <div className='space-y-8'>
                            <div className='flex items-center gap-4'>
                                <img src={ic2} alt="" className="w-8 h-8 object-cover" />
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>828,867</h4>
                                    <p>Event Bookings</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src={ic1} alt="" className="w-8 h-8 object-cover"/>
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>1,926,436</h4>
                                    <p>Payments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;