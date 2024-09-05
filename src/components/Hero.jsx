import { useEffect, useState } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { styles } from '../styles';
import { PrismCanvas } from './canvas';

const Hero = () => {
  const [text] = useTypewriter({
    words: ['Saad'],
    typeSpeed: 150,
    loop: false,
    deleteSpeed: 120,
    delaySpeed: 1000,
    cursor: true,  
  });

  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1280);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute justify-center inset-0 max-w-7xl mx-auto flex flex-row items-center gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div className='flex justify-center'>
          <img 
            src='/src/assets/pfp.jpg'
            alt='avatar'
            className='rounded-full object-cover'
            height={'200px'}
            width={'200px'} 
          />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm {' '}
            <span className='text-[#915eff]'>
              {text}
            </span>
            <span style={{color:''}}>
              <Cursor />
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Currently a Software Engineering Student <br /> that loves fullstack development
          </p>
        </div>
      </div>

      {!isMobile && <PrismCanvas />}
    </section>
  );
}

export default Hero;
