import React from 'react';
import brandIcon1 from '../assets/google.png';
import brandIcon2 from '../assets/netflix.png';
import brandIcon3 from '../assets/airbnb.png';
import brandIcon4 from '../assets/amazon.png';
import brandIcon5 from '../assets/facebook.png';
import brandIcon6 from '../assets/grab.png';
import cardIcon1 from '../assets/cardIcon1.png';
import cardIcon2 from '../assets/cardIcon2.png';
import cardIcon3 from '../assets/cardIcon3.png';
import cardImg1 from '../assets/cardImg1.png';
import cardImg2 from '../assets/cardImg2.png';
import square1 from '../assets/square1.png';
import square2 from '../assets/square2.png';


const About = () => {
  return (
    <div className='max-w-[1360px] px-4 mx-auto my-10'>
        <div className='text-center'>
            <p className='text-2xl my-4'>Trusted by 5,000+ Companies Worldwide</p>
            <div className='grid md:grid-cols-6 grid-cols-3  items-center md:w-[1100px] mx-auto mb-[70px]'>
                <img src={brandIcon1} alt="/" className='w-[100px] p-1'/>
                <img src={brandIcon2} alt="/" className='w-[100px] p-1'/>
                <img src={brandIcon3} alt="/" className='w-[100px] p-1'/>
                <img src={brandIcon4} alt="/" className='w-[100px] p-1'/>
                <img src={brandIcon5} alt="/" className='w-[100px] p-1'/>
                <img src={brandIcon6} alt="/" className='w-[100px] p-1'/>
            </div>
            <div className='md:w-[450px] text-center inline-block items-center'>
                <h3 className='font-bold text-4xl my-4'>Why we are best?</h3>
                <p>eLearn is one powerful online software suite that combines all the tools needed to run a successful school or office</p>
            </div>

            <div className='grid md:grid-cols-3 items-center md:w-[1100px] mx-auto relative top-[100px]'>
                <div className='md:w-[320px] flex flex-col items-center shadow-xl hover:shadow-2xl ease-in-out duration-500 rounded-2xl p-6'>
                    <img src={cardIcon1} alt="/" className='w-[140px]'/>
                    <h3 className='font-bold text-2xl'>Online Billing, Invoicing, & Contracts</h3>
                    <p>Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts</p>
                </div>

                <div className='md:w-[320px] flex flex-col items-center shadow-xl hover:shadow-2xl ease-in-out duration-500 rounded-2xl p-6'>
                    <img src={cardIcon2} alt="/" className='w-[140px]'/>
                    <h3 className='font-bold text-2xl'>Online Billing, Invoicing, & Contracts</h3>
                    <p>Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts</p>
                </div>

                <div className='md:w-[320px] flex flex-col items-center shadow-xl hover:shadow-2xl ease-in-out duration-500 rounded-2xl p-6'>
                    <img src={cardIcon3} alt="/" className='w-[140px]'/>
                    <h3 className='font-bold text-2xl'>Online Billing, Invoicing, & Contracts</h3>
                    <p>Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts</p>
                </div>
            </div>

            <div className='md:w-[600px] text-center inline-block items-center relative top-[180px] my-6'>
                <h3 className='font-bold text-4xl my-4'>What is eLearn?</h3>
                <p>eLearn is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
            </div>

            <div className='grid md:grid-cols-2 md:gap-8 items-center relative top-[180px] md:w-[900px] mx-auto'>
                <div className='text-center '>
                    <img src={cardImg1} alt="/" className='z-0 w-full object-cover '/>
                    <div className='relative bottom-[190px]'>
                        <h3 className='font-bold text-white text-2xl my-4'>FOR INSTRUCTORS</h3>
                        <button className='text-white text-xl border border-white rounded-3xl p-2 hover:bg-pink ease-in duration-300 hover:border-transparent'>Start a Class Today</button>
                    </div>
                </div>

                <div className='text-center '>
                    <img src={cardImg2} alt="/" className='z-0 w-full object-cover '/>
                    <div className='relative bottom-[190px]'>
                        <h3 className='font-bold text-white text-2xl my-4'>FOR STUDENTS</h3>
                        <button className='text-white text-xl border border-white rounded-3xl p-2 hover:bg-pink ease-in duration-300 hover:border-transparent'>Enter access code</button>
                    </div>
                </div>
            </div>

            <div className='grid md:grid-cols-2 gap-8 md:text-start md:w-[1100px] mx-auto relative top-[160px]'>
                <div className='p-4'>
                    <h3 className='font-bold text-2xl my-3'>Everything you can do in a physical classroom, you can do with eLearn</h3>
                    <p>elearn’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
                    <a href="/" className='underline'>Learn more</a>
                </div>

                <div>
                    <img src={square1} alt="/" className='z-0'/>
                    <iframe className='absolute md:top-1 top-[320px] p-4 z-10 md:w-[480px] w-[350px] md:h-[350px] h-[220px]'  src="https://www.youtube.com/embed/Jva7SEg0BpM" title="Uni Vlog🇲🇾USM | Campus tour &amp; productive day| PhD Daily Vlog" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <img src={square2} alt="/" className='relative left-[270px] md:w-[40%] w-[20%] z-0'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About