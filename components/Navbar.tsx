"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TbMenu2 } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
} from "./ui/drawer";

const Navbar = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    return (
        <div className='sticky top-0 z-20 w-full bg-gradient-to-r from-black to-[#1A0B2E] backdrop-blur-md flex items-center justify-center h-[70px]'>
            <div className='relative w-[80%] md:mx-5 flex items-center justify-between mt-2'>
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
                    onClick={() => setDrawerOpen(true)}
                >
                    <TbMenu2 className='text-white' size={22} />
                </button>
            </div>

            <Drawer open={isDrawerOpen} onOpenChange={setDrawerOpen}>
                <DrawerContent className={`fixed inset-x-0 top-0 z-50 transform transition-transform duration-3000 ${isDrawerOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                    <DrawerHeader>
                        <button
                            type="button"
                            className="absolute top-4 right-4 rounded-full p-2"
                            onClick={() => setDrawerOpen(false)}
                            aria-label="close menu"
                        >
                            <IoClose className='text-white' size={22} />
                        </button>
                    </DrawerHeader>
                    <DrawerDescription>
                        <nav className="flex flex-col items-center gap-4">
                            <Link href="/#AboutMe" className='text-white text-[16px] font-medium' onClick={() => setDrawerOpen(false)}>About</Link>
                            <Link href="/#Skills" className='text-white text-[16px] font-medium' onClick={() => setDrawerOpen(false)}>Skills</Link>
                            <Link href="/#Work" className='text-white text-[16px] font-medium' onClick={() => setDrawerOpen(false)}>Work</Link>
                            <Link href="/#Contact" className='text-white text-[16px] font-medium' onClick={() => setDrawerOpen(false)}>Contact</Link>
                        </nav>
                    </DrawerDescription>
                </DrawerContent>
            </Drawer>
        </div>
    );
};

export default Navbar;
