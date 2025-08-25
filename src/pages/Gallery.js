import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ZoomIn, X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Generate 21 product images
  const productImages = Array.from({ length: 21 }, (_, index) => ({
    id: index + 1,
    title: `Product ${index + 1}`,
    image: `/photos/${index + 1}.jpeg`,
    description: `High-quality product image showcasing our industrial hardware solutions.`
  }));

  // Generate 9 event images
  const eventImages = Array.from({ length: 9 }, (_, index) => ({
    id: index + 1,
    title: `Event ${index + 1}`,
    image: `/event2/ev${index + 1}.jpeg`,
    description: `Event image showcasing our participation and activities.`
  }));

  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-secondary-900">
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Our <span className="text-accent-300">Gallery</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Explore our products and events
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 bg-white dark:bg-secondary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary-900 dark:text-white">
              Our <span className="text-accent-300">Products</span>
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">
              Explore our comprehensive range of industrial hardware solutions
            </p>
          </motion.div>
          
          {/* Products Grid - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productImages.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  scale: 1.02
                }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <div className="bg-white dark:bg-secondary-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-secondary-700">
                  <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-800" style={{ height: '256px' }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block'
                      }}
                      className="group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        console.error(`Failed to load image: ${item.image}`);
                        e.target.style.display = 'none';
                      }}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white">
                          <ZoomIn size={32} className="mx-auto mb-2 opacity-80" />
                          <p className="text-sm font-medium">Click to zoom</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Image number badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2 py-1 bg-white/90 dark:bg-secondary-800/90 text-secondary-700 dark:text-secondary-300 rounded-full text-xs font-medium">
                        {item.id}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 text-secondary-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-secondary-600 dark:text-secondary-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-12 bg-gray-50 dark:bg-secondary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary-900 dark:text-white">
              <span className="text-accent-300">Events</span>
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">
              Explore our events and activities showcasing our participation
            </p>
          </motion.div>
          
          {/* Events Grid - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventImages.map((item, index) => (
              <motion.div
                key={`event-${item.id}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  scale: 1.02
                }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage({...item, type: 'event'})}
              >
                <div className="bg-white dark:bg-secondary-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-secondary-700">
                  <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-800" style={{ height: '256px' }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block'
                      }}
                      className="group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        console.error(`Failed to load image: ${item.image}`);
                        e.target.style.display = 'none';
                      }}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white">
                          <ZoomIn size={32} className="mx-auto mb-2 opacity-80" />
                          <p className="text-sm font-medium">Click to zoom</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Image number badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2 py-1 bg-white/90 dark:bg-secondary-800/90 text-secondary-700 dark:text-secondary-300 rounded-full text-xs font-medium">
                        {item.id}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 text-secondary-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-secondary-600 dark:text-secondary-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 text-white transition-all duration-300 hover:scale-110"
            >
              <X size={24} />
            </button>
            
            {/* Image Container */}
            <div className="bg-white dark:bg-secondary-800 rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative w-full h-96">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                  className="bg-gray-100 dark:bg-secondary-700"
                  onError={(e) => {
                    console.error(`Modal image failed to load: ${selectedImage.image}`);
                  }}
                />
              </div>
              
              {/* Image Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium">
                    {selectedImage.type === 'event' ? 'Event' : 'Product'} {selectedImage.id}
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-3 text-secondary-900 dark:text-white">
                  {selectedImage.title}
                </h2>
                <p className="text-secondary-600 dark:text-secondary-300">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;
