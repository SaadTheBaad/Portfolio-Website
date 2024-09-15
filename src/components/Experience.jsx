import React from 'react'
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'
import { experiences } from '../constants';

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: 'white', color: 'black', border: '3px solid black', borderRadius: '12px' }}
    contentArrowStyle={{ borderRight: '7px solid black' }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg, border: '3px solid black' }}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img
          src={experience.icon}
          alt={experience.company_name}
          className='w-[60%] h-[60%] object-contain'
        />
      </div>
    }
  >
    <div>
      <h3 className='text-black text-[24px] font-bold'>
        {experience.title}
      </h3>
      <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>
    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {experience.points.map((point, index) => (
        <li key={`experience-point-${index}`}
          className='text-black text-[14px] pl-1 tracking-wider'
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>A little about what I do</p>
        <h2 className={styles.sectionHeadText}>Experience.</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline
          lineColor="black" // Change the vertical line to black
        >
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work");
