import { motion } from 'framer-motion';

const Step2Personal = ({ formData, updateFormData, nextStep, prevStep }) => {
    return (
        <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }}>
            <h2 className="text-2xl font-display text-white mb-6">Informations Personnelles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-gray-400 mb-2">Prénom</label>
                    <input 
                        type="text" 
                        value={formData.firstName}
                        onChange={(e) => updateFormData({ firstName: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:border-lux-red outline-none"
                    />
                </div>
                <div>
                    <label className="block text-gray-400 mb-2">Nom</label>
                    <input 
                        type="text" 
                        value={formData.lastName}
                        onChange={(e) => updateFormData({ lastName: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:border-lux-red outline-none"
                    />
                </div>
                <div>
                    <label className="block text-gray-400 mb-2">Email</label>
                    <input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => updateFormData({ email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:border-lux-red outline-none"
                    />
                </div>
                <div>
                    <label className="block text-gray-400 mb-2">Téléphone</label>
                    <input 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => updateFormData({ phone: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:border-lux-red outline-none"
                    />
                </div>
            </div>
            <div className="flex gap-4 mt-8">
                <button onClick={prevStep} className="flex-1 px-6 py-3 border border-white/20 rounded text-white hover:bg-white/10">Retour</button>
                <button 
                    onClick={nextStep}
                    disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone}
                    className="flex-1 btn-primary disabled:opacity-50"
                >
                    Suivant
                </button>
            </div>
        </motion.div>
    );
};

export default Step2Personal;
