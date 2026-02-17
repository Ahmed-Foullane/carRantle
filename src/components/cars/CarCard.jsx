import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGasPump, FaCogs, FaUserFriends, FaStar } from 'react-icons/fa';

const CarCard = ({ voiture, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="glass-card overflow-hidden group flex flex-col h-full"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={voiture.image}
          alt={voiture.nom}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-lux-black/80 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold uppercase tracking-wider text-white border border-white/10">
          {voiture.categorie}
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl md:text-2xl text-white font-display tracking-wide">{voiture.nom}</h3>
          <div className="flex items-center gap-1 text-lux-gold text-sm">
            <FaStar /> <span>{voiture.note}</span>
          </div>
        </div>
        
        <p className="text-lux-red font-bold text-xl mb-4">{voiture.prixParJour}DH <span className="text-gray-500 text-xs font-normal">/ jour</span></p>

        <div className="grid grid-cols-3 gap-2 mb-6 text-sm text-gray-400">
          <div className="flex flex-col items-center gap-1 bg-white/5 p-2 rounded">
              <FaUserFriends /> <span>{voiture.places}</span>
          </div>
          <div className="flex flex-col items-center gap-1 bg-white/5 p-2 rounded">
              <FaCogs /> <span>{voiture.transmission}</span>
          </div>
          <div className="flex flex-col items-center gap-1 bg-white/5 p-2 rounded">
              <FaGasPump /> <span>{voiture.carburant}</span>
          </div>
        </div>

        <div className="mt-auto flex gap-3">
            <Link
                to={`/voitures/${voiture.id}`}
                className="flex-1 py-3 border border-white/20 text-white text-center rounded hover:bg-white/10 transition-all font-medium text-sm"
            >
                Détails
            </Link>
            <Link
                to="/reservation"
                className="flex-1 py-3 bg-lux-red text-white text-center rounded hover:bg-red-700 transition-all font-medium text-sm shadow-[0_0_10px_rgba(230,57,70,0.3)] hover:shadow-[0_0_20px_rgba(230,57,70,0.5)]"
            >
                Réserver
            </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CarCard;
