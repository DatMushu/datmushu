import React from 'react'
import Image from '../assets/avatar.svg';
import { FaGithub, FaYoutube, FaDribble } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Banner = () => {
  return (
    <section className='section' id='home'>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <h1 className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
              MANUEL <span>DÍAZ</span>
            </h1>
            <div className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>Yo soy</span>
              <TypeAnimation sequence={[
                'Developer',
                2000,
                'Diseñador',
                2000,
                ]} 
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </div>
            <p className='mb-8 max-w-lg mx-auto lg:mx-0'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias minus accusantium perferendis repellat nostrum quisquam quaerat illum nam necessitatibus ut, consectetur laborum blanditiis ea ipsam dolorem doloremque eum laudantium soluta!
            </p>
            <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-lg'>Contáctame</button>
              <a href="#" className='text-gradient btn-link'>
                Mi Portafolio
              </a>
            </div>
            <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href="#">
                <FaGithub />
              </a>
            </div>
          </div>
          <div>
            <img src={Image} alt="" />
          </div>          
        </div>
      </div>
    </section>
  )
}

export default Banner