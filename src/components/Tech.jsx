import React from 'react'
import { technologies } from '../constants';
import { BallCanvas } from './canvas';

const Tech = () => {
  return (
    <div className='py-16 overflow-x-clip'>
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
  )
}

export default Tech