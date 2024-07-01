
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import projectsData from '@/Data/projects';
import ProjectCard from './ProjectCard';

const Work: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1,
  });

  return (
    <div id="Work" className='mt-[8vh] w-[80%] mx-auto' ref={ref}>
      <motion.h1
        className='xl:text-[70px] lg:text-[60px] sm:text-[55px] text-[45px] font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#8750f7] to-white mb-10'
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Work
      </motion.h1>
      {projectsData.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
}

export default Work;
