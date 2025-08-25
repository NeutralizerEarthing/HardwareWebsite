import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Zap, Shield, Users, Award, CheckCircle, ArrowRight, Star, MapPin, Phone, Mail } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [introRef, introInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [testimonialsRef, testimonialsInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [statsRef, statsInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const services = [
    {
      icon: Zap,
      title: 'Copper Earthing Electrodes',
      description: 'High-quality copper earthing electrodes for superior conductivity and long-lasting performance.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'GI Earthing Solutions',
      description: 'Galvanized iron earthing systems designed for durability and corrosion resistance.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: CheckCircle,
      title: 'Earthing Pit Covers',
      description: 'Professional earthing pit covers ensuring safety and easy maintenance access.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Installation Services',
      description: 'Expert installation and maintenance services for all earthing systems.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control for all earthing products.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Star,
      title: 'Technical Support',
      description: '24/7 technical support and consultation for earthing solutions.',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const features = [
    {
      icon: CheckCircle,
      title: '100% Copper Quality',
      description: 'Premium copper materials ensuring maximum conductivity and longevity.'
    },
    {
      icon: CheckCircle,
      title: 'IS Standards Compliant',
      description: 'All products meet Indian Standards for safety and performance.'
    },
    {
      icon: CheckCircle,
      title: 'Corrosion Resistant',
      description: 'Advanced coating technology for protection against environmental factors.'
    },
    {
      icon: CheckCircle,
      title: 'Easy Installation',
      description: 'User-friendly design for quick and hassle-free installation.'
    },
    {
      icon: CheckCircle,
      title: 'Low Maintenance',
      description: 'Durable construction requiring minimal maintenance over time.'
    },
    {
      icon: CheckCircle,
      title: 'Warranty Protected',
      description: 'Comprehensive warranty coverage for peace of mind.'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      position: 'Electrical Engineer',
      company: 'Tata Power',
      rating: 5,
      text: 'Neutralizer Earthing has been our trusted partner for over 5 years. Their copper earthing electrodes are of exceptional quality and their service is outstanding.'
    },
    {
      name: 'Priya Sharma',
      position: 'Project Manager',
      company: 'L&T Construction',
      rating: 5,
      text: 'The installation team from Neutralizer Earthing is highly professional. They completed our earthing system installation on time and with excellent quality.'
    },
    {
      name: 'Amit Patel',
      position: 'Chief Engineer',
      company: 'Reliance Industries',
      rating: 5,
      text: 'We have been using Neutralizer Earthing products for our industrial facilities. Their products meet all safety standards and perform exceptionally well.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '25+', label: 'Years Experience', icon: Award },
    { number: '100%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Phone }
  ];

  const scrollToContent = () => {
    document.getElementById('intro-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container-custom text-center text-white z-10">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="text-gradient">Neutralizer</span> Earthing
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200"
          >
            Leading manufacturer of high-quality earthing solutions with commitment to safety, reliability, and excellence
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="btn-primary text-lg px-8 py-4">
              Explore Products
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              Get Quote
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce-slow"
        >
          <ChevronDown size={32} />
        </motion.button>
      </section>

      {/* Intro Section */}
      <section 
        id="intro-section"
        ref={introRef}
        className="section-padding bg-white dark:bg-secondary-900"
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={introInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary-900 dark:text-white">
                Your Trusted Partner in Earthing Solutions
              </h2>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 leading-relaxed mb-6">
                At Neutralizer Earthing, we specialize in manufacturing high-quality earthing electrodes and systems. 
                With over 25 years of experience, we have established ourselves as a leading name in the electrical 
                safety industry, providing reliable solutions that protect lives and equipment.
              </p>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 leading-relaxed mb-8">
                Our commitment to quality, innovation, and customer satisfaction has made us the preferred choice 
                for industries, commercial establishments, and residential projects across India.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary flex items-center justify-center">
                  Learn More
                  <ArrowRight size={20} className="ml-2" />
                </button>
                <button className="btn-secondary">
                  Download Catalog
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={introInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Earthing Solutions" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full opacity-20 animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        ref={servicesRef}
        className="section-padding bg-secondary-50 dark:bg-secondary-800"
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary-900 dark:text-white">
              Our Products & Services
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
              Comprehensive earthing solutions designed to meet the highest safety standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="card p-8 text-center group bg-white dark:bg-secondary-900 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-secondary-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-secondary-600 dark:text-secondary-300">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        ref={featuresRef}
        className="section-padding bg-white dark:bg-secondary-900"
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={featuresInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary-900 dark:text-white">
                Why Choose Our Products?
              </h2>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-8 leading-relaxed">
                Our earthing solutions are designed with the highest quality materials and engineering standards 
                to ensure maximum safety and performance for your electrical systems.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={featuresInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <feature.icon size={16} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900 dark:text-white mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-secondary-600 dark:text-secondary-300">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={featuresInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Quality Assurance" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full opacity-20 animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        ref={statsRef}
        className="section-padding bg-gradient-primary text-white"
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={32} className="text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-200">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        ref={testimonialsRef}
        className="section-padding bg-secondary-50 dark:bg-secondary-800"
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary-900 dark:text-white">
              What Our Clients Say
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
              Trusted by leading companies across India for their earthing solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="card p-8 bg-white dark:bg-secondary-900"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-secondary-600 dark:text-secondary-300 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold text-secondary-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-secondary-600 dark:text-secondary-300">
                    {testimonial.position}, {testimonial.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white dark:bg-secondary-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary-900 dark:text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-300 mb-8 leading-relaxed">
              Contact us today to discuss your earthing requirements and get a customized solution for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Get Free Quote
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
