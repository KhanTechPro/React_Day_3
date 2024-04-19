import React, {useEffect} from 'react'
import Logo from '../assets/logo.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
    })
  return (
    <div className='bg-black w-full h-[600px] relative top-[500px]' data-aos="fade-up">
        <div className='max-w-[1360px] px-4 mx-auto my-10'>
            <div className='grid md:grid-cols-2 md:gap-8 items-center relative top-8 md:w-[300px] mx-auto' data-aos="fade-up">
                <div className='md:border md:border-y-0 md:border-l-0 md:border-white p-4'>
                    <img src={Logo} alt="/" />
                </div>
                <div>
                    <h2 className='font-bold text-white'>Virtual Class for Zoom</h2>
                </div>
            </div>

            <div className='md:w-[400px] mx-auto text-center relative top-[100px]' data-aos="fade-up">
                <form action="">
                    <label className='text-white relative bottom-4'>Subscribe to get our Newsletter</label>
                    <input type="email" placeholder='Your Email' className='bg-transparent text-grey border border-gray-100 text-white rounded-3xl px-4 py-2'/>
                    <button className='text-white bg-gradient-to-r from-red-300 to-pink  mx-4 my-4 rounded-3xl px-6 py-2'>Subscribe</button>
                </form>

                <div className='md:flex justify-between items-center text-gray-400 text-center md:w-[350px] mx-auto relative top-12'>
                    <p>Careers </p>
                    <p className='md:border md:border-white md:border-y-0 px-4 py-4'> Privacy Policy </p>
                    <p> Terms Conditions</p>
                </div>
                <p className='text-gray-400 text-center mx-auto relative top-[60px]'>© 2021 Class Technologies Inc. </p>
            </div>
        </div>
    </div>
  )
}

export default Footer