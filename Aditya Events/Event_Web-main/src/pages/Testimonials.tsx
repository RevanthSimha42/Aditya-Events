import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: "Sarah & Michael Johnson",
      role: "Wedding Clients",
      image:
        "https://images.unsplash.com/photo-1623091410901-00e2d268901f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
      quote: `Celebrating Life's Moments transformed our wedding day into an absolute fairy tale. Their attention to detail and creative vision exceeded our expectations. The decorations were breathtaking, and the photography captured every precious moment perfectly. We couldn't have asked for a better team to help us celebrate the most important day of our lives!`,
      rating: 5,
    },
    {
      name: "Jennifer Williams",
      role: "Birthday Party Client",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80",
      quote: `I hired Celebrating Life's Moments for my daughter's sweet sixteen, and they delivered beyond my wildest dreams! The themed decorations were stunning, and the photography captured all the joy and excitement of the day. Their team was professional, responsive, and truly cared about making the event special. My daughter felt like a princess!`,
      rating: 5,
    },
    {
      name: "Robert Chen",
      role: "Corporate Event Manager",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
      quote: `As a corporate event manager, I've worked with many event companies, but Celebrating Life's Moments stands out for their professionalism and creativity. They handled our annual gala with precision and flair, impressing both our executives and clients. Their team was adaptable, responsive, and delivered a sophisticated event that aligned perfectly with our brand.`,
      rating: 5,
    },
    {
      name: "Priya & Arjun Patel",
      role: "Wedding Clients",
      image:
        "https://images.unsplash.com/photo-1565608087341-404b25492fee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
      quote: `We are so grateful to Celebrating Life's Moments for making our wedding a truly magical experience. From the stunning mandap decoration to the beautiful car setup, every detail was perfect. Their pre-wedding photoshoot was creative and captured our love story beautifully. The team was always available and accommodating to our cultural requests.`,
      rating: 5,
    },
    {
      name: "David Thompson",
      role: "Anniversary Party Client",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
      quote: `I surprised my wife with a 25th anniversary party planned by Celebrating Life's Moments, and it was a huge success! The vintage theme they created was elegant and nostalgic. The customized photo frames with our journey together were a beautiful touch that brought tears to everyone's eyes. Their team made the planning process stress-free and enjoyable.`,
      rating: 4,
    },
    {
      name: "Emma Rodriguez",
      role: "Baby Shower Client",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1361&q=80",
      quote: `The baby shower that Celebrating Life's Moments organized for me was absolutely perfect! The gender-neutral theme with soft colors and adorable decorations created such a warm atmosphere. Their attention to detail with personalized favors and games made the event so special. I received countless compliments from my guests!`,
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let interval: number | null = null;

    if (autoplay) {
      interval = window.setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, testimonials.length]);

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setAutoplay(false);
    setCurrentIndex(index);
  };

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
          backgroundImage:
            "linear-gradient(to right, var(--color-amber-500), var(--color-pink-500))",
        }}
      >
        <div className="container text-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={headerInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md-text-5xl font-serif font-bold mb-4"
          >
            Client Testimonials
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={headerInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Hear what our clients have to say about their experiences with our
            event management and creative services.
          </motion.p>
        </div>
      </motion.section>

      {/* Testimonial Slider */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="relative max-w-4xl mx-auto">
            {/* Testimonial Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative">
                {testimonials.map((testimonial, index) => {
                  const [testimonialRef, testimonialInView] = useInView({
                    triggerOnce: false,
                    threshold: 0.1,
                  });

                  return (
                    <motion.div
                      key={index}
                      ref={testimonialRef}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{
                        opacity: currentIndex === index ? 1 : 0,
                        x: currentIndex === index ? 0 : 100,
                        display: currentIndex === index ? "block" : "none",
                      }}
                      transition={{ duration: 0.5 }}
                      className="flex flex-col md-flex-row"
                    >
                      <div className="md-w-2/5 bg-gradient-amber-pink-br">
                        <div
                          className="h-full flex items-center justify-center p-8"
                          style={{
                            backgroundImage:
                              "linear-gradient(to bottom right, var(--color-amber-500), var(--color-pink-500))",
                          }}
                        >
                          <div className="text-center">
                            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-white">
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <h3 className="text-white text-xl font-bold">
                              {testimonial.name}
                            </h3>
                            <p className="text-white opacity-80 text-sm">
                              {testimonial.role}
                            </p>
                            <div className="flex justify-center mt-2">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  size={16}
                                  className={`${
                                    i < testimonial.rating
                                      ? "text-yellow-300 fill-yellow-300"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="md-w-3/5 p-8 md-p-12 flex items-center">
                        <div>
                          <Quote
                            size={48}
                            className="text-amber-400 mb-4 opacity-50"
                          />
                          <p className="text-gray-600 italic mb-6 leading-relaxed">
                            "{testimonial.quote}"
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute top-1/2 translate-y-neg-50 left-0 md-left-neg-8 bg-white rounded-full p-2 shadow-lg hover-bg-gray-100 transition-colors"
              style={{
                transform: "translateY(-50%)",
                left: "-1rem",
              }}
            >
              <ChevronLeft size={24} className="text-amber-500" />
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 translate-y-neg-50 right-0 md-right-neg-8 bg-white rounded-full p-2 shadow-lg hover-bg-gray-100 transition-colors"
              style={{
                transform: "translateY(-50%)",
                right: "-1rem",
              }}
            >
              <ChevronRight size={24} className="text-amber-500" />
            </button>

            {/* Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentIndex === index
                      ? "bg-gradient-amber-pink"
                      : "bg-gray-300"
                  }`}
                  style={{
                    backgroundImage:
                      currentIndex === index
                        ? "linear-gradient(to right, var(--color-amber-500), var(--color-pink-500))"
                        : "none",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            More Client Stories
          </h2>
          <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => {
              const [gridItemRef, gridItemInView] = useInView({
                triggerOnce: true,
                threshold: 0.1,
              });

              return (
                <motion.div
                  key={index}
                  ref={gridItemRef}
                  initial={{ y: 50, opacity: 0 }}
                  animate={gridItemInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md p-6 hover-shadow-lg transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${
                          i < testimonial.rating
                            ? "text-amber-400 fill-amber-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm italic">
                    "{testimonial.quote.substring(0, 150)}..."
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 bg-gradient-amber-pink text-white"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-amber-500), var(--color-pink-500))",
        }}
      >
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Create Your Own Success Story?
          </h2>
          <p className="max-w-2xl mx-auto mb-8">
            Join our happy clients and let us help you create an unforgettable
            event experience. Contact us today to get started!
          </p>
          <Link
            to="/contact"
            className="btn btn-white hover-shadow-lg hover-scale-105"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
