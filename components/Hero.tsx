'use client'
import Image from 'next/image'
import { CustomButton } from "."

const handleScroll=()=>{};
const Hero = () => {
  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>
          Find, Book, or rent a car - quickly and easily!
        </h1>
        <div className='hero__subtitle'>
          Streamline your car rental car experience with our effortless booking
          process.
        </div>
        <CustomButton
          title='Explore Cars'
          containerStyles='bg-primary-blue rounded-full mt-10 text-white'
          handleClick={handleScroll}
        />
      </div>
      <div className='hero__image-container'>
        <div className='hero__image'>
        <Image src='/hero.png' alt='hero' fill className='object-contain' /></div>
        <div className='hero__image-overlay' />
      </div>
    </div>
  );
}
export default Hero