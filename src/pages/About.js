import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Globe, Target, TrendingUp, CheckCircle, Shield, Clock, Truck, Headphones, Leaf, Zap } from 'lucide-react';

const About = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [companyRef, companyInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [whyChooseRef, whyChooseInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [missionRef, missionInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [certificatesRef, certificatesInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [eventsRef, eventsInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [certificationsRef, certificationsInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const whyChooseUs = [
    {
      icon: Clock,
      title: 'Over a decade of expertise',
      description: 'in earthing solutions',
      color: 'from-blue-500 to-cyan-500',
      delay: 0.1
    },
    {
      icon: Shield,
      title: 'High-quality, durable',
      description: 'and corrosion-resistant products',
      color: 'from-green-500 to-emerald-500',
      delay: 0.2
    },
    {
      icon: Award,
      title: 'Advanced manufacturing',
      description: 'with strict quality control',
      color: 'from-purple-500 to-pink-500',
      delay: 0.3
    },
    {
      icon: TrendingUp,
      title: 'Competitive pricing',
      description: 'with cost-effective solutions',
      color: 'from-yellow-500 to-orange-500',
      delay: 0.4
    },
    {
      icon: Target,
      title: 'Customization',
      description: 'to meet specific project needs',
      color: 'from-red-500 to-pink-500',
      delay: 0.5
    },
    {
      icon: Truck,
      title: 'Timely delivery',
      description: 'with a strong distribution network',
      color: 'from-indigo-500 to-blue-500',
      delay: 0.6
    },
    {
      icon: Headphones,
      title: 'Dedicated customer support',
      description: 'and technical assistance',
      color: 'from-teal-500 to-cyan-500',
      delay: 0.7
    },
    {
      icon: Leaf,
      title: 'Commitment to eco-friendly',
      description: 'and sustainable practices',
      color: 'from-green-500 to-teal-500',
      delay: 0.8
    }
  ];

  const certificateData = [
    { id: 1, title: 'ISO 9001:2015', description: 'Quality Management System' },
    { id: 2, title: 'ISO 14001:2015', description: 'Environmental Management' },
    { id: 3, title: 'OHSAS 18001:2007', description: 'Occupational Health & Safety' },
    { id: 4, title: 'CE Marking', description: 'European Conformity' },
    { id: 5, title: 'BIS Certification', description: 'Bureau of Indian Standards' },
    { id: 6, title: 'RoHS Compliance', description: 'Restriction of Hazardous Substances' }
  ];

  const eventData = [
    { id: 1, title: 'Electrex India 2024', description: 'Electrical & Electronics Exhibition' },
    { id: 2, title: 'PowerGen India 2024', description: 'Power Generation & Distribution' },
    { id: 3, title: 'Industrial Expo 2024', description: 'Manufacturing & Industrial Solutions' },
    { id: 4, title: 'TechExpo 2024', description: 'Technology & Innovation Showcase' },
    { id: 5, title: 'Safety Summit 2024', description: 'Industrial Safety & Compliance' },
    { id: 6, title: 'Green Energy Expo', description: 'Sustainable Energy Solutions' }
  ];

  const certifications = [
    { id: 1, title: 'ISO 9001:2008', description: 'Quality Management System' },
    { id: 2, title: 'AS9100', description: 'Aerospace Quality Management' },
    { id: 3, title: 'CPRI, India', description: 'Central Power Research Institute' },
    { id: 4, title: 'NABL', description: 'National Accreditation Board for Testing' },
    { id: 5, title: 'IEC', description: 'International Electrotechnical Commission' },
    { id: 6, title: 'RoHS Compliant', description: 'Restriction of Hazardous Substances' },
    { id: 7, title: 'UL Listed', description: 'Underwriters Laboratories Lightning' },
    { id: 8, title: 'CE', description: 'European Conformity Marking' }
  ];

  const qualityManagement = [
    'We follow standardized processes',
    'We follow ISO 9001:2008 guidelines',
    'We practice lean office',
    'We focus on continuous improvement',
    'We plan and do it right the first time',
    'Customer satisfaction is our prime goal',
    'We optimize costs to maximize profitability',
    'We work and play as a team'
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section 
        ref={headerRef}
        className="section-padding bg-gradient-primary text-white"
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-accent-300">Neutralizer</span> Earthing
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              A Trusted Name in Earthing Solutions - Providing efficient and long-lasting grounding solutions since 2010.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section 
        ref={companyRef}
        className="section-padding bg-white dark:bg-secondary-900"
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={companyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary-900 dark:text-white">
                Neutralizer Earthing – A Trusted Name in Earthing Solutions
              </h2>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-6 leading-relaxed">
                Established in 2010, Neutralizer Earthing is a leading manufacturer of GI earthing pipes, copper earthing plates, 
                earthing strips, and other high-quality earthing materials. Based in Pune, Maharashtra, we specialize in providing 
                efficient and long-lasting grounding solutions for industrial, commercial, and residential applications.
              </p>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-6 leading-relaxed">
                We collaborate with trusted vendors who use state-of-the-art machinery to ensure precise production and seamless 
                processes. Our commitment to quality, innovation, and customer satisfaction has made us a well-recognized name in the industry.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-secondary-700 dark:text-secondary-300">Established in 2010</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-secondary-700 dark:text-secondary-300">Based in Pune, Maharashtra</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-secondary-700 dark:text-secondary-300">Leading Manufacturer</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={companyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Neutralizer Earthing Manufacturing Facility" 
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full opacity-20 animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section 
        ref={whyChooseRef}
        className="section-padding bg-secondary-50 dark:bg-secondary-800"
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={whyChooseInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary-900 dark:text-white">
              🚀 Why Choose Us?
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
              We provide comprehensive earthing solutions with unmatched quality and reliability
            </p>
          </motion.div>

                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {whyChooseUs.map((item, index) => (
               <motion.div
                 key={item.title}
                 initial={{ opacity: 0, y: 50 }}
                 animate={whyChooseInView ? { opacity: 1, y: 0 } : {}}
                 transition={{ duration: 0.6, delay: item.delay }}
                 whileHover={{ y: -5, scale: 1.02 }}
                 className="card p-6 text-center group hover:shadow-xl transition-all duration-300 bg-white dark:bg-secondary-800 border border-gray-100 dark:border-secondary-700"
               >
                 <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                   <item.icon size={24} className="text-white" />
                 </div>
                 <h3 className="text-lg font-semibold mb-2 text-secondary-900 dark:text-white">
                   {item.title}
                 </h3>
                 <p className="text-sm text-secondary-600 dark:text-secondary-300">
                   {item.description}
                 </p>
               </motion.div>
             ))}
           </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section 
        ref={missionRef}
        className="section-padding bg-white dark:bg-secondary-900"
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary-900 dark:text-white">
              🌍 Mission & Vision
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
              Driving the future of earthing solutions with sustainable and innovative practices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="card p-8 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-secondary-900 dark:text-white">
                Our Mission
              </h3>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 leading-relaxed">
                To provide durable, cost-effective, and reliable earthing solutions while continuously innovating 
                to enhance product quality and customer satisfaction.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ y: -5 }}
              className="card p-8 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-secondary-900 dark:text-white">
                Our Vision
              </h3>
              <p className="text-lg text-secondary-600 dark:text-secondary-300 leading-relaxed">
                To become a globally recognized leader in earthing solutions, promoting sustainable and 
                eco-friendly grounding practices.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Certificates Section */}
      <section 
        ref={certificatesRef}
        className="section-padding bg-secondary-50 dark:bg-secondary-800"
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={certificatesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary-900 dark:text-white">
              🏆 Our Certificates
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
              Recognized for our quality standards and industry excellence
            </p>
          </motion.div>

                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {certificateData.map((cert, index) => (
               <motion.div
                 key={cert.id}
                 initial={{ opacity: 0, y: 50 }}
                 animate={certificatesInView ? { opacity: 1, y: 0 } : {}}
                 transition={{ duration: 0.6, delay: index * 0.1 }}
                 whileHover={{ y: -5, scale: 1.02 }}
                 className="card overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-secondary-800 border border-gray-200 dark:border-secondary-700"
               >
                 <div className="relative overflow-hidden">
                   <img 
                     src={`/certificate/certificate${cert.id}.jpg`}
                     alt={`Certificate ${cert.id}`}
                     className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                     onError={(e) => {
                       console.log(`Failed to load certificate${cert.id}.jpg`);
                       e.target.style.display = 'none';
                     }}
                   />
                   <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                   <div className="absolute top-4 right-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                     Certificate
                   </div>
                   <div className="absolute bottom-4 left-4 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white px-3 py-1 rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                     View Details
                   </div>
                 </div>
                 <div className="p-4">
                   <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
                     {cert.title}
                   </h3>
                   <p className="text-sm text-secondary-600 dark:text-secondary-300">
                     {cert.description}
                   </p>
                 </div>
               </motion.div>
             ))}
           </div>
        </div>
      </section>

      {/* Our Events Section */}
      <section 
        ref={eventsRef}
        className="section-padding bg-white dark:bg-secondary-900"
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={eventsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary-900 dark:text-white">
              🎉 Our Events
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
              Showcasing our participation in industry events and exhibitions
            </p>
          </motion.div>

                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {eventData.map((event, index) => (
               <motion.div
                 key={event.id}
                 initial={{ opacity: 0, y: 50 }}
                 animate={eventsInView ? { opacity: 1, y: 0 } : {}}
                 transition={{ duration: 0.6, delay: index * 0.1 }}
                 whileHover={{ y: -5, scale: 1.02 }}
                 className="card overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-secondary-800 border border-gray-200 dark:border-secondary-700"
               >
                 <div className="relative overflow-hidden">
                   <img 
                     src={`/event/event${event.id}.jpeg`}
                     alt={`Event ${event.id}`}
                     className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                     onError={(e) => {
                       console.log(`Failed to load event${event.id}.jpeg`);
                       e.target.style.display = 'none';
                     }}
                   />
                   <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                   <div className="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                     Event
                   </div>
                   <div className="absolute bottom-4 left-4 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white px-3 py-1 rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                     View Details
                   </div>
                 </div>
                 <div className="p-4">
                   <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
                     {event.title}
                   </h3>
                   <p className="text-sm text-secondary-600 dark:text-secondary-300">
                     {event.description}
                   </p>
                 </div>
               </motion.div>
             ))}
           </div>
                 </div>
       </section>

       {/* Our Certifications & Quality Management Section */}
       <section 
         ref={certificationsRef}
         className="section-padding bg-secondary-50 dark:bg-secondary-800"
       >
         <div className="container-custom">
           <motion.div
             initial={{ opacity: 0, y: 50 }}
             animate={certificationsInView ? { opacity: 1, y: 0 } : {}}
             transition={{ duration: 0.8 }}
             className="text-center mb-16"
           >
             <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary-900 dark:text-white">
               🏆 Our Certifications & Quality Management
             </h2>
             <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
               Committed to excellence through international standards and continuous improvement
             </p>
           </motion.div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
             {/* Certifications */}
             <motion.div
               initial={{ opacity: 0, x: -50 }}
               animate={certificationsInView ? { opacity: 1, x: 0 } : {}}
               transition={{ duration: 0.8, delay: 0.2 }}
             >
               <h3 className="text-2xl font-bold mb-6 text-secondary-900 dark:text-white flex items-center">
                 📜 Certifications
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {certifications.map((cert, index) => (
                   <motion.div
                     key={cert.id}
                     initial={{ opacity: 0, y: 20 }}
                     animate={certificationsInView ? { opacity: 1, y: 0 } : {}}
                     transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                     whileHover={{ y: -2 }}
                     className="bg-white dark:bg-secondary-900 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-secondary-700"
                   >
                     <h4 className="font-semibold text-secondary-900 dark:text-white mb-1">
                       {cert.title}
                     </h4>
                     <p className="text-sm text-secondary-600 dark:text-secondary-300">
                       {cert.description}
                     </p>
                   </motion.div>
                 ))}
               </div>
             </motion.div>

             {/* Quality Management */}
             <motion.div
               initial={{ opacity: 0, x: 50 }}
               animate={certificationsInView ? { opacity: 1, x: 0 } : {}}
               transition={{ duration: 0.8, delay: 0.4 }}
             >
               <h3 className="text-2xl font-bold mb-6 text-secondary-900 dark:text-white flex items-center">
                 ⚙️ Total Quality Management
               </h3>
               <div className="space-y-4">
                 {qualityManagement.map((item, index) => (
                   <motion.div
                     key={index}
                     initial={{ opacity: 0, x: 20 }}
                     animate={certificationsInView ? { opacity: 1, x: 0 } : {}}
                     transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                     whileHover={{ x: 5 }}
                     className="flex items-start space-x-3 group"
                   >
                     <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                     <p className="text-secondary-700 dark:text-secondary-300 group-hover:text-secondary-900 dark:group-hover:text-white transition-colors duration-300">
                       {item}
                     </p>
                   </motion.div>
                 ))}
               </div>
             </motion.div>
           </div>
         </div>
       </section>

     </div>
   );
 };

export default About;
