import React, { useState, useRef } from 'react'
import { styles } from '../styles';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_fgptybe',
      'template_v6u406i',
      {
        from_name: form.name,
        to_name: 'Saad',
        from_email: form.email,
        to_email: 'sheikh.saad.aqeel@gmail.com',
        message: form.message
      },
      'x1RNuIWQbWYKA76bv'
    ).then(() => {
      setLoading(false);
      toast.success('Thank You! I will get back to you as soon as possible.', {
        position: "bottom-right",
        autoClose: 5000,  
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      }) ;

      setForm({
        name: '',
        email: '',
        message: ''
      })
    }, (error) => {
      setLoading(false);

      console.log(error);

      toast.error('An error occurred while trying to send the message.', {
        position: "bottom-right",
        autoClose: 5000,  
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
    })
  };

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-1 bg-hero-pattern p-8 rounded-2xl'
      >
        <h3 className={`${styles.sectionHeadText} text-white`}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Name
            </span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="You're name"
              className='bg-[#f7f7f7] py-4 px-6 placeholder:text-tertiary text-black rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Email
            </span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="You're email"
              className='bg-[#f7f7f7] py-4 px-6 placeholder:text-tertiary text-black rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Message
            </span>
            <textarea
              rows="7"
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="You're message"
              className='bg-[#f7f7f7] py-4 px-6 placeholder:text-tertiary text-black rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-[#f7f7f7] text-black py-3 px-8 outline-none w-fit font-bold shadow-sm shadow-primary rounded-xl'
          >
            {loading ? 'Sending...' : 'Sent'}
          </button>
        </form>
      </motion.div>

      <ToastContainer />
    </div>
  )
}

export default SectionWrapper(Contact, "contact");