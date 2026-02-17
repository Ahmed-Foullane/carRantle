import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CarCard from '../components/cars/CarCard';
import CarFilters from '../components/cars/CarFilters';
import { donneesVoitures } from '../data/donneesVoitures';

const Voitures = () => {
  const maxPrice = Math.max(...donneesVoitures.map(v => v.prixParJour));
  const [filters, setFilters] = useState({
    category: 'Tous',
    priceRange: maxPrice,
    transmission: 'Tous',
    sortBy: 'price-asc'
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filteredCars, setFilteredCars] = useState(donneesVoitures);

  useEffect(() => {
    let result = donneesVoitures;

    // Filter by Category
    if (filters.category !== 'Tous') {
      result = result.filter(car => car.categorie === filters.category);
    }

    // Filter by Price
    result = result.filter(car => car.prixParJour <= filters.priceRange);

    // Filter by Transmission
    if (filters.transmission !== 'Tous') {
      result = result.filter(car => car.transmission === filters.transmission);
    }

    // Sort
    switch (filters.sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.prixParJour - b.prixParJour);
        break;
      case 'price-desc':
        result.sort((a, b) => b.prixParJour - a.prixParJour);
        break;
      case 'rating':
        result.sort((a, b) => b.note - a.note);
        break;
      default:
        break;
    }

    setFilteredCars([...result]); // Create new array reference
  }, [filters]);

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 container mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-7xl font-display text-white mb-4">
          Notre <span className="text-lux-red">Flotte</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Découvrez notre collection exclusive de véhicules de prestige.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Sidebar */}
        <div className="w-full md:w-1/4">
          <CarFilters 
            filters={filters} 
            setFilters={setFilters} 
            isOpen={isFilterOpen} 
            setIsOpen={setIsFilterOpen}
            maxPrice={maxPrice}
          />
        </div>

        {/* Grid */}
        <div className="w-full md:w-3/4">
          {/* Controls */}
          <div className="flex justify-between items-center mb-8">
            <span className="text-gray-400">{filteredCars.length} véhicules trouvés</span>
            
            <div className="flex items-center gap-2">
              <span className="hidden md:inline text-gray-400">Trier par:</span>
              <select 
                value={filters.sortBy}
                onChange={(e) => setFilters({...filters, sortBy: e.target.value})}
                className="bg-white/5 border border-white/10 rounded px-3 py-2 text-white focus:outline-none focus:border-lux-red"
              >
                <option value="price-asc" className="bg-lux-black">Prix Croissant</option>
                <option value="price-desc" className="bg-lux-black">Prix Décroissant</option>
                <option value="rating" className="bg-lux-black">Note</option>
              </select>
            </div>
          </div>

          {/* Cars Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredCars.map((voiture, index) => (
                <CarCard key={voiture.id} voiture={voiture} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredCars.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              Aucun véhicule ne correspond à vos critères.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Voitures;
