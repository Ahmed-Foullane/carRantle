import { motion } from 'framer-motion';
import { donneesVoitures } from '../../data/donneesVoitures';

const Step4Summary = ({ formData, prevStep }) => {
    const car = donneesVoitures.find(c => c.id === formData.carId) || donneesVoitures[0];
    
    // Calculate total
    const diffTime = Math.abs(formData.endDate - formData.startDate);
    const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    let total = days * car.prixParJour;
    if (formData.insurance === 'standard') total += 250 * days;
    if (formData.insurance === 'premium') total += 500 * days;
    if (formData.gps) total += 100 * days;
    if (formData.childSeat) total += 150 * days;
    if (formData.driver) total += 2000 * days;

    return (
        <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }}>
            <div className="text-center mb-8">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl">
                    ✓
                </div>
                <h2 className="text-3xl font-display text-white">Confirmation de Demande</h2>
                <p className="text-gray-400">Votre réservation est prête à être envoyée.</p>
            </div>

            <div className="bg-white/5 p-6 rounded border border-white/10 mb-8">
                <div className="flex justify-between items-center mb-4 pb-4 border-b border-white/10">
                    <h3 className="text-xl text-white font-bold">{car.nom}</h3>
                    <span className="text-lux-red font-display text-lg">{total} DH Total</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
                    <div>
                        <span className="block text-gray-500">Dates</span>
                        {formData.startDate?.toLocaleDateString()} - {formData.endDate?.toLocaleDateString()} ({days} j)
                    </div>
                    <div>
                         <span className="block text-gray-500">Lieu</span>
                         {formData.location}
                    </div>
                    <div>
                         <span className="block text-gray-500">Client</span>
                         {formData.firstName} {formData.lastName}
                    </div>
                    <div>
                         <span className="block text-gray-500">Options</span>
                         {formData.insurance} coverage
                         {formData.gps && ', GPS'} 
                         {formData.driver && ', Chauffeur'}
                    </div>
                </div>
            </div>

            <div className="flex gap-4">
                <button onClick={prevStep} className="flex-1 px-6 py-3 border border-white/20 rounded text-white hover:bg-white/10">Modifier</button>
                <button 
                    onClick={() => alert('Réservation confirmée ! (Ceci est une démo)')}
                    className="flex-1 btn-primary"
                >
                    Confirmer & Payer
                </button>
            </div>
        </motion.div>
    );
};

export default Step4Summary;
