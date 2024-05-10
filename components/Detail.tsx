'use client'
import { PokemonDetails } from '@/data/types';
import React,{useState} from 'react'
import Image from 'next/image'
import StatsSection from './Stats';
import {Arrow }from './Arrow';
import AboutSection from './About';
import SimilarSection from './Similar';


  

const Detail = ({data,closeModal,complete}:{data:PokemonDetails,closeModal:()=>void,complete:PokemonDetails[]}) => {
    const [selectedSection, setSelectedSection] = useState('about');
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center sm:justify-end z-50  max-sm:overflow-scroll'>
    <div className='bg-white max-sm:p-[7px] p-[17px] max-sm:w-[200px] w-[659px] flex flex-col justify-between'>
      <div className='hidden sm:flex relative bg-gradient-to-b from-[#7FCAD1] to-[#3DA0A9] max-sm:h-[300px] h-[340px] max-sm:w-[180px] w-[624px]  rounded-[15px]'>
        <div className=' absolute top-[15px]  sm:left-[15px] max-sm:p-1.5 p-3 bg-white rounded-[15px] max-sm:w-full max-sm:h-10' onClick={closeModal}>
       
   <Arrow />
          </div>
          <Image
            src={data.sprites.other.dream_world.front_default|| ''}
            alt='selected pokemon'
            height={320}
            width={300}
            className='absolute  top-[105px] left-1/2 transform -translate-x-1/2 max-sm:w-[150px]'
            style={{ top: '50%', transform: 'translate(-50%, -50%)' }}
          />
      </div>
      <div className='sm:hidden'>
        <div onClick={closeModal}>
        <Arrow/>
        </div>

        <div className='flex justify-center items-center'>
        <Image
            src={data.sprites.other.dream_world.front_default|| ''}
            alt='selected pokemon'
            height={320}
            width={300}
            className='w-[150px]'
       
          />

        </div>
      </div>

      <div className=' '>
        <p className='font-clash max-sm:text-[20px] text-[48px] font-semibold text-center capitalize'>{data.name}</p>
        {/* Conditionally render sections based on selectedSection */}
        <div className='flex justify-evenly items-center  py-5 
        
        mb-10'>
        {selectedSection === 'about' && <AboutSection profile={data}  />}
            {selectedSection === 'stats' && <StatsSection  base={data}/>}
            {selectedSection === 'similar' && <SimilarSection info={data} complete={complete}/>}
       
        </div>
      </div>

      <div className='flex-end flex justify-center'>
      <ul className=' flex sm:justify-evenly bg-[#E9E9E9] max-sm:p-[2px] p-[8px] cursor-pointer rounded-[60px] items-center max-sm:w-[200px]  w-[428px] font-medium font-general'>
            <li
              className={`max-sm:text-sm max-sm:py-[6px] py-[12px] max-sm:px-[10px] px-[40px] rounded-[60px] ${selectedSection === 'about' ? 'text-black bg-white shadow-md' : ''}`}
              onClick={() => setSelectedSection('about')}
            >
              About
            </li>
            <li
              className={`max-sm:text-sm max-sm:py-[6px] py-[12px] max-sm:px-[10px] px-[40px] rounded-[60px] ${selectedSection === 'stats' ? 'text-black bg-white shadow-md' : ''}`}
              onClick={() => setSelectedSection('stats')}
            >
              Stats
            </li>
            <li
              className={`max-sm:text-sm max-sm:py-[6px] py-[12px] max-sm:px-[10px] px-[40px] rounded-[60px] ${selectedSection === 'similar' ? 'text-black bg-white shadow-md' : ''}`}
              onClick={() => setSelectedSection('similar')}
            >
              Similar
            </li>
          </ul>
      </div>
    </div>
  
  </div>
  )
}

export default Detail