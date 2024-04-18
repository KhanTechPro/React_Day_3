import React, {useState} from 'react';
import Logo from '../assets/logo.png';
import heroImg from '../assets/heroImg.png';
import comment1 from '../assets/comment1.png';
import comment2 from '../assets/comment2.png';
import comment3 from '../assets/comment3.png';
import progressIcon from '../assets/progressIcon.png'
import { AiOutlineClose, AiOutlineMenu, AiFillPlayCircle } from "react-icons/ai";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
      setNav(!nav);
  }
  return (
    <div className='bg-lightPink h-[700px] md:rounded-b-[20%] '>
        <div className="flex justify-between items-center h-24 max-w-[1360px] px-4 mx-auto bg-lightPink">
            <img src={Logo} alt='/'/>
            <ul className='hidden md:flex justify-between items-center gap-8'>
                <a href="/"><li className='font-medium hover:text-pink duration-300'>Home</li></a>
                <a href="/"><li className='font-medium hover:text-pink duration-300'>Careers</li></a>
                <a href="/"><li className='font-medium hover:text-pink duration-300'>Blog</li></a>
                <a href="/"><li className='font-medium hover:text-pink duration-300'>About Us</li></a>
                <buttun className='bg-white cursor-pointer px-[60px] py-[10px] rounded-[80px] text-center hover:bg-pink ease-in duration-300 '>Log In</buttun>
                <buttun className='bg-black cursor-pointer px-[60px] py-[10px] rounded-[80px] text-white text-center hover:bg-pink ease-in duration-300 '>Sign Up</buttun>
            </ul>

            <div onClick={handleNav} className='block md:hidden'>
              {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
            </div>

            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full bg-lightPink ease-in-out duration-500 mx-3 my-2 z-10' : 'fixed left-[-100%]'}>
                <img src={Logo} alt='/'/>
                <ul className='p-4'>
                    <a href="/"><li className='font-medium hover:text-pink duration-300 py-2'>Home</li></a>
                    <a href="/"><li className='font-medium hover:text-pink duration-300 py-2'>Careers</li></a>
                    <a href="/"><li className='font-medium hover:text-pink duration-300 py-2'>Blog</li></a>
                    <a href="/"><li className='font-medium hover:text-pink duration-300 py-2'>About Us</li></a>
                </ul>
            </div>

        </div>

        <div className='grid md:grid-cols-2 max-w-[1360px] px-4 mx-auto relative md:top-12'>
          <div className='my-[80px]'>
            <h1 className='font-bold title md:text-6xl text-4xl'>Learn New Skill Gain More Education</h1>
            <p className='py-5 w-[340px]'>eLearn is an interesting platform that will tech you in more an interactive way</p>
            <div className='md:flex md:justify-start gap-4 items-center text-center my-4'>
              <button className='bg-pink cursor-pointer px-[60px] h-[45px] rounded-[80px] text-white text-center hover:bg-black ease-in duration-300'>Join for free</button>
              <AiFillPlayCircle className='md:text-5xl text-6xl hover:text-pink ease-in duration-300 cursor-pointer block'></AiFillPlayCircle>
              <button>Watch how it works</button>
            </div>
          </div>

          <div className='relative md:top-[35px] invisible md:visible'>
            <img src={heroImg} alt="/" className=' z-0' />
            <img src={comment1} alt="/" className='w-[200px] absolute top-[100px] left-8'/>
            <img src={comment2} alt="/" className='w-[240px] absolute bottom-[40px] left-8'/>
            <img src={comment3} alt="/" className='w-[240px] absolute bottom-[160px] right-2'/>
            <img src={progressIcon} alt="/" className='w-[120px] absolute top-[100px] right-10'/>
          </div>
        </div>
    </div>
  )
}

export default Header;