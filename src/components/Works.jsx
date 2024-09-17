import React from 'react';
import { projects } from '../constants';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { MdCheckCircle } from 'react-icons/md';
import { FaArrowTrendUp } from "react-icons/fa6";

const ProjectsCard = ({ title, year, results, link, image, index }) => {
  return (
    <div className="
    bg-white 
    rounded-3xl 
    z-0 
    overflow-hidden 
    after:z-10 
    after:content-[''] 
    after:absolute 
    after:inset-0
    after:outline-2
    after:outline
    after:-outline-offset-2
    after:rounded-3xl
    after:outline-black
    px-8 pt-8
    md:pt-12 md:px-10
    after:pointer-events-none
    lg:pt-16 lg:px-20 
    sticky"
      style={{ top: `${84 + index * 40}px` }}>
      <div className='lg:grid lg:grid-cols-2 lg:gap-16'>
        <div className='lg:pb-16'>
          <div className='flex justify-between items-center'>
            <h3 className='text-black text-[24px] mt-2 font-bold'>{title}</h3>
            <span className='text-secondary text-[16px] font-semibold'>{year}</span>
          </div>
          <hr className='border-t-2 border-black/5 mt-2' />
          <ul className='text-black text-[14px] pl-1 tracking-wider mt-5 md:mt-6'>
            {results.map((result, index) => (
              <li key={`project-${index}`}>
                <div className='flex gap-2 items-center mt-4'>
                  <MdCheckCircle size={16} />
                  <span>{result.title}</span>
                </div>
              </li>
            ))}
          </ul>
          <a href={link}>
            <button className='bg-black text-white h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8'>
              <span>View Project</span>
              <FaArrowTrendUp />
            </button>
          </a>
        </div>
        <div>
          <img src={image} alt={title}
            className='mt-8 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none' />
        </div>
      </div>
    </div>
  )
}
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30-px]'>
        Throughout my journey as a software engineering student and developer, I have worked on a variety of projects that demonstrate my skills
        in full-stack development, problem-solving, and creativity. Each project represents a unique challenge that I’ve tackled, whether it's through
        frontend development, backend architecture, or creating user-friendly interfaces. Below, you’ll find a selection of my work — some complete,
        and others still in progress, showcasing my continual pursuit of learning and growth.
      </motion.p>
      <div className='mt-10 md:mt-20 flex flex-col gap-20'>
        {projects.map((project, index) => (
          <ProjectsCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "")