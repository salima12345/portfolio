import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

interface ProjectCardProps {
  project: {
    projectLink: string;
    projectImages: string[];
    projectName: string;
    projectSubTitle: string;
    projectDesc: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % project.projectImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [project.projectImages.length]);

  return (
    <div ref={ref} className='flex flex-col lg:flex-row shadow-lg mb-10 px-1 space-y-4 lg:space-y-0 lg:space-x-4'>
      <motion.div
        className='w-full lg:w-1/2 mt-4 lg:mt-0'
        initial={{ x: -100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        <Link href={project.projectLink} target='_blank' rel='noopener noreferrer'>
          <h2 className='text-2xl font-bold mb-2 text-white'>{project.projectName}</h2>
        </Link>
        <h3 className='text-xl mb-2 text-white'>{project.projectSubTitle}</h3>
        <p className='text-white '>{project.projectDesc}</p>
        <Link href={project.projectLink} target='_blank' rel='noopener noreferrer'>
          <button className='text-[#8750F7] py-3 px-8 my-5 border border-[#8750F7] rounded-3xl hover:bg-[#8750F7] hover:text-white transition-all font-medium'>
            Check it out
          </button>
        </Link>
      </motion.div>
      <motion.div
        className='w-full lg:w-1/2 flex justify-center items-center'
        initial={{ x: 100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        <Link href={project.projectLink} target='_blank' rel='noopener noreferrer'>
          <img
            src={project.projectImages[currentImage]}
            alt={project.projectName}
            className='rounded-lg shadow-md cursor-pointer'
          />
        </Link>
      </motion.div>
    </div>
  );
};

export default ProjectCard;