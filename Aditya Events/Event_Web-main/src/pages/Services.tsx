// import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Calendar, 
  Camera, 
  Gift, 
  Heart, 
  Star, 
  Users, 
  Sparkles, 
  Music, 
  Utensils, 
  Truck 
} from 'lucide-react';

const Services = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <Calendar className="text-amber-500" size={40} />,
      title: 'Event Management',
      description: 'Comprehensive event planning and coordination services for weddings, corporate events, birthdays, and special celebrations. We handle everything from venue selection to day-of coordination.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80'
    },
    {
      icon: <Heart className="text-amber-500" size={40} />,
      title: 'Wedding & Birthday Decor',
      description: 'Transform your venue into a magical setting with our custom decorations. We create beautiful, themed environments that perfectly match your vision and style.',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      icon: <Star className="text-amber-500" size={40} />,
      title: 'Car & Stage Decoration',
      description: 'Elegant and eye-catching decorations for vehicles and stages that add a touch of luxury to your event. Perfect for making grand entrances and creating stunning focal points.',
      image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      icon: <Camera className="text-amber-500" size={40} />,
      title: 'Photography & Videography',
      description: 'Capture your precious moments with our professional photography and videography services. We offer drone shots, candid photography, and cinematic videos to preserve your memories.',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1164&q=80'
    },
    {
      icon: <Users className="text-amber-500" size={40} />,
      title: 'Pre-Wedding Shoots',
      description: 'Stunning pre-wedding photoshoots that tell your unique love story in creative and artistic ways. We scout beautiful locations and create memorable experiences.',
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80'
    },
    {
      icon: <Gift className="text-amber-500" size={40} />,
      title: 'Customized Gifts & Photo Frames',
      description: 'Personalized gifts and photo frames that make perfect keepsakes and mementos for your guests. We create custom designs that reflect your event theme and personal style.',
      image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80'
    },
    {
      icon: <Sparkles className="text-amber-500" size={40} />,
      title: 'Special Effects',
      description: 'Enhance your event with special effects like fog machines, bubble machines, confetti cannons, and professional lighting to create magical moments and atmosphere.',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
    },
    {
      icon: <Music className="text-amber-500" size={40} />,
      title: 'Entertainment Services',
      description: 'Book professional DJs, live bands, dancers, and performers through our entertainment services to keep your guests engaged and entertained throughout your event.',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      icon: <Utensils className="text-amber-500" size={40} />,
      title: 'Catering Coordination',
      description: 'We work with top caterers to provide delicious food and beverage options for your event, from elegant sit-down dinners to casual buffets and themed food stations.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      icon: <Truck className="text-amber-500" size={40} />,
      title: 'Logistics & Transportation',
      description: 'We handle all logistics including transportation for guests, equipment delivery, setup and teardown, ensuring your event runs smoothly from start to finish.',
      image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <motion.section
        ref={headerRef}
        className="relative py-20 bg-gradient-amber-pink text-white"
        initial={{ opacity: 0 }}
        animate={headerInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        style={{
          backgroundImage: 'linear-gradient(to right, var(--color-amber-500), var(--color-pink-500))'
        }}
      >
        <div className="container text-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={headerInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md-text-5xl font-serif font-bold mb-4"
          >
            Our Premium Services
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={headerInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            From concept to execution, we provide comprehensive event management and creative services to make your special occasions truly memorable.
          </motion.p>
        </div>
      </motion.section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 gap-16">
            {services.map((service, index) => {
              const [serviceRef, serviceInView] = useInView({
                triggerOnce: true,
                threshold: 0.1,
              });

              return (
                <motion.div
                  key={index}
                  ref={serviceRef}
                  initial={{ y: 50, opacity: 0 }}
                  animate={serviceInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8 }}
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'md-flex-row' : 'md-flex-row-reverse'
                  } gap-8 items-center`}
                >
                  <div className="md-w-1/2">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={serviceInView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="rounded-xl overflow-hidden shadow-lg hover-shadow-xl transition-all"
                      style={{
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-80 object-cover"
                      />
                    </motion.div>
                  </div>
                  <div className="md-w-1/2">
                    <motion.div
                      initial={{ x: index % 2 === 0 ? 30 : -30, opacity: 0 }}
                      animate={serviceInView ? { x: 0, opacity: 1 } : {}}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      <div className="mb-4">{service.icon}</div>
                      <h2 className="text-2xl md-text-3xl font-bold mb-4">
                        {service.title}
                      </h2>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      {/* <button className="btn btn-primary hover-shadow-lg hover-scale-105">
                        Learn More
                      </button> */}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Create Unforgettable Memories?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your event needs and get a personalized quote. We're here to turn your vision into reality.
          </p>
          <a
            href="/contact"
            className="btn btn-primary hover-shadow-lg hover-scale-105"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;