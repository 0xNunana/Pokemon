
import React, { useState } from 'react';
import Image from 'next/image';

import { useTheme } from './ThemeContext';
import { PokemonDetails } from '@/data/types';
import Detail from './Detail';
import { Eye } from './Search';

interface PokecardProps {
  data: PokemonDetails;
  allInfo: PokemonDetails[]
}

const Pokecard: React.FC<PokecardProps> = ({ data ,allInfo}) => {
  const { themeColor } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePokecardClick = () => {
 
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };



  return (
    <div className='relative group my-10' >
      {/* Pokecard content */}
      <div className='bg-white rounded-[20px] border group-hover:border-b-0 group-hover:rounded-b-0 max-sm:w-[150px] w-[300px] max-sm:h-[150px] h-[300px] p-2'>
        <div className='flex justify-center items-center
'>
          <Image src={data.sprites.other.dream_world.front_default || ''} alt={data.name} width={191} height={187} className='absolute max-sm:-top-5 -top-10 object-cover max-sm:w-[120px]' loading='lazy' />
        </div>
        <div className='bg-[#F1F1F1] max-sm:h-[90px] h-[170px] rounded-[14px]' />
        <p className='text-center max-sm:text-sm text-[24px] font-medium absolute max-sm:bottom-4 bottom-12 left-1/2 transform -translate-x-1/2'>{data.name}</p>
      </div>
      {/* Hidden section */}
      <div className='absolute left-0 w-full max-sm:-bottom-[55px] -bottom-10 bg-white border border-t-0 rounded-b-[20px] text-white text-center opacity-0 p-2 transition-opacity duration-300 group-hover:opacity-100 flex justify-between cursor-pointer'>
        <div style={{ background: `${themeColor}` }} className='w-full flex justify-between px-4 py-2 rounded-[14px]'
        onClick={handlePokecardClick}
        >
          <p className='text-sm'>View Pokemon</p>
          <div className='flex justify-center items-center'>
          <Eye/>
          </div>
 
        </div>
      </div>
      {/* DetailModal */}
   
      {isModalOpen && <Detail data={data} closeModal={closeModal} complete={allInfo} />}
    </div>
  );
};

export default Pokecard;
