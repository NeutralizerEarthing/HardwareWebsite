import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink, Star, Zap, Shield, Award, CheckCircle } from 'lucide-react';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  console.log('Products component is rendering');

  const products = [
    {
      id: 1,
      name: 'NE GI EARTHING ELECTRODE (PIPE IN STRIP)',
      category: 'Earthing Solutions',
      price: 'Contact Us',
      image: '/products/product1.png',
      description: 'Hot dip galvanized earthing electrode with superior corrosion protection and fast fault current dissipation.',
      rating: 4.9,
      reviews: 156,
      inStock: true,
      icon: Shield,
      color: 'from-blue-500 to-cyan-500',
      specifications: [
        { model: '48 MNEPG', length: '1,2,3 & 6', terminal: '40x6', innerStrip: '25x3', diameter: '48' },
        { model: '58 MNEPG', length: '1,2,3 & 6', terminal: '50x6', innerStrip: '25x3', diameter: '58' },
        { model: '76 MNEPG', length: '1,2,3 & 6', terminal: '50x6', innerStrip: '25x3', diameter: '76' },
        { model: '88 MNEPG', length: '1,2,3 & 6', terminal: '50x6', innerStrip: '25x3', diameter: '88' }
      ],
      features: [
        '✅ Hot dip galvanized for corrosion protection',
        '⚡ Designed for fast fault current dissipation',
        '🔧 Low maintenance on site',
        '⏳ Easy & fast installation on site',
        '🌍 Suitable for soil with pH 5.0 to 8.0',
        '💧 Moisture booster chemical bags provided for low earth resistance'
      ]
    },
    {
      id: 2,
      name: 'NE Copper Terminal Earthing Electrode',
      category: 'Earthing Solutions',
      price: 'Contact Us',
      image: '/products/product2.png',
      description: 'Copper terminal earthing electrode with enhanced conductivity and durability.',
      rating: 4.8,
      reviews: 142,
      inStock: true,
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      specifications: [
        { model: '48 MNECT', length: '1,2,3 & 6', terminal: '40x6', innerStrip: '25x3', diameter: '48' },
        { model: '58 MNECT', length: '1,2,3 & 6', terminal: '50x6', innerStrip: '25x3', diameter: '58' },
        { model: '76 MNECT', length: '1,2,3 & 6', terminal: '50x6', innerStrip: '25x3', diameter: '76' },
        { model: '88 MNECT', length: '1,2,3 & 6', terminal: '50x6', innerStrip: '25x3', diameter: '88' }
      ],
      features: [
        '✅ Hot dip galvanized for corrosion protection',
        '⚡ Designed for fast fault current dissipation',
        '🔧 Low maintenance on site',
        '⏳ Easy & fast installation on site',
        '🌍 Suitable for soil with pH 5.0 to 8.0',
        '💧 Moisture booster chemical bags provided for low earth resistance'
      ]
    },
    {
      id: 3,
      name: 'NE Pure Copper Earthing Electrode',
      category: 'Earthing Solutions',
      price: 'Contact Us',
      image: '/products/product3.png',
      description: '100% pure copper earthing electrode for maximum conductivity and long life.',
      rating: 4.9,
      reviews: 98,
      inStock: true,
      icon: Award,
      color: 'from-purple-500 to-pink-500',
      specifications: [
        { model: '48 MNEPC', length: '1,2,3 & 6', terminal: '40x6', innerStrip: '25x3', diameter: '48' },
        { model: '58 MNEPC', length: '1,2,3 & 6', terminal: '50x6', innerStrip: '25x3', diameter: '58' },
        { model: '76 MNEPC', length: '1,2,3 & 6', terminal: '50x6', innerStrip: '25x3', diameter: '76' },
        { model: '88 MNEPC', length: '1,2,3 & 6', terminal: '50x6', innerStrip: '25x3', diameter: '88' }
      ],
      features: [
        '🟠 Used 100% copper for long life',
        '⚡ Designed for fast fault current dissipation',
        '🔧 Low maintenance on site',
        '⏳ Easy & fast installation on site',
        '🌍 Most suitable for soil condition with pH value 5.0 to 8.0',
        '💧 Moisture booster chemical bags provided for low earth resistance'
      ]
    },
    {
      id: 4,
      name: 'NE Copper Bonded Earthing Electrode',
      category: 'Earthing Solutions',
      price: 'Contact Us',
      image: '/products/product4.png',
      description: 'Copper bonded earthing electrode with enhanced conductivity and long life.',
      rating: 4.7,
      reviews: 134,
      inStock: true,
      icon: CheckCircle,
      color: 'from-green-500 to-emerald-500',
      specifications: [
        { model: '48 MNECB', length: '1,2,3 & 6', terminal: '40x6', innerStrip: '25x3', diameter: '48' },
        { model: '58 MNECB', length: '1,2,3 & 6', terminal: '50x6', innerStrip: '25x3', diameter: '58' },
        { model: '76 MNECB', length: '1,2,3 & 6', terminal: '50x6', innerStrip: '25x3', diameter: '76' },
        { model: '88 MNECB', length: '1,2,3 & 6', terminal: '50x6', innerStrip: '25x3', diameter: '88' }
      ],
      features: [
        '🔹 Long Life',
        '⚡ Enhance Conductivity',
        '🌍 Capacity of our earth soil electrode having pH value between 5.0 to 8.0'
      ]
    },
    {
      id: 5,
      name: 'NE GI Pipe in Pipe Earthing Electrode',
      category: 'Earthing Solutions',
      price: 'Contact Us',
      image: '/products/product5.png',
      description: 'GI pipe in pipe earthing electrode with superior corrosion protection.',
      rating: 4.8,
      reviews: 167,
      inStock: true,
      icon: Shield,
      color: 'from-indigo-500 to-blue-500',
      specifications: [
        { model: '48 MNEPG', length: '1,2,3 & 6', terminal: '40x6', innerStrip: '20 mm', diameter: '48' },
        { model: '58 MNEPG', length: '1,2,3 & 6', terminal: '50x6', innerStrip: '32 mm', diameter: '58' },
        { model: '76 MNEPG', length: '1,2,3 & 6', terminal: '50x6', innerStrip: '48 mm', diameter: '76' },
        { model: '88 MNEPG', length: '1,2,3 & 6', terminal: '50x6', innerStrip: '48 mm', diameter: '88' }
      ],
      features: [
        '🛡️ Hot dip galvanized for superior corrosion protection',
        '⚡ Designed for fast fault current dissipation ensuring safety',
        '🔧 Low maintenance for hassle-free performance',
        '⏳ Easy & fast installation for quick setup on-site',
        '🌍 Ideal for soil conditions with pH value between 5.0 to 8.0',
        '💧 Moisture booster chemical bags provided for low earth resistance'
      ]
    },
    {
      id: 6,
      name: 'Earthing Pit Cover',
      category: 'Earthing Accessories',
      price: 'Contact Us',
      image: '/products/product6.png',
      description: 'Heavy-duty polyethylene earthing pit cover with factory-built holes for easy access.',
      rating: 4.6,
      reviews: 89,
      inStock: true,
      icon: CheckCircle,
      color: 'from-teal-500 to-cyan-500',
      specifications: [
        { spec: 'At Top', details: '10 inches (254mm)' },
        { spec: 'At Bottom', details: '13 inches (330mm)' },
        { spec: 'Height', details: '10.25 inches (260mm)' }
      ],
      features: [
        '🛠️ Factory-built holes for easy access to strips/wires on both sides',
        '🏗️ Made of heavy-duty polyethylene for extra durability',
        '🛡️ Resistant materials, ensuring a long service life',
        '🌿 Green top cap blends seamlessly with the environment'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-secondary-900">
      
      {/* Header */}
      <section className="py-8 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Our <span className="text-accent-300">Products</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Discover our comprehensive range of industrial hardware solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 bg-white dark:bg-secondary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -2 }}
                className="bg-white dark:bg-secondary-800 rounded-lg shadow-sm border border-gray-200 dark:border-secondary-700 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* Product Image - Left Side for odd products, Right Side for even products */}
                  {product.id % 2 === 1 ? (
                    // Odd products (1,3,5): Image on left, content on right
                    <>
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
                        className="relative overflow-hidden cursor-pointer bg-white flex items-center justify-center p-4"
                        onClick={() => setSelectedProduct(product)}
                      >
                        <div className="relative w-full h-56 lg:h-64 flex items-center justify-center">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="max-w-full max-h-full object-contain bg-white hover:scale-105 transition-transform duration-500"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                          
                          {/* Fallback placeholder */}
                          <div className="hidden absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-secondary-700">
                            <div className="text-center text-gray-500 dark:text-gray-400">
                              <product.icon size={32} className="mx-auto mb-1" />
                              <p className="text-xs">Product Image</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                      
                      {/* Product Content - Right Side for odd products */}
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                        className="lg:col-span-2 p-6"
                      >
                        {/* Product Title */}
                        <h2 className="text-xl font-bold mb-4 text-secondary-900 dark:text-white">
                          {product.id}-{product.name}
                        </h2>
                        
                        {/* Specifications Table */}
                        {product.specifications && (
                          <div className="mb-4">
                            <div className="bg-gray-50 dark:bg-secondary-800 rounded border border-gray-200 dark:border-secondary-700 overflow-hidden">
                              {product.id === 6 ? (
                                // Special format for Earthing Pit Cover
                                <>
                                  <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-secondary-700 p-2">
                                    <div>Specification</div>
                                    <div>Details</div>
                                  </div>
                                  {product.specifications.map((spec, specIndex) => (
                                    <div key={specIndex} className="grid grid-cols-2 gap-2 text-xs border-t border-gray-200 dark:border-secondary-700 p-2 bg-white dark:bg-secondary-800">
                                      <div className="font-medium text-secondary-900 dark:text-white">{spec.spec}</div>
                                      <div className="text-secondary-600 dark:text-secondary-300">{spec.details}</div>
                                    </div>
                                  ))}
                                </>
                              ) : (
                                // Standard format for other products
                                <>
                                  <div className="grid grid-cols-5 gap-2 text-xs font-semibold text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-secondary-700 p-2">
                                    <div>Model</div>
                                    <div>Length (Mtr)</div>
                                    <div>Terminal Size</div>
                                    <div>Inner Strip</div>
                                    <div>Outer Pipe Diameter (mm)</div>
                                  </div>
                                  {product.specifications.map((spec, specIndex) => (
                                    <div key={specIndex} className="grid grid-cols-5 gap-2 text-xs border-t border-gray-200 dark:border-secondary-700 p-2 bg-white dark:bg-secondary-800">
                                      <div className="font-medium text-secondary-900 dark:text-white">{spec.model}</div>
                                      <div className="text-secondary-600 dark:text-secondary-300">{spec.length}</div>
                                      <div className="text-secondary-600 dark:text-secondary-300">{spec.terminal}</div>
                                      <div className="text-secondary-600 dark:text-secondary-300">{spec.innerStrip}</div>
                                      <div className="text-secondary-600 dark:text-secondary-300">{spec.diameter}</div>
                                    </div>
                                  ))}
                                </>
                              )}
                            </div>
                          </div>
                        )}
                        
                        {/* Features List */}
                        {product.features && (
                          <div className="mb-4">
                            <div className="space-y-1">
                              {product.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-start space-x-2">
                                  <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                  <p className="text-xs text-secondary-600 dark:text-secondary-300">{feature}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-secondary-700">
                          <div className="text-sm font-bold text-primary-600 dark:text-primary-400">
                            {product.price}
                          </div>
                          <button 
                            className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-1.5 px-3 rounded text-xs transition-all duration-300 transform hover:scale-105"
                            onClick={() => setSelectedProduct(product)}
                          >
                            <ExternalLink size={12} className="mr-1 inline" />
                            View Details
                          </button>
                        </div>
                      </motion.div>
                    </>
                  ) : (
                    // Even products (2,4,6): Content on left, image on right
                    <>
                      {/* Product Content - Left Side for even products */}
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
                        className="lg:col-span-2 p-6"
                      >
                        {/* Product Title */}
                        <h2 className="text-xl font-bold mb-4 text-secondary-900 dark:text-white">
                          {product.id}-{product.name}
                        </h2>
                        
                        {/* Specifications Table */}
                        {product.specifications && (
                          <div className="mb-4">
                            <div className="bg-gray-50 dark:bg-secondary-800 rounded border border-gray-200 dark:border-secondary-700 overflow-hidden">
                              {product.id === 6 ? (
                                // Special format for Earthing Pit Cover
                                <>
                                  <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-secondary-700 p-2">
                                    <div>Specification</div>
                                    <div>Details</div>
                                  </div>
                                  {product.specifications.map((spec, specIndex) => (
                                    <div key={specIndex} className="grid grid-cols-2 gap-2 text-xs border-t border-gray-200 dark:border-secondary-700 p-2 bg-white dark:bg-secondary-800">
                                      <div className="font-medium text-secondary-900 dark:text-white">{spec.spec}</div>
                                      <div className="text-secondary-600 dark:text-secondary-300">{spec.details}</div>
                                    </div>
                                  ))}
                                </>
                              ) : (
                                // Standard format for other products
                                <>
                                  <div className="grid grid-cols-5 gap-2 text-xs font-semibold text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-secondary-700 p-2">
                                    <div>Model</div>
                                    <div>Length (Mtr)</div>
                                    <div>Terminal Size</div>
                                    <div>Inner Strip</div>
                                    <div>Outer Pipe Diameter (mm)</div>
                                  </div>
                                  {product.specifications.map((spec, specIndex) => (
                                    <div key={specIndex} className="grid grid-cols-5 gap-2 text-xs border-t border-gray-200 dark:border-secondary-700 p-2 bg-white dark:bg-secondary-800">
                                      <div className="font-medium text-secondary-900 dark:text-white">{spec.model}</div>
                                      <div className="text-secondary-600 dark:text-secondary-300">{spec.length}</div>
                                      <div className="text-secondary-600 dark:text-secondary-300">{spec.terminal}</div>
                                      <div className="text-secondary-600 dark:text-secondary-300">{spec.innerStrip}</div>
                                      <div className="text-secondary-600 dark:text-secondary-300">{spec.diameter}</div>
                                    </div>
                                  ))}
                                </>
                              )}
                            </div>
                          </div>
                        )}
                        
                        {/* Features List */}
                        {product.features && (
                          <div className="mb-4">
                            <div className="space-y-1">
                              {product.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-start space-x-2">
                                  <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                  <p className="text-xs text-secondary-600 dark:text-secondary-300">{feature}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-secondary-700">
                          <div className="text-sm font-bold text-primary-600 dark:text-primary-400">
                            {product.price}
                          </div>
                          <button 
                            className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-1.5 px-3 rounded text-xs transition-all duration-300 transform hover:scale-105"
                            onClick={() => setSelectedProduct(product)}
                          >
                            <ExternalLink size={12} className="mr-1 inline" />
                            View Details
                          </button>
                        </div>
                      </motion.div>
                      
                      {/* Product Image - Right Side for even products */}
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                        className="relative overflow-hidden cursor-pointer bg-white flex items-center justify-center p-4"
                        onClick={() => setSelectedProduct(product)}
                      >
                        <div className="relative w-full h-56 lg:h-64 flex items-center justify-center">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="max-w-full max-h-full object-contain bg-white hover:scale-105 transition-transform duration-500"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                          
                          {/* Fallback placeholder */}
                          <div className="hidden absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-secondary-700">
                            <div className="text-center text-gray-500 dark:text-gray-400">
                              <product.icon size={32} className="mx-auto mb-1" />
                              <p className="text-xs">Product Image</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
