'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import ThemeModal from './ThemeModal';
import { useTheme } from './ThemeContext';
import { Search2 } from './Search';


const Navigation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { themeColor } = useTheme();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);


  };
 


  

  return (
    <header className='shadow-lg sticky top-0 z-50 bg-white'>
      <div className='mx-auto max-w-screen-2xl relative flex justify-between items-center max-sm:h-[50px] h-[80px] px-3'>
        <Link href='/'>
          <div className='flex items-center  absolute  top-[12px] max-sm:left-[5px] left-[39px]'>
            <Image src='/home.png' alt='Home logo' width={130} height={84} className='max-sm:w-[70px]' />
          </div>
          <p className='absolute max-sm:left-[75px] left-[181px] max-sm:top-[15px] top-[50%] max-sm:text-[16px] text-[24px] font-semibold leading-[30px] font-clash'>
            Poke<span style={{color :`${themeColor}`}}>book</span>
          </p>
        </Link>

        <div className='hidden md:flex'>
          <form className='md:w-[200px] lg:w-[440px] rounded-[30px] border border-[#E1E1E1] flex py-[12px] pl-[20px] pr-[32px] gap-[10px] shadow-md'>
<Search2/>
            <input type='text' placeholder='Enter pokemon name' className='w-full outline-none' />
          </form>
        </div>

        <div className='border rounded-full border-[#868686] max-sm:h-[25px] h-[45px]  max-sm:w-[25px] w-[45px] items-center justify-center flex' onClick={openModal}>
          <div className=' rounded-full max-sm:h-[20px] h-[35px]  max-sm:w-[20px] w-[35px]' style={{background: `${themeColor}`}} />
        </div>
      </div>

      {isModalOpen && <ThemeModal closeModal={closeModal} />}
    </header>
  );
};

export default Navigation;
