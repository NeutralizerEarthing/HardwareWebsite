import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building, Users, Award } from 'lucide-react';

const Clients = () => {
  const [clientsRef, clientsInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const clientLogos = [
    { id: 1, name: 'ACC', logo: '/logo/ACC.png' },
    { id: 2, name: 'Adani', logo: '/logo/Adani.png' },
    { id: 3, name: 'Apollo', logo: '/logo/Apollo.png' },
    { id: 4, name: 'Bajaj', logo: '/logo/bajaj.png' },
    { id: 5, name: 'BB', logo: '/logo/bb.jpg' },
    { id: 6, name: 'Bridgestone', logo: '/logo/Bridgestone.png' },
    { id: 7, name: 'CIDCO', logo: '/logo/cidco.png' },
    { id: 8, name: 'Force', logo: '/logo/force.png' },
    { id: 9, name: 'GENCO', logo: '/logo/genco.png' },
    { id: 10, name: 'Hyundai', logo: '/logo/hyu.png' },
    { id: 11, name: 'JCB', logo: '/logo/jcb.png' },
    { id: 12, name: 'Logo', logo: '/logo/logo.png' },
    { id: 13, name: 'Mahindra', logo: '/logo/mahindra.png' },
    { id: 14, name: 'Metro', logo: '/logo/metro.png' },
    { id: 15, name: 'MH', logo: '/logo/mh.png' },
    { id: 16, name: 'MHADA', logo: '/logo/mhada.png' },
    { id: 17, name: 'Philips', logo: '/logo/Philips.png' },
    { id: 18, name: 'PMC', logo: '/logo/pmc.png' },
    { id: 19, name: 'PMC2', logo: '/logo/pmc2.png' },
    { id: 20, name: 'Reliance', logo: '/logo/Reliance.png' },
    { id: 21, name: 'Sany', logo: '/logo/Sany.png' },
    { id: 22, name: 'Tata', logo: '/logo/tata.png' },
    { id: 23, name: 'UltraTech', logo: '/logo/ultratech.png' },
    { id: 24, name: 'Unilever', logo: '/logo/Unilever.png' },
    { id: 25, name: 'Vitaran', logo: '/logo/vitaran.png' }
  ];

  const stats = [
    { icon: Building, number: '25+', label: 'Trusted Clients', color: 'from-blue-500 to-cyan-500' },
    { icon: Users, number: '10+', label: 'Years Experience', color: 'from-green-500 to-emerald-500' },
    { icon: Award, number: '100%', label: 'Client Satisfaction', color: 'from-yellow-500 to-orange-500' }
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
              Our <span className="text-accent-300">Clients</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Trusted by leading companies across various industries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white dark:bg-secondary-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon size={32} className="text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-secondary-600 dark:text-secondary-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Grid */}
      <section 
        ref={clientsRef}
        className="section-padding bg-secondary-50 dark:bg-secondary-800"
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={clientsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary-900 dark:text-white">
              Our Valued Clients
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
              We are proud to serve these prestigious organizations across various sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-8">
            {clientLogos.map((client, index) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="card p-6 text-center group bg-white dark:bg-secondary-900 hover:shadow-xl transition-all duration-300"
              >
                                 <div className="w-full h-24 flex items-center justify-center mb-4">
                   <img
                     src={client.logo}
                     alt={`${client.name} logo`}
                     className="max-w-full max-h-full object-contain transition-all duration-300"
                     onError={(e) => {
                       e.target.style.display = 'none';
                       e.target.nextSibling.style.display = 'block';
                     }}
                   />
                  <div 
                    className="hidden text-2xl font-bold text-secondary-400 dark:text-secondary-500"
                    style={{ display: 'none' }}
                  >
                    {client.name}
                  </div>
                </div>
                <h3 className="font-semibold text-secondary-900 dark:text-white text-sm">
                  {client.name}
                </h3>
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
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-300 mb-8 leading-relaxed">
              Partner with us and experience the difference that quality, innovation, and exceptional service can make for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Get Started Today
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Request Quote
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
