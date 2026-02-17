import { motion } from 'framer-motion';
import DatePicker from 'react-datepicker';
import { donneesVoitures } from '../../data/donneesVoitures';

const Step1Trip = ({ formData, updateFormData, nextStep }) => {
  return (
    <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }}>
      <h2 className="text-2xl font-display text-white mb-6">Détails du Trajet</h2>
      <div className="space-y-6">
        <div>
          <label className="block text-gray-400 mb-2">Véhicule</label>
          <select 
            value={formData.carId || ''} 
            onChange={(e) => updateFormData({ carId: parseInt(e.target.value) })}
            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:border-lux-red outline-none"
          >
            <option value="" disabled className="bg-lux-black">Sélectionnez un véhicule</option>
            {donneesVoitures.map(car => (
              <option key={car.id} value={car.id} className="bg-lux-black">{car.nom} - {car.prixParJour}DH/j</option>
            ))}
          </select>
        </div>

        <div>
            <label className="block text-gray-400 mb-2">Lieu de prise en charge</label>
            <select
                value={formData.location}
                onChange={(e) => updateFormData({ location: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:border-lux-red outline-none"
            >
                <option value="Paris, Champs-Élysées" className="bg-lux-black">Paris, Champs-Élysées</option>
                <option value="Aéroport Orly" className="bg-lux-black">Aéroport Orly</option>
                <option value="Aéroport CDG" className="bg-lux-black">Aéroport CDG</option>
                <option value="Nice" className="bg-lux-black">Nice, Promenade</option>
            </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
            <div>
                <label className="block text-gray-400 mb-2">Départ</label>
                <DatePicker
                    selected={formData.startDate}
                    onChange={(date) => updateFormData({ startDate: date })}
                    selectsStart
                    startDate={formData.startDate}
                    endDate={formData.endDate}
                    minDate={new Date()}
                    placeholderText="Date début"
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:border-lux-red outline-none"
                />
            </div>
            <div>
                <label className="block text-gray-400 mb-2">Retour</label>
                <DatePicker
                    selected={formData.endDate}
                    onChange={(date) => updateFormData({ endDate: date })}
                    selectsEnd
                    startDate={formData.startDate}
                    endDate={formData.endDate}
                    minDate={formData.startDate}
                    placeholderText="Date fin"
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:border-lux-red outline-none"
                />
            </div>
        </div>

        <button 
            onClick={nextStep} 
            disabled={!formData.carId || !formData.startDate || !formData.endDate}
            className="w-full btn-primary mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
            Suivant
        </button>
      </div>
    </motion.div>
  );
};

export default Step1Trip;
