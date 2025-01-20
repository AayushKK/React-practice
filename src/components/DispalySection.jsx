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
        <h1 className='text-3xl font-bold'>Hi, I am John </h1>

        <p className='text-lg text-pink-500'>Some Dev, Freelancer, Rounder</p>
        <p className="text-md ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quos optio incidunt. Ab sapiente dolorem nam aut a deleniti quas magnam! Doloribus debitis modi quod fuga dicta reprehenderit, cum laborum dolor sapiente sed delectus aspernatur eius sint itaque rerum aut perspiciatis rem quisquam, voluptatibus labore mollitia sit. Eaque, explicabo quam</p>
      </div>

    </div >
  )
}
export default DispalySection