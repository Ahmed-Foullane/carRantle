import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheck } from 'react-icons/fa';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: 'Information', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => {
        setIsSent(false);
        setFormState({ name: '', email: '', subject: 'Information', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 container mx-auto px-6">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-display text-white mb-4">Contactez-<span className="text-lux-red">Nous</span></h1>
        <p className="text-gray-400">Notre équipe est à votre disposition 24/7 pour répondre à vos demandes.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <div className="space-y-8">
            <div className="glass-card p-8 flex items-start gap-6 group hover:border-lux-red/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-lux-red text-xl group-hover:bg-lux-red group-hover:text-white transition-colors">
                    <FaMapMarkerAlt />
                </div>
                <div>
                    <h3 className="text-xl text-white font-bold mb-2">Notre Siège</h3>
                    <p className="text-gray-400">12 Avenue des Champs-Élysées<br/>75008 Paris, France</p>
                </div>
            </div>

            <div className="glass-card p-8 flex items-start gap-6 group hover:border-lux-red/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-lux-red text-xl group-hover:bg-lux-red group-hover:text-white transition-colors">
                    <FaPhoneAlt />
                </div>
                <div>
                    <h3 className="text-xl text-white font-bold mb-2">Téléphone</h3>
                    <p className="text-gray-400">+33 1 23 45 67 89</p>
                    <p className="text-gray-500 text-sm mt-1">Du Lundi au Dimanche, 24h/24</p>
                </div>
            </div>

            <div className="glass-card p-8 flex items-start gap-6 group hover:border-lux-red/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-lux-red text-xl group-hover:bg-lux-red group-hover:text-white transition-colors">
                    <FaEnvelope />
                </div>
                <div>
                    <h3 className="text-xl text-white font-bold mb-2">Email</h3>
                    <p className="text-gray-400">contact@luxdrive.fr</p>
                    <p className="text-gray-500 text-sm mt-1">Réponse sous 2h garantie</p>
                </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-64 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-white/10">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.234674068305!2d2.304533315674034!3d48.87292497928892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc4f8f8f88b%3A0x1c8b8f8f8f8f8f8f!2sChamps-%C3%89lys%C3%A9es!5e0!3m2!1sen!2sfr!4v1620000000000!5m2!1sen!2sfr" 
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen="" 
                    loading="lazy"
                ></iframe>
            </div>
        </div>

        {/* Form */}
        <div className="glass-card p-8 md:p-10">
            <h2 className="text-2xl font-display text-white mb-6">Envoyez-nous un message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm text-gray-500 mb-2">Nom</label>
                        <input 
                            required
                            type="text" 
                            value={formState.name}
                            onChange={(e) => setFormState({...formState, name: e.target.value})}
                            className="w-full bg-white/5 border-b border-white/10 px-0 py-3 text-white focus:border-lux-red focus:bg-transparent outline-none transition-colors"
                            placeholder="Votre nom"
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-500 mb-2">Email</label>
                        <input 
                            required
                            type="email" 
                            value={formState.email}
                            onChange={(e) => setFormState({...formState, email: e.target.value})}
                            className="w-full bg-white/5 border-b border-white/10 px-0 py-3 text-white focus:border-lux-red focus:bg-transparent outline-none transition-colors"
                            placeholder="votre@email.com"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm text-gray-500 mb-2">Sujet</label>
                    <select 
                        value={formState.subject}
                        onChange={(e) => setFormState({...formState, subject: e.target.value})}
                        className="w-full bg-white/5 border-b border-white/10 px-0 py-3 text-white focus:border-lux-red focus:bg-transparent outline-none transition-colors"
                    >
                        <option value="Information" className="bg-lux-black">Demande d'information</option>
                        <option value="Reservation" className="bg-lux-black">Problème de réservation</option>
                        <option value="Partenariat" className="bg-lux-black">Partenariat</option>
                        <option value="Autre" className="bg-lux-black">Autre</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm text-gray-500 mb-2">Message</label>
                    <textarea 
                        required
                        rows="5"
                        value={formState.message}
                        onChange={(e) => setFormState({...formState, message: e.target.value})}
                        className="w-full bg-white/5 border-b border-white/10 px-0 py-3 text-white focus:border-lux-red focus:bg-transparent outline-none transition-colors resize-none"
                        placeholder="Comment pouvons-nous vous aider ?"
                    ></textarea>
                </div>

                <div className="pt-4">
                    <button 
                        type="submit" 
                        disabled={isSent}
                        className={`w-full py-4 rounded font-bold transition-all flex items-center justify-center gap-2 ${
                            isSent ? 'bg-green-600 text-white' : 'btn-primary'
                        }`}
                    >
                        {isSent ? (
                            <><FaCheck /> Message Envoyé</>
                        ) : (
                            <><FaPaperPlane /> Envoyer le message</>
                        )}
                    </button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
