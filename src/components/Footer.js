import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin, Youtube, Heart } from 'lucide-react';

const Footer = () => {
  const businesses = [
    'Neutralizer Earthing',
    'A K Engineering',
    'VPS Electrotech',
    'A G Borewells',
    'Tech Udyam'
  ];

  const bankDetails = [
    'HDFC BANK',
    'IFSC: HDFC0004888',
    'A/C Name: NEUTRALIZER EARTHING',
    'A/C No: 50200050185758',
    'GST Number: 27CJAPG4985M1ZP'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
         <footer className="bg-white dark:bg-secondary-900 text-secondary-700 dark:text-white relative border-t border-secondary-200 dark:border-secondary-700">
      {/* WhatsApp Icon */}
             <motion.a
         href="https://wa.me/918888081731"
         target="_blank"
         rel="noopener noreferrer"
         className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors duration-300 hover:scale-110"
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
         aria-label="Contact us on WhatsApp"
       >
                 <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      </motion.a>

      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-12">
          {/* Three Column Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
            {/* OUR BUSINESSES */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold uppercase mb-4 tracking-wide">
                OUR BUSINESSES
              </h3>
              <ul className="space-y-2">
                {businesses.map((business, index) => (
                                     <li 
                     key={index}
                     className={`text-sm transition-colors duration-300 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer ${
                       business === 'A G Borewells' ? 'underline' : ''
                     }`}
                   >
                    {business}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* BANK DETAILS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold uppercase mb-4 tracking-wide">
                BANK DETAILS
              </h3>
              <ul className="space-y-2">
                {bankDetails.map((detail, index) => (
                  <li key={index} className="text-sm">
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CONNECT WITH US */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold uppercase mb-4 tracking-wide">
                CONNECT WITH US
              </h3>
              <div className="space-y-3">
                                 <div className="flex items-center space-x-3">
                   <Mail size={16} className="text-secondary-600 dark:text-secondary-300" />
                   <span className="text-sm">neutralizerearthings@gmail.com</span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <Phone size={16} className="text-secondary-600 dark:text-secondary-300" />
                   <span className="text-sm">+91 8888081731</span>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* Red Separator Line */}
          <div className="w-full h-px bg-red-500 mb-8"></div>

          {/* Social Media Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
            
          >
            <h3 className="text-lg font-bold uppercase mb-6 tracking-wide">
              FOLLOW US
            </h3>
                         <div className="flex justify-center flex-wrap gap-4 mb-6">
              {socialLinks.map((social, index) => (
                                                  <motion.a
                   key={index}
                   href={social.href}
                   className="w-10 h-10 bg-secondary-200 dark:bg-secondary-700 rounded-full flex items-center justify-center hover:bg-secondary-300 dark:hover:bg-secondary-600 social-icon"
                   whileHover={{ scale: 1.1 }}
                   whileTap={{ scale: 0.9 }}
                   aria-label={social.label}
                 >
                   <social.icon size={20} className="text-secondary-700 dark:text-secondary-300" />
                 </motion.a>
              ))}
            </div>

            {/* Copyright */}
            <div className="flex items-center justify-center space-x-2 text-sm">
              <span>copyright © 2025</span>
              <Heart size={12} className="text-red-500 fill-current" />
              <span>Neutralizer Earthing</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
