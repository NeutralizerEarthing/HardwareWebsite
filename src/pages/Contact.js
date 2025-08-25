import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [contactRef, contactInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['NEUTRALIZER EARTHING', 'Gate no -631, opp Torrent Gas', 'Kondhapuri, Pune-412208'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91-8888081731', '+91-8888081731', 'Available 24/7'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['neutralizerearthings@gmail.com', 'For inquiries and support', 'Quick response guaranteed'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9AM-6PM', 'Saturday: 9AM-4PM', 'Sunday: Closed'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact <span className="text-accent-300">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Get in touch with us for all your earthing solutions and inquiries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white dark:bg-secondary-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="card p-6 text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-secondary-900 dark:text-white">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-secondary-600 dark:text-secondary-300">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section 
        ref={contactRef}
        className="section-padding bg-secondary-50 dark:bg-secondary-800"
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={contactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="card p-8">
                <h2 className="text-3xl font-bold mb-6 text-secondary-900 dark:text-white">
                  Send Us a Message
                </h2>
                <p className="text-secondary-600 dark:text-secondary-300 mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-lg flex items-center space-x-3"
                  >
                    <CheckCircle size={20} className="text-green-600 dark:text-green-400" />
                    <span className="text-green-800 dark:text-green-200 font-medium">
                      Thank you! Your message has been sent successfully.
                    </span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input
                        {...register('firstName', { required: 'First name is required' })}
                        type="text"
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
                          errors.firstName
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-secondary-300 dark:border-secondary-600 focus:ring-primary-500'
                        } bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white`}
                        placeholder=" "
                      />
                      <label className="absolute left-4 top-3 text-secondary-500 dark:text-secondary-400 transition-all duration-300 pointer-events-none">
                        First Name *
                      </label>
                      {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                      )}
                    </div>

                    <div className="relative">
                      <input
                        {...register('lastName', { required: 'Last name is required' })}
                        type="text"
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
                          errors.lastName
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-secondary-300 dark:border-secondary-600 focus:ring-primary-500'
                        } bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white`}
                        placeholder=" "
                      />
                      <label className="absolute left-4 top-3 text-secondary-500 dark:text-secondary-400 transition-all duration-300 pointer-events-none">
                        Last Name *
                      </label>
                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="relative">
                    <input
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      type="email"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.email
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-secondary-300 dark:border-secondary-600 focus:ring-primary-500'
                      } bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white`}
                      placeholder=" "
                    />
                    <label className="absolute left-4 top-3 text-secondary-500 dark:text-secondary-400 transition-all duration-300 pointer-events-none">
                      Email Address *
                    </label>
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="relative">
                    <input
                      {...register('subject', { required: 'Subject is required' })}
                      type="text"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.subject
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-secondary-300 dark:border-secondary-600 focus:ring-primary-500'
                      } bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white`}
                      placeholder=" "
                    />
                    <label className="absolute left-4 top-3 text-secondary-500 dark:text-secondary-400 transition-all duration-300 pointer-events-none">
                      Subject *
                    </label>
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                    )}
                  </div>

                  <div className="relative">
                    <textarea
                      {...register('message', { required: 'Message is required', minLength: { value: 10, message: 'Message must be at least 10 characters' } })}
                      rows={6}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
                        errors.message
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-secondary-300 dark:border-secondary-600 focus:ring-primary-500'
                      } bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white`}
                      placeholder=" "
                    />
                    <label className="absolute left-4 top-3 text-secondary-500 dark:text-secondary-400 transition-all duration-300 pointer-events-none">
                      Message *
                    </label>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={contactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="card p-8">
                <h2 className="text-3xl font-bold mb-6 text-secondary-900 dark:text-white">
                  Find Us
                </h2>
                <p className="text-secondary-600 dark:text-secondary-300 mb-6">
                  Visit our office in Pune or get in touch with our team for any inquiries.
                </p>
                
                {/* Google Maps Embed */}
                <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2154567890123!2d73.8567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c065144d3ed1%3A0xf8f9ce6c9e7c3b8a!2sKondhapuri%2C%20Pune%2C%20Maharashtra%20412208!5e0!3m2!1sen!2sin!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Neutralizer Earthing Location"
                  ></iframe>
                </div>
              </div>

              {/* Additional Info */}
              <div className="card p-8">
                <h3 className="text-xl font-semibold mb-4 text-secondary-900 dark:text-white">
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone size={20} className="text-primary-600 dark:text-primary-400" />
                    <span className="text-secondary-600 dark:text-secondary-300">
                      +91-8888081731
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail size={20} className="text-primary-600 dark:text-primary-400" />
                    <span className="text-secondary-600 dark:text-secondary-300">
                      neutralizerearthings@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin size={20} className="text-primary-600 dark:text-primary-400" />
                    <span className="text-secondary-600 dark:text-secondary-300">
                      Gate no -631, opp Torrent Gas, Kondhapuri, Pune-412208
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white dark:bg-secondary-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
              Find answers to common questions about our earthing solutions and services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: 'What types of earthing solutions do you provide?',
                answer: 'We provide comprehensive earthing solutions including copper earthing electrodes, GI earthing electrodes, earthing pit covers, and complete earthing systems for various applications.'
              },
              {
                question: 'Do you provide installation services?',
                answer: 'Yes, we provide complete installation services along with our earthing products, ensuring proper setup and compliance with safety standards.'
              },
              {
                question: 'What is your warranty policy?',
                answer: 'We offer comprehensive warranties on all our earthing products, typically ranging from 1-5 years depending on the product type and application.'
              },
              {
                question: 'Can you provide custom earthing solutions?',
                answer: 'Absolutely! We specialize in custom earthing solutions tailored to your specific requirements and site conditions.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <h3 className="text-lg font-semibold mb-3 text-secondary-900 dark:text-white">
                  {faq.question}
                </h3>
                <p className="text-secondary-600 dark:text-secondary-300">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
