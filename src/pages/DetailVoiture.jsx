import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { donneesVoitures } from '../data/donneesVoitures';
import BookingBox from '../components/cars/BookingBox';
import CarCard from '../components/cars/CarCard';
import { FaCheckCircle, FaStar, FaCogs, FaGasPump, FaUserFriends, FaTachometerAlt } from 'react-icons/fa';

const DetailVoiture = () => {
  const { id } = useParams();
  const [voiture, setVoiture] = useState(null);
  const [activeTab, setActiveTab] = useState('apercu');

  useEffect(() => {
    // Find car by ID (convert id to number first)
    const foundCar = donneesVoitures.find(c => c.id === parseInt(id));
    setVoiture(foundCar);
    window.scrollTo(0, 0);
  }, [id]);

  if (!voiture) return <div className="h-screen flex items-center justify-center text-white">Chargement...</div>;

  const similarCars = donneesVoitures
    .filter(c => c.categorie === voiture.categorie && c.id !== voiture.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <div className="h-[60vh] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-lux-black z-10" />
        <img
          src={voiture.image}
          alt={voiture.nom}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full z-20 pb-12">
            <div className="container mx-auto px-6">
                 <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-7xl font-display text-white mb-2"
                >
                    {voiture.nom}
                </motion.h1>
                <div className="flex items-center gap-4 text-white/80">
                    <span className="px-3 py-1 border border-white/20 rounded-full text-sm uppercase tracking-wider">{voiture.categorie}</span>
                    <span className="flex items-center gap-1 text-lux-gold"><FaStar /> {voiture.note} ({voiture.avis} avis)</span>
                </div>
            </div>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="w-full lg:w-2/3">
            {/* Tabs */}
            <div className="flex border-b border-white/10 mb-8">
              {['apercu', 'equipements', 'avis'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 text-sm font-bold uppercase tracking-wider transition-colors relative ${
                    activeTab === tab ? 'text-lux-red' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.div layoutId="underline" className="absolute bottom-0 left-0 w-full h-0.5 bg-lux-red" />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[300px]">
                {activeTab === 'apercu' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h2 className="text-2xl font-display text-white mb-4">Description</h2>
                        <p className="text-gray-400 leading-relaxed mb-8">
                            {voiture.description || "Une expérience de conduite incomparable. Ce véhicule allie performance, confort et design d'exception pour sublimer chacun de vos trajets."}
                        </p>
                        
                        <h2 className="text-2xl font-display text-white mb-4">Caractéristiques Principales</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                             <div className="bg-white/5 p-4 rounded text-center">
                                <FaTachometerAlt className="text-lux-red text-2xl mx-auto mb-2" />
                                <span className="block text-white font-bold">{voiture.caracteristiques[0] || "300 km/h"}</span>
                             </div>
                             <div className="bg-white/5 p-4 rounded text-center">
                                <FaCogs className="text-lux-red text-2xl mx-auto mb-2" />
                                <span className="block text-white font-bold">{voiture.transmission}</span>
                             </div>
                             <div className="bg-white/5 p-4 rounded text-center">
                                <FaGasPump className="text-lux-red text-2xl mx-auto mb-2" />
                                <span className="block text-white font-bold">{voiture.carburant}</span>
                             </div>
                             <div className="bg-white/5 p-4 rounded text-center">
                                <FaUserFriends className="text-lux-red text-2xl mx-auto mb-2" />
                                <span className="block text-white font-bold">{voiture.places} Places</span>
                             </div>
                        </div>
                    </motion.div>
                )}

                 {activeTab === 'equipements' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h2 className="text-2xl font-display text-white mb-6">Équipements Inclus</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[...voiture.caracteristiques, "GPS Navigation", "Bluetooth", "Climatisation Bizone", "Caméra de recul", "Régulateur de vitesse"].map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-gray-300">
                                    <FaCheckCircle className="text-lux-red flex-shrink-0" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
                
                 {activeTab === 'avis' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h2 className="text-2xl font-display text-white mb-6">Avis Clients</h2>
                        <div className="space-y-6">
                            {[1, 2, 3].map((item) => (
                                <div key={item} className="bg-white/5 p-6 rounded-lg">
                                    <div className="flex items-center gap-2 mb-2 text-lux-gold">
                                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                    </div>
                                    <p className="text-gray-300 mb-4">"Expérience incroyable, le véhicule était parfait."</p>
                                    <p className="text-sm text-gray-500 font-bold">Client Vérifié</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3 relative z-30">
            <BookingBox voiture={voiture} />
          </div>
        </div>

        {/* Similar Cars */}
        {similarCars.length > 0 && (
            <div className="mt-20 border-t border-white/10 pt-12">
                <h2 className="text-3xl text-white font-display mb-8">Vous aimerez aussi</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {similarCars.map((car, idx) => (
                        <CarCard key={car.id} voiture={car} index={idx} />
                    ))}
                </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default DetailVoiture;
