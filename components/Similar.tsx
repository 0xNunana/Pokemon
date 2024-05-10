import { PokemonDetails } from "@/data/types";
import Image from "next/image";

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
        <div className='bg-[#D9D9D9]/30 max-sm:w-[300px] w-full max-sm:py-5 py-10'>
            <h2 className='text-[24px] font-semibold py-2 text-center  bg-gradient-to-r from-transparent  via-white via-50% to-transparent to-100%'>Similar</h2>
            <div className='max-sm:w-[300px] w-[510px] mx-auto mt-10 '>
                <div className='grid sm:grid-cols-2 gap-3 max-sm:space-y-3  justify-center '>
                    {similarPokemons.map((pokemon, i) => (
                        <div key={i} className='bg-white rounded-[20px] relative  border group-hover:border-b-0 group-hover:rounded-b-0 max-sm:w-[200px] w-[220px] max-sm:h-[120px] h-[169px] p-2'>
                        <div className='flex justify-center items-center 
                '>
                          <Image src={pokemon.sprites.other.dream_world.front_default || ''} alt={pokemon.name} width={140} height={137} className='absolute max-sm:-top-5 -top-10 object-cover max-sm:w-[110px]' loading='lazy' />
                        </div>
                        <div className='bg-[#F1F1F1] max-sm:h-[80px] h-[114px] rounded-[14px] max-sm:py-4' />
                        <p className='text-center max-sm:text-[16px] text-[24px] font-medium absolute bottom-0 capitalize left-1/2 transform -translate-x-1/2'>{pokemon.name}</p>
                      </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SimilarSection;