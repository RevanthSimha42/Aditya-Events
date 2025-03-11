// import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Camera, Gift, Heart, Star, Users } from 'lucide-react';

const Home = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black-40 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80"
            alt="Elegant event decoration"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container z-20 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md-text-6xl font-serif font-bold text-white mb-4">
              Making Every Moment{' '}
              <span className="text-gradient-amber-pink">
                Unforgettable!
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations, we create bespoke events that reflect your unique style and vision.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm-flex-row justify-center gap-4"
          >
            <Link
              to="/contact"
              className="btn btn-primary text-lg hover-shadow-lg hover-scale-105"
            >
              Book Your Event Now
            </Link>
            <Link
              to="/services"
              className="btn btn-secondary text-lg"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.3)'
              }}
            >
              Explore Services
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 translate-x-neg-50 z-20">
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            <a href="#features" className="text-white opacity-80 hover-text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section
        id="features"
        ref={featuresRef}
        className="py-20 bg-gradient-white-amber"
      >
        <div className="container">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              animate={featuresInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="text-3xl md-text-4xl font-serif font-bold mb-4"
            >
              Our Premium{' '}
              <span className="text-gradient-amber-pink-bold">
                Services
              </span>
            </motion.h2>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={featuresInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              We offer a comprehensive range of event management and creative services to make your special occasions truly memorable.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-3 gap-8">
            {[
              {
                icon: <Calendar className="text-amber-500" size={40} />,
                title: 'Event Management',
                description:
                  'Full-service event planning and coordination for weddings, corporate events, and special celebrations.',
                delay: 0.2,
              },
              {
                icon: <Heart className="text-amber-500" size={40} />,
                title: 'Wedding & Birthday Decor',
                description:
                  'Beautiful decorations that transform your venue into a magical setting for your special day.',
                delay: 0.3,
              },
              {
                icon: <Camera className="text-amber-500" size={40} />,
                title: 'Photography & Videography',
                description:
                  'Capture your precious moments with our professional photography and videography services, including drone shots.',
                delay: 0.4,
              },
              {
                icon: <Gift className="text-amber-500" size={40} />,
                title: 'Customized Gifts',
                description:
                  'Personalized gifts and photo frames that make perfect keepsakes and mementos for your guests.',
                delay: 0.5,
              },
              {
                icon: <Users className="text-amber-500" size={40} />,
                title: 'Pre-Wedding Shoots',
                description:
                  'Stunning pre-wedding photoshoots that tell your unique love story in creative and artistic ways.',
                delay: 0.6,
              },
              {
                icon: <Star className="text-amber-500" size={40} />,
                title: 'Car & Stage Decoration',
                description:
                  'Elegant and eye-catching decorations for vehicles and stages that add a touch of luxury to your event.',
                delay: 0.7,
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={featuresInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: service.delay }}
                className="card p-6 hover-shadow-xl hover-translate-y-neg-2"
                style={{
                  transition: 'all 0.3s ease'
                }}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={featuresInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link
                to="/services"
                className="btn btn-primary hover-shadow-lg hover-scale-105"
              >
                View All Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section
        ref={statsRef}
        className="py-16 bg-gradient-gray text-white"
      >
        <div className="container">
          <div className="grid grid-cols-2 md-grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Events Managed' },
              { number: '200+', label: 'Happy Couples' },
              { number: '50+', label: 'Corporate Clients' },
              { number: '100%', label: 'Satisfaction Rate' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={statsInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-4"
              >
                <div className="text-3xl md-text-4xl font-bold mb-2 text-gradient-amber-pink">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="py-20 bg-gradient-amber-white"
      >
        <div className="container">
          <div className="bg-gradient-amber-pink rounded-2xl overflow-hidden shadow-xl">
            <div className="flex flex-col md-flex-row">
              <div className="md-w-1/2 p-8 md-p-12 flex items-center">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={ctaInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-3xl md-text-4xl font-serif font-bold text-white mb-4">
                    Ready to Create Unforgettable Memories?
                  </h2>
                  <p className="text-white opacity-90 mb-8">
                    Let us help you plan your next event. Contact us today for a free consultation and quote.
                  </p>
                  <Link
                    to="/contact"
                    className="btn btn-white hover-shadow-lg hover-scale-105"
                  >
                    Get in Touch
                  </Link>
                </motion.div>
              </div>
              <div className="md-w-1/2">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={ctaInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.8 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                    alt="Celebration"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;