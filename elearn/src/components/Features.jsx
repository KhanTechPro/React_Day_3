import React from 'react';
import featureImg from '../assets/featureImg.svg';
import featureIcon1 from '../assets/featureIcon1.png';
import featureIcon2 from '../assets/featureIcon2.png';
import featureIcon3 from '../assets/featureIcon3.png';
import student from '../assets/student.png';
import assigment from '../assets/assigment.png';
import gradeBook from '../assets/gradeBook.png';
import discuss from '../assets/discuss.png'

const Features = () => {
  return (
    <div className='max-w-[1360px] px-4 mx-auto my-10'>
        <div className='text-center'>
            <div className='text-center inline-block items-center relative top-[200px]'>
                <h3 className='font-bold text-4xl my-4'>Our Features</h3>
                <p>This very extraordinary feature, can make learning activities more efficient</p>
            </div>

            <div className='grid md:grid-cols-3 items-center p-4 md:w-[1200px] mx-auto relative md:top-[400px] top-[300px]'>
                <div className='md:w-[600px]'>
                    <img src={featureImg} alt="/" className=''/>
                </div>

                <div className='md:w-[600px] md:relative md:left-[300px]'>
                    <h3 className='font-bold md:text-3xl text-2xl md:text-start md:w-[400px]'>A user interface designed for the classroom</h3>
                    <div className='grid md:grid-cols-2 items-center text-start my-6'>
                        <img src={featureIcon1} alt="/" className='rounded-2xl p-3 shadow-xl'/>
                        <p className='md:relative md:right-[70%]'>Teachers don’t get lost in the grid view and have a dedicated Podium space.</p>
                    </div>
                    <div className='grid md:grid-cols-2 items-center text-start my-6'>
                        <img src={featureIcon2} alt="/" className='rounded-2xl p-3 shadow-xl'/>
                        <p className='md:relative md:right-[70%]'>Teachers don’t get lost in the grid view and have a dedicated Podium space.</p>
                    </div>
                    <div className='grid md:grid-cols-2 items-center text-start my-6'>
                        <img src={featureIcon3} alt="/" className='rounded-2xl p-3 shadow-xl'/>
                        <p className='md:relative md:right-[70%]'>Teachers don’t get lost in the grid view and have a dedicated Podium space.</p>
                    </div>
                </div>
            </div>

            <div className='grid md:grid-cols-2 gap-8 md:text-start md:w-[1100px] mx-auto relative md:top-[400px] top-[200px] '>
                <div className='p-4 relative top-[100px] my-12'>
                    <h3 className='font-bold text-3xl my-3 md:w-[300px]'>Tools For Teachers And Learners</h3>
                    <p className='md:w-[350px]'>Class has a dynamic set of teaching tools built to be deployed and used during class.
                       Teachers can handout assignments in real-time for students to complete and submit.  
                    </p>
                </div>
                <div className='my-12'>
                    <img src={student} alt="/" />
                </div>
            </div>

            <div className='grid md:grid-cols-3 items-center p-4 md:w-[1200px] mx-auto relative md:top-[400px] top-[300px]'>
                <div className='md:w-[600px]'>
                    <img src={assigment} alt="/" className=''/>
                </div>

                <div className='md:w-[600px] md:relative md:left-[280px] md:bottom-[100px] md:text-start'>
                    <h3 className='font-bold md:text-3xl text-2xl md:text-start md:w-[400px]'>Assignments, Quizzes, Tests every week</h3>
                    <p className='md:w-[360px] my-4'>Easily launch live assignments, quizzes, and tests.
                       Student results are automatically entered in the online gradebook.
                    </p>
                </div>
            </div>

            <div className='grid md:grid-cols-2 gap-8 md:text-start md:w-[1100px] mx-auto relative md:top-[400px] top-[200px] '>
                <div className='p-4 relative top-[100px] my-12'>
                    <h3 className='font-bold text-3xl my-3 md:w-[300px]'>Class Management Tools for Educators</h3>
                    <p className='md:w-[400px]'>Class provides tools to help run and manage the class such as Class Roster, 
                    Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.
                    </p>
                </div>
                <div className='my-12'>
                    <img src={gradeBook} alt="/" />
                </div>
            </div>

            <div className='grid md:grid-cols-3 items-center p-4 md:w-[1200px] mx-auto relative md:top-[450px] top-[300px]'>
                <div className='md:w-[600px]'>
                    <img src={discuss} alt="/" className=''/>
                </div>

                <div className='md:w-[600px] md:relative md:left-[280px] md:bottom-[50px] md:text-start'>
                    <h3 className='font-bold md:text-4xl text-3xl md:text-start md:w-[320px]'>One-on-One Discussions Class</h3>
                    <p className='md:w-[360px] my-4'>Teachers and teacher assistants can talk with students privately without
                     leaving the Zoom environment.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features