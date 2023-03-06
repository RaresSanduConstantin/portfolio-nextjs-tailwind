import React from 'react'

const Hero = () => {
  return (
<div className="flex justify-center items-center h-screen bg-gray-100">
  <div className="bg-white p-6 rounded-lg shadow-lg w-3/5 max-w-full">
    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col justify-center">
        <h1 className="text-6xl font-bold mb-2">Hi, I'm <span className="text-teal-400">Rares Sandu</span></h1>
        <h2 className="text-3xl mb-4">I'm a <span className="text-teal-400">Frontend Developer</span></h2>
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
        <img src="https://avatars.githubusercontent.com/u/59281487?s=400&u=ed6e2f43fffde34964b8ae73a3fdaacd1d7516f7&v=4" alt="hero" className="rounded-full" />
      </div>
    </div>
  </div>
</div>

  )
}

export default Hero