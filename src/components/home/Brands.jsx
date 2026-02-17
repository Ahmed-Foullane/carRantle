import { motion } from 'framer-motion';

const brands = [
  'PORSCHE', 'FERRARI', 'LAMBORGHINI', 'MERCEDES-AMG', 'BMW M', 
  'AUDI RS', 'MCLAREN', 'ASTON MARTIN', 'ROLLS-ROYCE', 'TESLA'
];

const Brands = () => {
  return (
    <section className="py-10 bg-lux-black border-y border-white/5 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex gap-16 md:gap-32 px-16"
        >
          {[...brands, ...brands, ...brands].map((brand, index) => (
            <span 
              key={index} 
              className="text-2xl md:text-4xl font-display text-white/20 hover:text-white/50 transition-colors cursor-default"
            >
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;
