import React from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
const About = () => {
  const[ref, inView] = useInView({
    threshold: 0.5,
  })
  return (
    <section className='section' id='about' ref={ref}>
      <div className="container mx-auto">
        <div>
          <div className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></div>
          <div>
            <h2>Sobre mi</h2>
            <h3>Soy un Front-end Dev freelancer con más de 10 años de experiencia en el rubro </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam accusantium rerum nulla adipisci est ea omnis sed minus! Aliquam excepturi illo eveniet ipsam autem corporis atque a facere aspernatur amet!
            </p>
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    inView ?
                    <CountUp start={0} end={10} duration={3} /> : null} 
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Años de <br />
                  Experiencia
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    inView ?
                    <CountUp start={0} end={50} duration={3} /> : null} 
                  +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Clientes <br />
                  Satisfechos
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                    inView ?
                    <CountUp start={0} end={100} duration={3} /> : null} 
                    +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Proyectos <br />
                  Completados
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About