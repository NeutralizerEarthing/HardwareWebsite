import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, Users, Award, Target, Heart, ArrowRight } from 'lucide-react';

const Career = () => {
  const [careerRef, careerInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const values = [
    {
      icon: Heart,
      title: 'Commitment',
      description: 'We are committed to excellence in everything we do'
    },
    {
      icon: Award,
      title: 'Honesty',
      description: 'Transparent communication and ethical practices'
    },
    {
      icon: Users,
      title: 'Reliability',
      description: 'Trustworthy partnerships with clients and team members'
    },
    {
      icon: Target,
      title: 'Smart Work',
      description: 'Target-oriented approach for optimal results'
    }
  ];

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
              Career <span className="text-accent-300">Opportunities</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Join PropValue Realtors and be part of our journey towards excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-white dark:bg-secondary-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary-900 dark:text-white">
                Our Values & Mission
              </h2>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-6 leading-relaxed">
                Our motto of <strong>Commitment, Honesty & Reliability</strong>, we continuously pursue the goal of identifying the best possible opportunities. We at PropValue Realtors strive each day to align with our values of excellence, commitment and mutual respect through our work trying to always improve our delivery and ourselves.
              </p>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-8 leading-relaxed">
                We ensure to maintain transparent communication, own all our projects with close cooperation and trust between the team and with our clients.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-secondary-900 dark:text-white">
                        {value.title}
                      </h3>
                      <p className="text-secondary-600 dark:text-secondary-300">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Team Collaboration" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full opacity-20 animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Market Approach */}
      <section className="section-padding bg-secondary-50 dark:bg-secondary-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary-900 dark:text-white">
              Our Approach to Success
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300 leading-relaxed mb-8">
              In today's competitive market, out of the box ideas and concepts, unconventional methods with aggressive implementation of strategies is required to sustain and be successful. Focus should be on Smart Work and Target oriented approach for the entire team.
            </p>
            <p className="text-lg text-secondary-600 dark:text-secondary-300 leading-relaxed">
              We thank you for your valuable time and attention given to us and would like to work jointly with your esteemed organization for mutual growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        ref={careerRef}
        className="section-padding bg-white dark:bg-secondary-900"
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={careerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary-900 dark:text-white">
              Join Our Team
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
              Send us your updated CV with an interesting cover letter to get started
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={careerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="card p-8 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-secondary-900 dark:text-white">
                Email Your Application
              </h3>
              <p className="text-secondary-600 dark:text-secondary-300 mb-6">
                Send your updated CV with an interesting cover letter
              </p>
              <a 
                href="mailto:propvalue.hr@gmail.com" 
                className="btn-primary inline-flex items-center"
              >
                <Mail size={16} className="mr-2" />
                propvalue.hr@gmail.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={careerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="card p-8 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-secondary-900 dark:text-white">
                Call for More Information
              </h3>
              <p className="text-secondary-600 dark:text-secondary-300 mb-6">
                For any more information, kindly contact us
              </p>
              <a 
                href="tel:+917775898869" 
                className="btn-secondary inline-flex items-center"
              >
                <Phone size={16} className="mr-2" />
                +(91)-7775898869
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
