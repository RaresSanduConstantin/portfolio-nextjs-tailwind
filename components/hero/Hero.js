import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
<div className="flex justify-center h-screen bg-gray-100 pt-5 pb-5">
  <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-3/5 lg:w-1/2 xl:w-2/5 max-w-full">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-2">Hi, I'm <span className="text-teal-400">Rares Sandu</span></h1>
        <h2 className="text-2xl md:text-3xl mb-4">I'm a <span className="text-teal-400">Frontend Developer</span></h2>
        <div className="flex flex-col mb-4">
          <button className="bg-teal-400 text-white py-2 px-4 rounded-full mb-2 hover:bg-teal-500 transition duration-300">Download Resume</button>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/" className="text-teal-400 hover:text-teal-500 transition duration-300">Facebook</a>
            <a href="https://www.twitter.com/" className="text-teal-400 hover:text-teal-500 transition duration-300">Twitter</a>
            <a href="https://www.linkedin.com/" className="text-teal-400 hover:text-teal-500 transition duration-300">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Image src="/rares.jpeg" alt="hero" width="500" height="500" className="rounded-full w-40 h-40 md:w-64 md:h-64" />

      </div>
    </div>
  </div>
</div>


  )
}

export default Hero