import React, { useEffect, useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant, slideIn } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const ServiceCard = ({ title, icon }) => {
  return (
    <Tilt className='xs:w-[220px] w-full'>
      <motion.div className='w-full card-gradient p-[1px] rounded-[20px] shadow-card'>
        <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("right");
  const [isClicked, setIsClicked] = useState(false);

  const maxCards = 4;
  const totalCards = services.length;

  // Function to handle key press events
  const handleKeyPress = (event) => {
    if (event.key === 'ArrowRight') {
      handleNext();
    }
    if (event.key === 'ArrowLeft') {
      handlePrev();
    }
  };

  const handleNext = () => {
    setSlideDirection("right");
    setIsClicked(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards); // Loop back to the first card
  };

  const handlePrev = () => {
    setSlideDirection("left");
    setIsClicked(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards); // Loop back to the last card
  };

  // Slice the array of services to show only the current range of cards
  const visibleServices = [];
  for (let i = 0; i < maxCards; i++) {
    visibleServices.push(services[(currentIndex + i) % totalCards]);
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        I'm a third-year Software Engineering student at the University of Calgary with a passion for coding and football.
        Having grown up in both Pakistan and Canada, I've learned to appreciate diverse perspectives, which has shaped my approach to problem-solving.
        I love taking on many challenges to further my growth as a developer and as an individual.
        I'm always looking for opportunities to improve and push myself beyond my comfort zone, aiming for constant personal and professional growth.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-7 items-center'>
        <motion.div onClick={handlePrev} variants={fadeIn("", "", 0.2, 1)}>
          <MdOutlineKeyboardDoubleArrowLeft color='black' size={48} cursor={'pointer'} />
        </motion.div>

        {visibleServices.map((service, index) => (
          <motion.div
            key={service.title}
            variants={isClicked ? fadeIn(slideDirection, "spring", 0.2, 0.75) : null}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="xs:w-[220px] w-full"
          >
            <ServiceCard index={index} {...service} />
          </motion.div>
        ))}

        <motion.div onClick={handleNext} variants={fadeIn("", "", 0.2, 1)}>
          <MdOutlineKeyboardDoubleArrowRight color='black' size={48} cursor={'pointer'} />
        </motion.div>
      </div>
    </>
  );
};


export default SectionWrapper(About, "about");
