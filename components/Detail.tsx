'use client'
import { PokemonDetails } from '@/data/types';
import React,{useState} from 'react'
import Image from 'next/image'
import { useTheme } from './ThemeContext';
import {Arrow }from './Arrow';
import Pokecard from './Pokecard';




const AboutSection = ({ profile }: { profile: PokemonDetails }) => {
 
    return (
      <div className='bg-[#D9D9D9]/30 w-full py-10 
      '>
        <h2 className='text-[24px] font-semibold py-2 text-center bg-gradient-to-r from-transparent via-white to-transparent'>About </h2>
        <div className='flex justify-center items-center'>
          <ul className=''>
            <li className='py-2 grid grid-cols-2  gap-10'>
                <p>Height:</p>

              <p className='font-semibold'>{profile.height}</p></li>
            <li className='py-2  grid grid-cols-2  gap-10'>
                Weight: <p className='font-semibold'>{profile.weight}</p></li>
            <li className='py-2  grid grid-cols-2  gap-10'>
              Abilities: <ul>
                {profile.abilities.map((item,i)=>(
                    <li key={i} className='font-semibold capitalize'>{item.ability.name}</li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  const StatsSection = ({base}:{base:PokemonDetails}) => {
    const {themeColor} = useTheme()
    return (
      <div className='bg-[#D9D9D9]/30 w-full py-10 '>
        <h2 className='text-[24px] font-semibold py-2 text-center  bg-gradient-to-r from-transparent  via-white via-50% to-transparent to-100%'>Stats</h2>
        <ul className=' w-[700px]'>
            {base.stats.map((item,i)=>(
                <li key={i}>
<div className='grid grid-cols-3 justify-between text-[20px] space-y-2 gap-2 items-center my-1'>
 
    <p className='capitalize text-end '> {item.stat.name}</p>
  
  <div className=' justify-center flex'>
  <div className="w-[200px] bg-[#CBCBCB]  h-2.5">
            <div
                                className="h-2.5 "
                                style={{
                                  width: `${item.base_stat}%`,
                                  backgroundColor: `${themeColor}`,
                                }}
                              />
            </div>
  </div>
   
<p className='font-semibold text-[16px]'>{item.base_stat}</p>
    </div>
                </li>
            ))}
       
        
         
        </ul>
   
      </div>
    );
  };


  const SimilarSection = ({ info, complete }: { info: PokemonDetails, complete: PokemonDetails[] }) => {
    // Function to filter Pokemon based on types
    const filterPokemonsByTypes = (types: string[]): PokemonDetails[] => {
        return complete.filter(pokemon =>
            types.some(type =>
                pokemon.types.some(pokemonType =>
                    pokemonType.type.name === type
                )
            )
        );
    };

    // Extract the types of the provided PokemonDetails
    const types = info.types.map(type => type.type.name);

    // Filter Pokemon details based on the types of the provided PokemonDetails
    const similarPokemons = filterPokemonsByTypes(types).slice(0, 2); // Limit to 2 similar pokemons

    return (
        <div className='bg-[#D9D9D9]/30 w-full py-10'>
            <h2 className='text-[24px] font-semibold py-2 text-center  bg-gradient-to-r from-transparent  via-white via-50% to-transparent to-100%'>Similar</h2>
            <div className='w-[510px] mx-auto mt-10 '>
                <div className='grid grid-cols-2 gap-3 '>
                    {similarPokemons.map((pokemon, i) => (
                        <div key={i} className='bg-white rounded-[20px] relative  border group-hover:border-b-0 group-hover:rounded-b-0 w-[220px] h-[169px] p-2'>
                        <div className='flex justify-center items-center
                '>
                          <Image src={pokemon.sprites.other.dream_world.front_default || ''} alt={pokemon.name} width={140} height={137} className='absolute -top-10 object-cover' loading='lazy' />
                        </div>
                        <div className='bg-[#F1F1F1] h-[114px] rounded-[14px]' />
                        <p className='text-center text-[24px] font-medium absolute bottom-0 capitalize left-1/2 transform -translate-x-1/2'>{pokemon.name}</p>
                      </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

  

const Detail = ({data,closeModal,complete}:{data:PokemonDetails,closeModal:()=>void,complete:PokemonDetails[]}) => {
    const [selectedSection, setSelectedSection] = useState('about');
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-end z-50'>
    <div className='bg-white p-[17px] w-[659px] flex flex-col justify-between'>
      <div className='relative bg-gradient-to-b from-[#7FCAD1] to-[#3DA0A9] h-[340px] w-[624px]  rounded-[15px]'>
        <div className=' absolute top-[15px] left-[15px] p-3 bg-white rounded-[15px]' onClick={closeModal}>
       
   <Arrow />
          </div>
          <Image
            src={data.sprites.other.dream_world.front_default|| ''}
            alt='selected pokemon'
            height={320}
            width={300}
            className='absolute  top-[105px] left-1/2 transform -translate-x-1/2'
            style={{ top: '50%', transform: 'translate(-50%, -50%)' }}
          />
      </div>

      <div className=' '>
        <p className='font-clash text-[48px] font-semibold text-center capitalize'>{data.name}</p>
        {/* Conditionally render sections based on selectedSection */}
        <div className='flex justify-evenly items-center  py-5 
        
        mb-10'>
        {selectedSection === 'about' && <AboutSection profile={data}  />}
            {selectedSection === 'stats' && <StatsSection  base={data}/>}
            {selectedSection === 'similar' && <SimilarSection info={data} complete={complete}/>}
       
        </div>
      </div>

      <div className='flex-end flex justify-center'>
      <ul className=' flex justify-evenly bg-[#E9E9E9] p-[8px] cursor-pointer rounded-[60px] items-center w-[428px] font-medium font-general'>
            <li
              className={` py-[12px] px-[40px] rounded-[60px] ${selectedSection === 'about' ? 'text-black bg-white shadow-md' : ''}`}
              onClick={() => setSelectedSection('about')}
            >
              About
            </li>
            <li
              className={`py-[12px] px-[40px] rounded-[60px] ${selectedSection === 'stats' ? 'text-black bg-white shadow-md' : ''}`}
              onClick={() => setSelectedSection('stats')}
            >
              Stats
            </li>
            <li
              className={`py-[12px] px-[40px] rounded-[60px] ${selectedSection === 'similar' ? 'text-black bg-white shadow-md' : ''}`}
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