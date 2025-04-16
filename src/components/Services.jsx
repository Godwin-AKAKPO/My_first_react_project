import React from 'react';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';
import icon5 from '../assets/icon5.png';
import icon6 from '../assets/icon6.png';
import icon9 from '../assets/icon9.png';
import icon7 from '../assets/icon7.png';
import icon8 from '../assets/icon8.png';

const Services = () => { 
    const services = [
        {id: 1, title: "Menbership Organisations", description: "Our menbership management software provides full automation of menbership renewals and payments", image:"/src/assets/icon7.png"}, 
        {id: 2, title: "National  Associations", description: "Our menbership management software provides full automation of menbership renewals and payments", image: "/src/assets/icon8.png"}, 
        {id: 3, title: "Club And Groups", description: "Our menbership management software provides full automation of menbership renewals and payments", image: "/src/assets/icon4.png"}, 
    ]
    return (
        <div className="md:px-14 px-4 py-16 max-w-screen-2x1 mx-auto" id='service'>
            <div className='text-center my-8'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Our clients</h2>
                <p className='text-neutralGrey'>We have been working with some Fortune 500+ cleints</p>
                <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
                    <img src={icon2} alt="" className="w-8 h-8"/>
                    <img src={icon9} alt="" className="w-8 h-8"/>
                    <img src={icon3} alt="" className="w-8 h-8"/> 
                    <img src={icon1} alt="" className="w-8 h-8"/>
                    <img src={icon5} alt="" className="w-8 h-8"/>
                    <img src={icon6} alt="" className="w-8 h-8"/>
                    <img src={icon4} alt="" className="w-8 h-8"/>
                </div>
            </div>

            <div className='mt-20 md:w-1/2 mx-auto text-center'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'> Manage your entire community in a single system</h2>
                <p className='text-neutralGrey'>Who is Nextcent suitable for ?</p>
            </div>
            <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 gird-cols-1 md:w-11/12 mx-auto gap-12'>
                {
                    services.map(services => <div key = {services.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:d-80 rounded-md shadow cursor-pointer hower:-traslate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full '>
                        <div>
                            <div className='bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-t1-3x1 rounded-br-3x1'><img src={services.image} alt="" className="-m1-5" /></div>
                            <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>{services.title}</h4>
                            <p className='text-sm text-neutralDGrey'>{services.description}</p>
                        </div>
                    </div> )
                }
            </div>
        </div>
    );
}
export default Services