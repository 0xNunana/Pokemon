'use client'
import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeModal = ({ closeModal }: { closeModal: () => void }) => {
  const { setThemeColor } = useTheme(); // Accessing the setThemeColor function from the context

  const handleColorSelect = (color: string) => {
    setThemeColor(color); // Update the theme color using the setThemeColor function
    closeModal(); // Close the modal
  };

  return (
    <div className='fixed font-clash top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50' onClick={closeModal}>
      <div className='bg-[#EBEBEB] rounded-[32px] max-sm:w-[200px] w-[427px] max-sm:h-[170px] h-[263px]'>
        <div className='h-[57px] rounded-t-[32px] bg-white flex justify-center items-center'>
          <h2 className='max-sm:text-xl text-[24px] text-center font-semibold'>Choose Theme</h2>
        </div>
        <div className=' max-sm:h-[100px] h-[206px] flex items-center justify-center gap-4 px-4'>
          <div className={`max-sm:h-[50px] h-[88px] max-sm:w-[50px] w-[88px] border-2 border-black rounded-full items-center flex justify-center`} onClick={() => handleColorSelect('#E85382')}>
            <div className='bg-pokepink rounded-full max-sm:h-[45px] h-[74px] max-sm:w-[45px] w-[74px]' />
          </div>
          <div className={` max-sm:h-[50px] h-[88px] max-sm:w-[50px] w-[88px] border-2 border-black rounded-full items-center flex justify-center`} onClick={() => handleColorSelect('#39BADF')}>
            <div className='bg-pokeblue rounded-full max-sm:h-[45px] h-[74px] max-sm:w-[45px] w-[74px]' />
          </div>
          <div className={` max-sm:h-[50px] h-[88px] max-sm:w-[50px] w-[88px] border-2 border-black rounded-full items-center flex justify-center`} onClick={() => handleColorSelect('#E1A725')}>
            <div className='bg-pokegold rounded-full max-sm:h-[45px] h-[74px] max-sm:w-[45px] w-[74px]' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeModal;
