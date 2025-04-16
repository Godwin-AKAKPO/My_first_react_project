import React from 'react';
import image5 from '../assets/image5.jpg';


const Blog = () => {
    const blogs = [
        {id: 1, title : "Creating Streamlined Safeguarding Processes with OneRen", image: "/src/assets/image5.jpg"},
        {id: 2, title : "What are your safeguarding responsabilities and how can you mange  them ?", image: "/src/assets/image8.jpeg"},
        {id: 3, title : "Revamping the MenberShip Model with Tristhlon Australia", image: "/src/assets/image7.jpeg"},
    
    ]   
    return (
        <div className='px-4 lg:px-14 max-w-screen-2x1 mx-auto my-12' id='testimonial'>
            <div className='text-center md:w-1/2 mx-auto'>
                <h2 className='text-4xl text-naturalDGrey font-semibold mb-4'>Caring is the new marketing</h2>
                <p>The Nexcent blog is the best place to read about the latest mendership insights, trends and more. See who is joining the community,read abouyt how our community are increasing their menbership income and lots more</p>
            </div>
            <br />
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid-cols-1  gap-8 items-center justify-between'>
                {
                    blogs.map(blog => <div key={blog.id} className='mx-auto relative mb-12 cursor-pointer'>
                        <img src={blog.image} alt=""  className=' w-78 h-74 hover:scale-95 transition-all duration-300'/>
                        <div className='text-center px-4 py-8 bg-white shadow-1g rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12'>
                            <h3 className='mb-3 text-neutralGrey font-semibold'>{blog.title}</h3>
                            <div className='"flex items-center justify-center gap-8'>
                                <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700'>Readmore{" "} 
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
                        
                    </div>)
                }
            </div>
            
        </div>
    );
};

export default Blog;