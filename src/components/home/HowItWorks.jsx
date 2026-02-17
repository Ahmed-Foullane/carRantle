import { motion } from 'framer-motion';
import { FaSearch, FaCreditCard, FaKey } from 'react-icons/fa';

const steps = [
  {
    icon: FaSearch,
    title: 'Recherchez',
    description: 'Explorez notre flotte exclusive et choisissez le véhicule qui correspond à votre style.',
  },
  {
    icon: FaCreditCard,
    title: 'Réservez',
    description: 'Réservez en ligne en quelques clics avec notre processus sécurisé et transparent.',
  },
  {
    icon: FaKey,
    title: 'Roulez',
    description: 'Récupérez vos clés et vivez l\'expérience de conduite ultime, sans compromis.',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-lux-black relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl text-white mb-4">
            Comment ça <span className="text-lux-red">Marche</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Une expérience de location simplifiée pour vous mettre au volant plus rapidement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-lux-red/50 to-transparent z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 bg-neutral-900 border border-white/10 rounded-full flex items-center justify-center mb-6 group-hover:border-lux-red transition-colors duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                <step.icon className="text-3xl text-lux-white group-hover:text-lux-red transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-display text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed px-4">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
