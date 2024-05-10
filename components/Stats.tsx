'use client'
import { PokemonDetails } from "@/data/types";
import { useTheme } from "./ThemeContext";

const StatsSection = ({base}:{base:PokemonDetails}) => {
    const {themeColor} = useTheme()
    return (
      <div className='bg-[#D9D9D9]/30 w-full max-sm:py-3 py-10 '>
        <h2 className='max-sm:text-[16px] text-[24px] font-semibold py-2 text-center  bg-gradient-to-r from-transparent  via-white via-50% to-transparent to-100%'>Stats</h2>
        <ul className=' max-sm:w-[300px] w-[700px]'>
            {base.stats.map((item,i)=>(
                <li key={i}>
<div className='grid grid-cols-3 justify-between max-sm:text-sm text-[20px] space-y-2 gap-2 items-center my-1'>
 
    <p className='capitalize text-end '> {item.stat.name}</p>
  
  <div className=' justify-center flex'>
  <div className="w-[200px] bg-[#CBCBCB]  max-sm:h-1.5 h-2.5">
            <div
                                className=" max-sm:h-1.5 h-2.5 "
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


  export default StatsSection