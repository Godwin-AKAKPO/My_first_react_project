import React from 'react';
import image4 from '../assets/image4.png'

const Products = () => {
    return (
        <div>
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='product'>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                    <div>
                        <img src={image4} alt="" />
                    </div>
                    <div className='md:w-3/5 mx-auto'>
                        <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>How to design your site footer like we did</h2>
                        <p className ='md:w-3/4 text-sm text-neutralGrey mb-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate deleniti deserunt magni recusandae
                        ipsam odit, sapiente laudantium praesentium architecto veritatis maxime natus hic earum obcaecati exercitat
                        ionem ab ad. Quod, labore.</p>
                        <button className='px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4'>Learn more</button>
                    </div>
                </div>
            </div>
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                    <div className='md:w-1/3'></div>
                    <div className='md:w-2/3 mx-auto'>
                        <div>
                            <p className='md:w-4/5 text-sm text-neutralGrey mb-8 leading-7'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In quam unde 
                            delectus? Voluptatibus nobis neque, quas nulla sed pariatur voluptates 
                            adipisci dolorem unde, optio earum impedit excepturi commodi fugiat eos?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis qui
                            praesentium similique nemo blanditiis delectus rerum debitis facere ut
                            non,om</p>
                            <h5 className='text-brandPrimary text-x1 font-semibold mb-2'> Tim Smiyth </h5>
                            <p className='text-base text-neutralGrey mb-8'>British Dragon Boat Racing Association</p>
                            <div>
                                <div className='flex items-center gap-8 flex-wrap'>
                                    <img src="" alt="" className='cursor-pointer' />
                                    <img src="" alt="" className='cursor-pointer' />
                                    <img src="" alt="" className='cursor-pointer' />
                                    <img src="" alt="" className='cursor-pointer' />
                                    <img src="" alt="" className='cursor-pointer' />
                                    <img src="" alt="" className='cursor-pointer' />
                                    <div className='"flex items-center gap-8'>
                                        <a href="/" className='font-bold text-brandPrimary hover:text-neutrale-700'>Meet all customers{" "} 
                                        <svg 
                                            xmlns="https://www.w3.org/2000/svg"
                                            width="17"
                                            height="11"
                                            viewBox="0 0 17 11"
                                            fill ="none"
                                            className ="inline-block ml-2"
                                        />
                                         </a>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
export default Products