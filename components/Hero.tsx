import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from 'next/link';

const Hero = () => {
    return (
        <div  className='w-[100vw] to-[#1A0B2E] mt-[20vh] lg:mt-[30vh] animate-slideInFromLeft'>
            <div className='flex justify-center flex-col w-[80%] h-[100%] mx-auto'>
                <div className='grid grid-cols-1 md:grid-col-2 gap-[3rem] items-center'>
                    <div>
                        <h1 className='xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] font-semibold text-white font-poppins mb-2'>Hello!</h1>
                        <h2 className='xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] font-semibold text-white font-poppins mb-2'>I&apos;m Salima El Khalidi</h2>
                        <h3 className='xl:text-[70px] lg:text-[60px] sm:text-[55] text-[45px] font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#8750f7] to-white mb-2 '>Frontend Developer</h3>
                        <p className='text-[15px] md:text-[17px] text-white leading-relaxed mb-10'>I specialize in crafting responsive and intuitive user interfaces, utilizing the latest web technologies.</p>
                        <div className='flex items-center gap-3'>
                            <Link href="/images/salimaElkhalidiResume.pdf" download="Salima_El_Khalidi_CV" className='text-[#8750F7] py-3 px-8 border border-[#8750F7] rounded-3xl hover:bg-[#8750F7] hover:text-white transition-all font-medium'>
                                Download CV
                            </Link>
                            <Link href="https://github.com/salima12345" target="_blank" rel="noopener noreferrer" className="text-[#8750F7] w-9 h-9 border border-[#8750F7] rounded-full flex items-center justify-center transition-colors hover:bg-[#8750F7] hover:text-white">
                                <FaGithub size={19} />
                            </Link>
                            <Link href="https://www.linkedin.com/in/salima-el-khalidi-15324b23a" target="_blank" rel="noopener noreferrer" className="text-[#8750F7] w-9 h-9 border border-[#8750F7] rounded-full flex items-center justify-center transition-colors hover:bg-[#8750F7] hover:text-white">
                                <FaLinkedin size={19} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
