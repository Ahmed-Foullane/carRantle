import { motion } from 'framer-motion';
import { FaUserTie, FaHistory, FaGem, FaGlobe } from 'react-icons/fa';

const APropos = () => {
  const team = [
    { name: 'Alexandre Dubois', role: 'Fondateur & PDG', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop' },
    { name: 'Sarah Martin', role: 'Directrice Flotte', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop' },
    { name: 'Thomas Bernard', role: 'Chef Expérience Client', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop' },
    { name: 'Julie Petit', role: 'Responsable Marketing', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <div className="container mx-auto px-6 text-center mb-20">
        <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display text-white mb-6"
        >
            L'Excellence <span className="text-lux-red">Automobile</span>
        </motion.h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Depuis plus de 10 ans, LUXDRIVE redéfinit les standards de la location de voitures de prestige.
        </p>
      </div>

      {/* Mission / Vision */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <motion.div 
            whileHover={{ y: -5 }}
            className="glass-card p-8"
        >
            <FaGem className="text-4xl text-lux-gold mb-6" />
            <h2 className="text-3xl font-display text-white mb-4">Notre Mission</h2>
            <p className="text-gray-400 leading-relaxed">
                Offrir à nos clients bien plus qu'une simple location : une expérience inoubliable au volant des véhicules les plus exclusifs du monde. Nous nous engageons à fournir un service irréprochable et personnalisé.
            </p>
        </motion.div>
        <motion.div 
            whileHover={{ y: -5 }}
            className="glass-card p-8"
        >
            <FaGlobe className="text-4xl text-lux-red mb-6" />
            <h2 className="text-3xl font-display text-white mb-4">Notre Vision</h2>
            <p className="text-gray-400 leading-relaxed">
                Devenir la référence mondiale de la mobilité de luxe, en alliant technologie, passion automobile et service de conciergerie haut de gamme pour une clientèle exigeante.
            </p>
        </motion.div>
      </div>

      {/* Timeline */}
      <div className="bg-neutral-900 py-20 mb-20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-4xl font-display text-white text-center mb-16">Notre Histoire</h2>
            
            <div className="relative max-w-4xl mx-auto">
                {/* Central Line */}
                <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute left-4 md:left-1/2 top-0 w-0.5 bg-white/10 md:-translate-x-1/2"
                ></motion.div>

                <div className="space-y-12">
                    {[
                        { year: '2015', title: 'La Création', desc: 'Lancement de LUXDRIVE à Paris avec 5 véhicules.' },
                        { year: '2018', title: 'Expansion', desc: 'Ouverture des agences à Nice et Monaco.' },
                        { year: '2020', title: 'Digitalisation', desc: 'Lancement de notre plateforme de réservation 100% en ligne.' },
                        { year: '2024', title: 'Leader', desc: 'Désigné "Meilleur loueur de luxe" par AutoMoto Mag.' }
                    ].map((item, idx) => (
                        <motion.div 
                            key={idx} 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            className="relative flex flex-col md:flex-row items-center justify-between group"
                        >
                            {/* Dot */}
                            <div className="absolute top-0 left-[calc(1rem-9px)] md:left-1/2 md:-translate-x-1/2 w-5 h-5 bg-lux-black border-4 border-lux-red rounded-full z-20"></div>
                            
                            <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:text-right md:mr-auto' : 'md:ml-auto'}`}>
                                <span className="text-lux-red font-bold text-xl block mb-1">{item.year}</span>
                                <h3 className="text-white text-2xl font-bold mb-2">{item.title}</h3>
                                <p className="text-gray-400">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
      </div>

      {/* Team */}
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-display text-white text-center mb-16">L'Équipe</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {team.map((member, idx) => (
                <div key={idx} className="text-center group">
                    <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-lux-red transition-colors">
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <h3 className="text-xl text-white font-bold">{member.name}</h3>
                    <p className="text-lux-red text-sm uppercase tracking-wider">{member.role}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default APropos;
