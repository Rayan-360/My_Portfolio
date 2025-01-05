import React,{useState,useRef} from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

// template_io5ttu7
// service_k1s33na
// A9jNqLrL_eMRL9O0a

const Contact = () => {

  const formRef = useRef();
  const [form,setForm] = useState({
    name:'',
    email:'',
    message:''
  });
  const [loading,setLoading] = useState(false);

  const handleChange = (e) => {
    const {name,value} = e.target;

    setForm({...form,[name]:value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send('service_k1s33na',
                 'template_io5ttu7',
                 {from_name:form.name,from_email:form.email,message:form.message},
                 'A9jNqLrL_eMRL9O0a'
                ).then(() => {
                  setLoading(false);
                  alert("Thank you for your message. I'll get back to you soon.");

                  setForm({
                    name:'',
                    email:'',
                    message:''
                  })
                },(error) => {
                  setLoading(false);
                  alert("Failed to send message. Please try again later.");
  }
  )
  }

  return (
    <>
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn("left","tween",0.2,1)}
      className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact me</h3>
        <form 
        ref={formRef}
        onSubmit={handleSubmit}
        className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 
              placehodler:text-secondary text-white rounded-lg outline-none border-none font-medium' 
              />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 
              placehodler:text-secondary text-white rounded-lg outline-none border-none font-medium' 
              />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows='7'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What's do u want to say?"
              className='bg-tertiary py-4 px-6 
              placehodler:text-secondary text-white rounded-lg outline-none border-none font-medium' 
              />
          </label>
          <button 
          className='bg-tertiary py-3 px-8 outline-none w-fit border-none font-bold shadow-md shadow-primary rounded-xl'
          type='submit' >{loading ? 'Sending...':'Send'}</button>
        </form>
      </motion.div>

      <motion.div
      variants={slideIn("right","tween",0.2,1)}
      className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas/>
      </motion.div>

    </div>
    </>
  )
}

export default SectionWrapper(Contact,"contact");