import { DotLottieReact } from '@lottiefiles/dotlottie-react';
const DispalySection = () => {
  return (
    <div className='grid grid-cols-grid-3   md:grid-cols-1 md:mb-4 items-center '>
      <div className='h-[450px]'>
        <DotLottieReact
          src="https://lottie.host/cd424b83-c6ad-4154-85be-6ac4aadc52ee/LAvbQimWHa.lottie"
          loop
          autoplay
        />

      </div>
      <div className=' space-y-4'>
        <h1 className='text-3xl font-bold text-gray-800'>Hi, I am Aayush Kharel</h1>

        <p className='text-lg text-pink-500'>Web Developer, Freelancer, </p>
        <p className="text-md ">I am a passionate web developer dedicated to turning ideas into seamless digital experiences. With a strong foundation in modern web technologies like React, Vite, and Tailwind CSS, I create responsive, user-friendly websites and applications that combine functionality with design. I thrive on solving problems, learning new tools, and continuously improving my craft to deliver projects that not only work but delight users. Every line of code I write is aimed at building interactive, engaging, and efficient solutions that make an impact.
        </p>
      </div>

    </div >
  )
}
export default DispalySection