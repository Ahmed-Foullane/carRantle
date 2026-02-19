import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] w-full overflow-hidden bg-lux-black flex items-center">
      {/* Parallax Background Image */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
        <img
          src="/images/cars/RangeRoverSport-min.webp"
          alt="Range Rover Sport"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay with more depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-lux-black via-lux-black/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-black/30 z-10" />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 pt-10">
        <div className="max-w-4xl">
            {/* Animated Title with Shadow */}
            <div className="overflow-hidden mb-2">
                <motion.h1
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="text-white text-6xl md:text-8xl lg:text-9xl font-display leading-[0.9] drop-shadow-2xl"
                >
                DRIVE THE <br />
                <span className="text-lux-red relative inline-block filter drop-shadow-[0_0_15px_rgba(230,57,70,0.5)]">
                    EXTRAORDINARY
                </span>
                </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-100 text-lg md:text-2xl mb-10 max-w-xl font-light drop-shadow-lg"
            >
              Experience the thrill of the world's most exclusive fleet. 
              Book your dream car today in just a few clicks.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-6"
            >
              <Link
                to="/reservation"
                className="group relative px-8 py-4 bg-lux-red text-white font-bold uppercase tracking-wider overflow-hidden rounded shadow-[0_10px_30px_rgba(230,57,70,0.4)] hover:shadow-[0_15px_40px_rgba(230,57,70,0.6)] hover:-translate-y-1 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                    Réserver Maintenant
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              </Link>
              
              <Link
                to="/voitures"
                className="px-8 py-4 rounded bg-white/5 backdrop-blur-md border border-white/20 text-white font-bold uppercase tracking-wider hover:bg-white/10 hover:border-white/40 transition-all shadow-lg hover:shadow-white/5 hover:-translate-y-1"
              >
                Voir la Flotte
              </Link>
            </motion.div>
          </div>
      </div>

      {/* Sroll indicator */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 mix-blend-overlay"
      >
        <span className="text-xs text-white/70 uppercase tracking-[0.2em] font-light">Scroll Down</span>
        <motion.div 
            animate={{ height: [40, 60, 40], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] bg-gradient-to-b from-white to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
