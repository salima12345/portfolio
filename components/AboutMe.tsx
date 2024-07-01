import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutMe: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1,
  });

  return (
    <div id="AboutMe" className='mt-[8vh] w-[80%] mx-auto' ref={ref}>
      <motion.h1
        className='xl:text-[70px] lg:text-[60px] sm:text-[55px] text-[45px] font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#8750f7] to-white mb-10'
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        About Me
      </motion.h1>

      <div className='flex flex-row items-start gap-[2rem]'>
        <motion.div
          className='max-w-[475px] hidden md:block'
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Image src="/photo.png" alt='' loading="lazy" width={375} height={410} className="rounded-full border-2 border-[#8750F7]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
       <p className='text-[15px] md:text-[17px] text-white leading-relaxed mb-4'>
            I am a junior front-end developer with a strong foundation in React.js and Next.js. My passion for activities that require logical thinking, problem-solving, and analytical skills naturally led me to a career in development.
          </p>
          <p className='text-[15px] md:text-[17px] text-white leading-relaxed mb-4'>
            I began my journey with an academic background, earning a bachelor&apos;s degree in computer science where I learned the fundamentals of programming, including data structures, algorithms, and object-oriented programming. After completing my formal education, I dedicated myself to self-study, focusing on front-end development to further specialize my skills.
          </p>
          <p className='text-[15px] md:text-[17px] text-white leading-relaxed mb-4'>
            My career took flight at Goaluin, where I played a significant role in the frontend development team, an experience that tremendously honed my skills and proficiency.
          </p>
          <p className='text-[15px] md:text-[17px] text-white leading-relaxed'>
            My self-driven learning and practical experience have equipped me to create intuitive and responsive user interfaces, fueling my continuous growth and passion for the field.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutMe;