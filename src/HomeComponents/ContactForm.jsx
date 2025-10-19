import axios from 'axios';
import { div } from 'motion/react-client';
import React from 'react';
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
    'Social Media Content',
    'Product Demo',
    'Corporate Video',
    'Promotional Video',
    'Event Coverage',
    'Explainer Video',
    'Other'
  ];

  const budgetRange = watch('budgetRange');
  const videoType = watch('videoType');

  const onSubmit = async (data) => {
    try{
    const res = await axios.post("http://localhost:3000/form", data)
    alert(res.data.message);
    reset()
  }catch(err){
    console.error(err);
      alert("Something went wrong!");

  }
}

  return (
    <div className='bg-black font-poppins'>
      <h1 className="text-4xl text-white font-poppins-bold text-center  md:mb-10 md:text-5xl">
                Tell us what you need
            </h1>
    <div className="h-[90vh] bg-black flex items-center justify-center px-10 md:pt-[8rem] md:pb-[8rem]">
     
      <div className="w-full max-w-4xl">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name and Email Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <div>
              <label 
                htmlFor="name" 
                className="block text-gray-400 text-sm mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Jane Smith"
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
                <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
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
              <input
                type="email"
                id="email"
                placeholder="jane@framer.com"
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
                <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>
          </div>

          {/* Video Type Dropdown */}
          <div>
            <label 
              htmlFor="videoType" 
              className="block text-gray-400 text-sm mb-2"
            >
              What Kind of Video Do You Need?
            </label>
            <div className="relative">
              <select
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
              </select>
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
              <p className="text-red-500 text-xs mt-1">{errors.videoType.message}</p>
            )}
          </div>

          {/* Budget Range Radio Buttons */}
          <div>
            <label className="block text-white text-base mb-4">
              What's Your Budget Range?
            </label>
            <div className="space-y-3">
              {[
                { value: 'under500', label: 'Under $500' },
                { value: '500-1000', label: '$500-$1000' },
                { value: '1000-2000', label: '$1000-$2000' },
                { value: '2000-5000', label: '$2000-$5000' }
              ].map((option) => (
                <label 
                  key={option.value}
                  className="flex items-center cursor-pointer group"
                >
                  <input
                    type="radio"
                    value={option.value}
                    {...register('budgetRange')}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                    transition-all
                    ${budgetRange === option.value 
                      ? 'border-blue-500' 
                      : 'border-gray-600 group-hover:border-gray-500'}`}
                  >
                    {budgetRange === option.value && (
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                    )}
                  </div>
                  <span className="ml-3 text-gray-300 text-sm">
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Vision Textarea */}
          <div>
            <label 
              htmlFor="vision" 
              className="block text-gray-400 text-sm mb-2"
            >
              Share Your Vision
            </label>
            <textarea
              id="vision"
              placeholder="jane@framer.com"
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
              <p className="text-red-500 text-xs mt-1">{errors.vision.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#2a2a2a] hover:bg-[#333333] text-white font-medium 
              rounded-lg py-3.5 transition-all duration-200 
              focus:outline-none focus:ring-2 focus:ring-gray-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ContactForm;
