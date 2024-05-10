import { PokemonDetails } from "@/data/types";
const AboutSection = ({ profile }: { profile: PokemonDetails }) => {
 
    return (
      <div className='bg-[#D9D9D9]/30 w-full max-sm:py-2 py-10 
      '>
        <h2 className='max-sm:text-[16px] text-[24px] font-semibold py-2 text-center bg-gradient-to-r from-transparent via-white to-transparent'>About </h2>
        <div className='flex justify-center items-center'>
          <ul className='max-sm:text-sm'>
            <li className='py-2 grid grid-cols-2  max-sm:gap-4 gap-10'>
                <p>Height:</p>

              <p className='font-semibold'>{profile.height}</p></li>
            <li className='py-2  grid grid-cols-2 max-sm:gap-4 gap-10'>
                Weight: <p className='font-semibold'>{profile.weight}</p></li>
            <li className='py-2  grid grid-cols-2  max-sm:gap-4 gap-10'>
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
export default AboutSection;