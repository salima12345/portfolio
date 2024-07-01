import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import axios from 'axios';

const schema = z.object({
  email: z.string().min(1, {
    message: "Email is required",
  }).email('Invalid email'),
  message: z.string().min(1, {
    message: "Message is required",
  }),
});

const Contact: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: any) => {
    try {
      await axios.post('/api/contact', data);
      alert("Thank you for your message! I appreciate your interest and will get in touch with you quickly.");
      reset();
    } catch (error) {
      alert("Failed to send message, please try again.");
    }
  };

  return (
    <div id="Contact" className='mt-[8vh] w-[80%] mx-auto' ref={ref}>
      <motion.h1
        className='xl:text-[70px] lg:text-[60px] sm:text-[55px] text-[45px] font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#8750f7] to-white mb-10'
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Get In Touch
      </motion.h1>
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
        className='space-y-4'
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Input
            type='email'
            placeholder='Your Email'
            {...register('email')}
            className={`${errors.email ? 'border-red-500' : 'border-input'}`}
          />
          {errors.email && typeof errors.email.message === 'string' && (
            <p className='text-red-500 text-sm'>{errors.email.message}</p>
          )}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Textarea
            placeholder='Your Message'
            {...register('message')}
            className={`${errors.message ? 'border-red-500' : 'border-input'}`}
          />
          {errors.message && typeof errors.message.message === 'string' && (
            <p className='text-red-500 text-sm'>{errors.message.message}</p>
          )}
        </motion.div>
        <motion.button
          type='submit'
          className='text-[#8750F7] py-3 px-8 border border-[#8750F7] rounded-3xl hover:bg-[#8750F7] hover:text-white transition-all font-medium w-[200px]'
          disabled={isSubmitting}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </motion.button>
      </motion.form>
    </div>
  );
}

export default Contact;
