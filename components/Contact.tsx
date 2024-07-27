import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import axios from 'axios';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from './ui/form'; // Adjust the import path if needed
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const schema = z.object({
  email: z.string().min(1, {
    message: "Email is required",
  }).email('Invalid email'),
  message: z.string().min(1, {
    message: "Message is required",
  }),
});

type ContactFormValues = z.infer<typeof schema>;

const Contact: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const methods = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = methods;

  const onSubmit = async (data: ContactFormValues) => {
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
      <FormProvider {...methods}>
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='space-y-0'
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <FormField
              name='email'
              render={({ field }: { field: any }) => (
                <FormItem > 
                  {!errors.email && <FormLabel>Email</FormLabel>}
                  <FormControl>
                    <Input
                      type='email'
                      placeholder='Your Email'
                      {...field}
                      className={`border ${errors.email ? 'border-red-500 mb-1' : 'border-input'}`}
                    />
                  </FormControl>
                  {errors.email && <FormMessage>{errors.email.message}</FormMessage>}
                </FormItem>
              )}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
           
          >
            <FormField
              name='message'
              render={({ field }: { field: any }) => (
                <FormItem > 
                  {!errors.message && <FormLabel>Message</FormLabel>}
                  <FormControl>
                    <Textarea
                      placeholder='Your Message'
                      {...field}
                      className={`border  ${errors.message ? 'border-red-500 mb-1' : 'border-input mb-5 '}`}
                    />
                  </FormControl>
                  {errors.message && <FormMessage>{errors.message.message}</FormMessage>}
                </FormItem>
              )}
            />
          </motion.div>
          <motion.button
            type='submit'
            className='text-[#8750F7] py-3 px-8 border border-[#8750F7] rounded-3xl hover:bg-[#8750F7] hover:text-white transition-all font-medium w-[200px] '
            disabled={isSubmitting}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>
        </motion.form>
      </FormProvider>
    </div>
  );
}

export default Contact;
