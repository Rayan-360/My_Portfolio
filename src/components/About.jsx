import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import {styles} from '../styles';
import {services} from '../constants';
import {fadeIn , textVariant} from '../utils/motion';
import { p } from 'framer-motion/client';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index,title,icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
      variants={fadeIn("right","spring",0.5*index,0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div
        options = {{
          max:25,
          scale:1,
          speed:450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} 
          className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>

    <motion.p
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      variants={fadeIn("","",0.1,1)}
    >
      I’m a passionate engineering student with a focus on full-stack development. 
      Currently in my second year, I have experience working with frontend technologies like HTML, CSS, JavaScript, React, and backend tools including Node.js and MongoDB. 
      My goal is to create innovative and efficient web applications, while continuously expanding my knowledge and skills in both development and emerging technologies. 
      I am also exploring web animation techniques and staying updated with the latest trends in the tech world.

    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service,index) => (
        <ServiceCard key={service.title} index = {index} {...service} />
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About,"about")