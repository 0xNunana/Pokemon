'use client'

import Image from "next/image";
import Link from "next/link";

import { useTheme } from "@/components/ThemeContext";
import {Search} from "@/components/Search";


export default function Home() {
const {themeColor}=useTheme()


  return (
   <main className="flex justify-center items-center min-h-screen">
    <div>
    <div>
      <div className="flex justify-center items-center">
      <Image src='/Welcome.svg' alt='welcome logo' width={383} height={249} className="max-sm:w-[200px]"/>
      </div>
      <p className="max-sm:text-[28px] text-[48px] font-clash font-semibold text-center">Poké <span style={{color:`${themeColor}`}}>book</span></p>
      <p className="max-sm:text-sm text-[18px] max-sm:w-[200px] w-[370px] text-center font-normal mx-auto font-general">Largest Pokémon index with information about every Pokemon you can think of.</p>

    </div>
    <div className="mt-20  ">
    <form className={` rounded-full flex max-sm:w-[250px] w-[515px] max-sm:py-[1px] py-[8px] max-sm:pr-[6px] pr-[9px] max-sm:pl-[10px] pl-[20px] mb-4`} style={{ border: `4px solid ${themeColor}` }}
>
      <input type="text" placeholder="Enter pokemon name" className='w-full outline-none'/>
      <Link href='/List'
       className='rounded-full items-center justify-center flex max-sm:p-[7px] p-[14px]'
       style={{background:`${themeColor}`}}
       >
       <Search/>
      </Link>
    </form>
   
    <Link href='/List' className="underline my-5 ">
    <p className="text-center max-sm:text-sm text-[18px]">
      View all
    </p>
    </Link>
    </div>
  
    </div>
   </main>
  );
}
