import { motion } from 'framer-motion';

const Step3Options = ({ formData, updateFormData, nextStep, prevStep }) => {
    return (
        <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }}>
             <h2 className="text-2xl font-display text-white mb-6">Options & Assurance</h2>
             
             <div className="space-y-6">
                <div className="bg-white/5 p-4 rounded border border-white/10">
                    <h3 className="text-lg text-white font-bold mb-4">Assurance</h3>
                    <div className="space-y-2">
                        {['basic', 'standard', 'premium'].map((opt) => (
                             <label key={opt} className="flex items-center justify-between p-3 rounded hover:bg-white/5 cursor-pointer border border-transparent has-[:checked]:border-lux-red has-[:checked]:bg-lux-red/10 transition-all">
                                <div className="flex items-center gap-3">
                                    <input 
                                        type="radio" 
                                        name="insurance"
                                        value={opt}
                                        checked={formData.insurance === opt}
                                        onChange={() => updateFormData({ insurance: opt })}
                                        className="accent-lux-red"
                                    />
                                    <span className="capitalize text-white">{opt} Coverage</span>
                                </div>
                                <span className="text-lux-gold font-bold">
                                    {opt === 'basic' ? '+0 DH' : opt === 'standard' ? '+250 DH' : '+500 DH'}
                                </span>
                             </label>
                        ))}
                    </div>
                </div>

                <div className="bg-white/5 p-4 rounded border border-white/10">
                    <h3 className="text-lg text-white font-bold mb-4">Supplémentaires</h3>
                    <div className="space-y-2">
                        <label className="flex items-center justify-between p-3 rounded hover:bg-white/5 cursor-pointer">
                            <div className="flex items-center gap-3">
                                <input 
                                    type="checkbox" 
                                    checked={formData.gps}
                                    onChange={(e) => updateFormData({ gps: e.target.checked })}
                                    className="accent-lux-red w-4 h-4"
                                />
                                <span className="text-white">GPS Navigation</span>
                            </div>
                            <span className="text-lux-gold">+100 DH</span>
                        </label>
                         <label className="flex items-center justify-between p-3 rounded hover:bg-white/5 cursor-pointer">
                            <div className="flex items-center gap-3">
                                <input 
                                    type="checkbox" 
                                    checked={formData.childSeat}
                                    onChange={(e) => updateFormData({ childSeat: e.target.checked })}
                                    className="accent-lux-red w-4 h-4"
                                />
                                <span className="text-white">Siège Enfant</span>
                            </div>
                            <span className="text-lux-gold">+150 DH</span>
                        </label>
                         <label className="flex items-center justify-between p-3 rounded hover:bg-white/5 cursor-pointer">
                            <div className="flex items-center gap-3">
                                <input 
                                    type="checkbox" 
                                    checked={formData.driver}
                                    onChange={(e) => updateFormData({ driver: e.target.checked })}
                                    className="accent-lux-red w-4 h-4"
                                />
                                <span className="text-white">Chauffeur Privé</span>
                            </div>
                            <span className="text-lux-gold">+2000 DH</span>
                        </label>
                    </div>
                </div>
             </div>

             <div className="flex gap-4 mt-8">
                <button onClick={prevStep} className="flex-1 px-6 py-3 border border-white/20 rounded text-white hover:bg-white/10">Retour</button>
                <button onClick={nextStep} className="flex-1 btn-primary">Suivant</button>
            </div>
        </motion.div>
    );
};

export default Step3Options;
