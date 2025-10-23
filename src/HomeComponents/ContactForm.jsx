import axios from 'axios';
import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      videoType: '',
      budgetRange: 'under500',
      vision: ''
    }
  });

  const videoTypes = [
    'Ai Video',
    'Motion graphics Video',
    'Transitional Video',
    'Talking Head Video',
    'Fitness Video',
    'Social Media Content Marketing',
    'Other'
  ];

  const budgetRange = watch('budgetRange');
  const videoType = watch('videoType');

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("https://vzualvibesite.vercel.app/api/form", data)
      console.log("response ", res.data);
      
      alert(res.data.message);
      reset()
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  }

  return (
    <div className='bg-black font-poppins'>
      {/* Heading with blur fade-in */}
      <motion.h1 
        initial={{ opacity: 0, filter: "blur(10px)", y: -30 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-4xl text-white font-poppins-bold text-center mb-5 md:mb-10 md:text-5xl"
      >
        Tell us what you need
      </motion.h1>

      <div className="h-[90vh] bg-black flex items-center justify-center px-10 md:pt-[8rem] md:pb-[8rem]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-4xl"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name and Email Fields */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Name Field */}
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-gray-400 text-sm mb-2"
                >
                  Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  {...register('name', {
                    required: 'Name is required',
                    minLength: {
                      value: 2,
                      message: 'Name must be at least 2 characters'
                    }
                  })}
                  className={`w-full bg-[#1a1a1a] text-gray-300 rounded-lg px-4 py-3.5 
                    focus:outline-none focus:ring-2 focus:ring-gray-600 
                    border ${errors.name ? 'border-red-500' : 'border-transparent'}
                    placeholder-gray-600 transition-all`}
                />
                {errors.name && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-xs mt-1"
                  >
                    {errors.name.message}
                  </motion.p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-gray-400 text-sm mb-2"
                >
                  Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  type="email"
                  id="email"
                  placeholder="vzualvibemedia@gmail.com"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className={`w-full bg-[#1a1a1a] text-gray-300 rounded-lg px-4 py-3.5 
                    focus:outline-none focus:ring-2 focus:ring-gray-600 
                    border ${errors.email ? 'border-red-500' : 'border-transparent'}
                    placeholder-gray-600 transition-all`}
                />
                {errors.email && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-xs mt-1"
                  >
                    {errors.email.message}
                  </motion.p>
                )}
              </div>
            </motion.div>

            {/* Video Type Dropdown */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <label 
                htmlFor="videoType" 
                className="block text-gray-400 text-sm mb-2"
              >
                What Kind of Video Do You Need?
              </label>
              <div className="relative">
                <motion.select
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  id="videoType"
                  {...register('videoType', {
                    required: 'Please select a video type'
                  })}
                  className={`w-full bg-[#1a1a1a] text-gray-300 rounded-lg px-4 py-3.5 
                    appearance-none cursor-pointer
                    focus:outline-none focus:ring-2 focus:ring-gray-600
                    border ${errors.videoType ? 'border-red-500' : 'border-transparent'}
                    transition-all ${!videoType ? 'text-gray-600' : 'text-gray-300'}`}
                >
                  <option value="" disabled>Select...</option>
                  {videoTypes.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </motion.select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
                  <svg 
                    className="w-4 h-4 text-gray-500" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M19 9l-7 7-7-7" 
                    />
                  </svg>
                </div>
              </div>
              {errors.videoType && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-xs mt-1"
                >
                  {errors.videoType.message}
                </motion.p>
              )}
            </motion.div>

            {/* Budget Range Radio Buttons */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <label className="block text-white text-base mb-4">
                What's Your Budget Range?
              </label>
              <div className="space-y-3">
                {[
                  { value: 'under500', label: 'Under $500' },
                  { value: '500-1000', label: '$500-$1000' },
                  { value: '1000-2000', label: '$1000-$2000' },
                  { value: '2000-5000', label: '$2000-$5000' }
                ].map((option, index) => (
                  <motion.label 
                    key={option.value}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center cursor-pointer group"
                  >
                    <input
                      type="radio"
                      value={option.value}
                      {...register('budgetRange')}
                      className="sr-only"
                    />
                    <motion.div 
                      animate={{ 
                        scale: budgetRange === option.value ? 1.1 : 1 
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                        transition-all
                        ${budgetRange === option.value 
                          ? 'border-blue-500' 
                          : 'border-gray-600 group-hover:border-gray-500'}`}
                    >
                      {budgetRange === option.value && (
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 400 }}
                          className="w-2.5 h-2.5 rounded-full bg-blue-500"
                        />
                      )}
                    </motion.div>
                    <span className="ml-3 text-gray-300 text-sm">
                      {option.label}
                    </span>
                  </motion.label>
                ))}
              </div>
            </motion.div>

            {/* Vision Textarea */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <label 
                htmlFor="vision" 
                className="block text-gray-400 text-sm mb-2"
              >
                Share Your Vision
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                id="vision"
                placeholder="Tell us about your project..."
                rows="4"
                {...register('vision', {
                  required: 'Please share your vision',
                  minLength: {
                    value: 10,
                    message: 'Please provide at least 10 characters'
                  }
                })}
                className={`w-full bg-[#1a1a1a] text-gray-300 rounded-lg px-4 py-3.5 
                  focus:outline-none focus:ring-2 focus:ring-gray-600 
                  border ${errors.vision ? 'border-red-500' : 'border-transparent'}
                  placeholder-gray-600 transition-all resize-none`}
              />
              {errors.vision && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-xs mt-1"
                >
                  {errors.vision.message}
                </motion.p>
              )}
            </motion.div>

            {/* Submit Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ 
                scale: 1.02,
                backgroundColor: "#FBC740",
                color: "#000000"
              }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-[#2a2a2a] text-white font-medium 
                rounded-lg py-3.5 transition-all duration-200 
                focus:outline-none focus:ring-2 focus:ring-gray-600"
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;
