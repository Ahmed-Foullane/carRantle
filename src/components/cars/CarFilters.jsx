import { motion, AnimatePresence } from 'framer-motion';
import { FaFilter, FaTimes } from 'react-icons/fa';

const CarFilters = ({ filters, setFilters, isOpen, setIsOpen, maxPrice }) => {
  const categories = ['Tous', 'Sport', 'SUV', 'Luxe', 'Électrique', 'Berline'];
  const transmissions = ['Tous', 'Automatique', 'Manuelle'];

  const handleCategoryChange = (cat) => {
    setFilters({ ...filters, category: cat });
  };

  const handlePriceChange = (e) => {
    setFilters({ ...filters, priceRange: parseInt(e.target.value) });
  };

  const handleTransmissionChange = (trans) => {
    setFilters({ ...filters, transmission: trans });
  };

  return (
    <>
      {/* Mobile Filter Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden w-full mb-6 py-3 bg-white/5 border border-white/10 rounded flex items-center justify-center gap-2 text-white hover:bg-white/10 transition-colors"
      >
        <FaFilter /> Filtres
      </button>

      {/* Filter Sidebar */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:block space-y-8 p-6 glass-card md:bg-transparent md:border-0 md:p-0 md:shadow-none`}>
        {/* Categories */}
        <div>
          <h3 className="text-xl text-white font-display mb-4">Catégorie</h3>
          <div className="space-y-2">
            {categories.map((cat) => (
              <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="category"
                  value={cat}
                  checked={filters.category === cat}
                  onChange={() => handleCategoryChange(cat)}
                  className="hidden"
                />
                <span className={`w-4 h-4 border border-gray-500 rounded-full flex items-center justify-center transition-colors ${filters.category === cat ? 'border-lux-red' : 'group-hover:border-white'}`}>
                  {filters.category === cat && <span className="w-2 h-2 bg-lux-red rounded-full" />}
                </span>
                <span className={`text-gray-400 transition-colors ${filters.category === cat ? 'text-white font-medium' : 'group-hover:text-white'}`}>
                  {cat}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h3 className="text-xl text-white font-display mb-4">Prix Max: <span className="text-lux-red">{filters.priceRange}DH</span></h3>
          <input
            type="range"
            min="0"
            max={maxPrice}
            step="50"
            value={filters.priceRange}
            onChange={handlePriceChange}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-lux-red"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>0DH</span>
            <span>{maxPrice}DH</span>
          </div>
        </div>

        {/* Transmission */}
        <div>
          <h3 className="text-xl text-white font-display mb-4">Transmission</h3>
          <div className="space-y-2">
            {transmissions.map((trans) => (
              <label key={trans} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="transmission"
                  value={trans}
                  checked={filters.transmission === trans}
                  onChange={() => handleTransmissionChange(trans)}
                  className="hidden"
                />
                <span className={`w-4 h-4 border border-gray-500 rounded-full flex items-center justify-center transition-colors ${filters.transmission === trans ? 'border-lux-red' : 'group-hover:border-white'}`}>
                  {filters.transmission === trans && <span className="w-2 h-2 bg-lux-red rounded-full" />}
                </span>
                <span className={`text-gray-400 transition-colors ${filters.transmission === trans ? 'text-white font-medium' : 'group-hover:text-white'}`}>
                  {trans}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CarFilters;
