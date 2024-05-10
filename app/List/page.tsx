'use client'
import React, { useEffect, useState } from 'react';
import Pokecard from '@/components/Pokecard';
import { useTheme } from '@/components/ThemeContext';
import { PokemonDetails, PokemonList } from '@/data/types';
import { Left, Right } from '@/components/Arrow';

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const { themeColor } = useTheme();
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetcher = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=500');
        const data: PokemonList = await response.json();

        const detailsPromises = data.results.map(async (poke) => {
          const id = parseInt(poke.url.split('/').slice(-2)[0]);
          const detailResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
          const detailData = await detailResponse.json();

          return {
            id,
            name: detailData.name,
            abilities: detailData.abilities,
            height: detailData.height,
            weight: detailData.weight,
            stats: detailData.stats,
            sprites: detailData.sprites,
            types: detailData.types
          };
        });

        const details = await Promise.all(detailsPromises);
        setPokemonDetails(details);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
        setLoading(false);
      }
    };

    fetcher();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = pokemonDetails.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(pokemonDetails.length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const changeItemsPerPage = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setItemsPerPage(parseInt(e.target.value));

  // Function to generate an array of visible pages
  const getVisiblePages = () => {
    const visiblePageCount = 6; // Number of pages to show at a time
    const visiblePages = [];
    const halfVisible = Math.floor(visiblePageCount / 2);

    let startPage = currentPage - halfVisible;
    if (startPage <= 0) {
      startPage = 1;
    }

    let endPage = startPage + visiblePageCount - 1;
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - visiblePageCount + 1);
    }

    for (let page = startPage; page <= endPage; page++) {
      visiblePages.push(page);
    }

    return visiblePages;
  };

  // Function to render loading cards
  const renderLoadingCards = () => {
    const loadingCards = [];
    for (let i = 0; i < itemsPerPage; i++) {
      loadingCards.push(
        <div className="w-[300px] h-[300px] bg-white border shadow-md rounded-lg flex justify-center p-2" key={i}>
      <div className='h-[150px] w-[280px] bg-[#F1F1F1] rounded-lg'/>
        
   
        </div>
      );
    }
    return loadingCards;
  };

  return (
    <div className="bg-main font-clash min-h-screen">
      <div className="max-w-screen-xl mx-auto py-10">
        <div className="flex flex-wrap justify-center gap-5">
          {loading ? (
            renderLoadingCards()
          ) : (
            currentItems.map((poke, i) => (
              <div className="" key={i}>
                <Pokecard data={poke} allInfo={pokemonDetails}/>
              </div>
            ))
          )}
        </div>

        {/* Pagination */}
        <div className="max-w-screen-2xl mx-auto my-16 flex flex-wrap justify-between px-5">
          <ul className="flex gap-4">
            <li
              className={`cursor-pointer font-medium text-[24px] max-sm:p-2 max-sm:mb-3 ${
                currentPage === 1 ? 'hidden' : ''
              } bg-[#E1E1E1] rounded-[8px]  w-[40px] flex justify-center items-center`}
              onClick={() => paginate(currentPage - 1)}
            >
            <Left/>
            </li>
            {/* Render page numbers */}
            <div className='hidden md:flex gap-2'>
            {getVisiblePages().map((page) => (
              <li
                key={page}
                style={{
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  fontSize: '24px',
                  backgroundColor: currentPage === page ? themeColor : '#E1E1E1',
                  color: currentPage === page ? 'white' : 'inherit',
                  borderRadius: '8px',
                  width: '40px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                onClick={() => paginate(page)}
              >
                {page}
              </li>
            ))}
            </div>
         
            <li
              className={`cursor-pointer font-medium text-[24px] max-sm:p-2 max-sm:mb-3  ${
                currentPage === totalPages ? 'hidden' : ''
              } bg-[#E1E1E1] rounded-[8px]  w-[40px] flex justify-center items-center`}
              onClick={() => paginate(currentPage + 1)}
            >
              <Right/>
            </li>
          </ul>
          <div>
            <select
              className="font-medium text-[24px] px-2 py-1 rounded-[8px]"
              value={itemsPerPage}
              onChange={changeItemsPerPage}
            >
              <option value={8}>8</option>
              <option value={12}>12</option>
              <option value={16}>16</option>
              <option value={20}>20</option>
              <option value={24}>24</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
