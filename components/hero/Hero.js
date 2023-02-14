import React from 'react'

const Hero = () => {
  return (
    <div className='grid grid-cols-2'>
      <div>
        <h1 className='text-6xl font-bold'>Hi, I'm <span className='text-teal-400'>Rares Sandu</span></h1>
        <h2 className='text-3xl'>I'm a <span className='text-teal-400'>Frontend Developer</span></h2>
        <div>
          <button>Donwload Resume</button>
          <div className='flex flex-col'>
            <a href='https://www.facebook.com/'>Facebook</a>
            <a href='https://www.twitter.com/'>Twitter</a>
            <a href='https://www.linkedin.com/'>LinkedIn</a>
          </div>
        </div>
      </div>
      <div>
        <img src='https://avatars.githubusercontent.com/u/59281487?s=400&u=ed6e2f43fffde34964b8ae73a3fdaacd1d7516f7&v=4' alt='hero' />
      </div>
    </div>
  )
}

export default Hero