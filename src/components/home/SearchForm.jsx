import { useState } from 'react';
import { motion } from 'framer-motion';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt, FaMapMarkerAlt, FaCar, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/voitures');
  };

  return (
    <div className="relative z-30 -mt-24 container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-card p-6 md:p-8 shadow-2xl"
      >
        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
          {/* Location */}
          <div className="space-y-2">
            <label className="text-sm text-gray-400 font-medium flex items-center gap-2">
              <FaMapMarkerAlt className="text-lux-red" /> Lieu de prise en charge
            </label>
            <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-lux-red transition-colors">
              <option value="paris" className="bg-lux-black">Paris, Champs-Élysées</option>
              <option value="orly" className="bg-lux-black">Aéroport Orly</option>
              <option value="cdg" className="bg-lux-black">Aéroport CDG</option>
              <option value="nice" className="bg-lux-black">Nice, Promenade</option>
            </select>
          </div>

          {/* Date Début */}
          <div className="space-y-2">
            <label className="text-sm text-gray-400 font-medium flex items-center gap-2">
              <FaCalendarAlt className="text-lux-red" /> Date de départ
            </label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="Sélectionner..."
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-lux-red transition-colors"
              dateFormat="dd/MM/yyyy"
            />
          </div>

          {/* Date Fin */}
          <div className="space-y-2">
            <label className="text-sm text-gray-400 font-medium flex items-center gap-2">
              <FaCalendarAlt className="text-lux-red" /> Date de retour
            </label>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              placeholderText="Sélectionner..."
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-lux-red transition-colors"
              dateFormat="dd/MM/yyyy"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="h-[50px] bg-lux-red hover:bg-red-700 text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_15px_rgba(230,57,70,0.5)]"
          >
            Rechercher <FaArrowRight />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SearchForm;
