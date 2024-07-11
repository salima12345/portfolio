
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TbMenu2 } from "react-icons/tb";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className={`fixed top-0 left-0 z-20 w-full bg-gradient-to-r from-black to-[#1A0B2E] backdrop-blur-md transition-all duration-300 py-3  ${isExpanded ? 'h-screen' : 'h-[70px]'}`}>
            <div className='relative w-[80%] flex items-center justify-between h-[70px] mx-auto '>
                <Link href="#top" passHref>
                    <div className="transition-all duration-200 hover:rotate-180 inline-block pb-1 cursor-pointer">
                        <Image src="/LogoLight.png" alt="Logo" width={50} height={50} />
                    </div>
                </Link>
                <div className='md:flex hidden items-center gap-8 ml-auto'>
                    <Link href="/#AboutMe" className='text-white text-[16px] font-medium'>About</Link>
                    <Link href="/#Skills" className='text-white text-[16px] font-medium'>Skills</Link>
                    <Link href="/#Work" className='text-white text-[16px] font-medium'>Work</Link>
                    <Link href="/#Contact" className='text-white text-[16px] font-medium'>Contact</Link>
                </div>
                <button
                    type="button"
                    className="rounded-full bg-white/20 p-3 backdrop-blur-sm transition-colors duration-300 ease-in-out hover:bg-white/60 hover:backdrop-blur-lg md:hidden"
                    aria-label="open menu"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    {isExpanded ? <IoClose className='text-white' size={22} /> : <TbMenu2 className='text-white' size={22} />}
                </button>
            </div>

            {isExpanded && (
                <div className='flex flex-col items-center gap-4 mt-4 md:hidden'>
                    <Link href="/#AboutMe" className='text-white text-[16px] font-medium' onClick={() => setIsExpanded(false)}>About</Link>
                    <Link href="/#Skills" className='text-white text-[16px] font-medium' onClick={() => setIsExpanded(false)}>Skills</Link>
                    <Link href="/#Work" className='text-white text-[16px] font-medium' onClick={() => setIsExpanded(false)}>Work</Link>
                    <Link href="/#Contact" className='text-white text-[16px] font-medium' onClick={() => setIsExpanded(false)}>Contact</Link>
                </div>
            )}
        </div>
    );
};

export default Navbar;
