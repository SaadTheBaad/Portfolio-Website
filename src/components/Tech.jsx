import React from 'react'
import { technologies } from '../constants';
import { BallCanvas } from './canvas';
import { styles } from '../styles';

const Tech = () => {
  return (
    <>
      <div className='flex justify-center pt-16 -rotate-2'>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </div>
      <div className='overflow-x-clip pb-16'>
        <div className='bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 -rotate-3 -mx-3 border-solid border-black border-4'>
          <div className='flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
            <div className='flex flex-none gap-44 py-3 pr-4 animate-move-left'>
              {technologies.map((technology) => (
                <div className='w-28 h-28' key={technology.name}>
                  <BallCanvas icon={technology.icon} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tech