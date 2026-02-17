import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 pt-20 pb-10 text-lux-white border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-3xl font-display tracking-wider mb-6 block">
              LUX<span className="text-lux-red">DRIVE</span>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6">
              L'expérience ultime de location de voitures de luxe. Conduisez l'exceptionnel, vivez l'inoubliable.
            </p>
            <div className="flex gap-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-lux-red transition-colors duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-display mb-6">Liens Rapides</h4>
            <ul className="space-y-4">
              {['Accueil', 'Voitures', 'À Propos', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Accueil' ? '/' : `/${item.toLowerCase().replace(' ', '-').replace('à', 'a')}`}
                    className="text-gray-400 hover:text-lux-red transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xl font-display mb-6">Support</h4>
            <ul className="space-y-4">
              {['FAQ', 'Conditions Générales', 'Politique de Confidentialité', 'Aide'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-lux-red transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-display mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li>12 Avenue des Champs-Élysées</li>
              <li>75008 Paris, France</li>
              <li>+33 1 23 45 67 89</li>
              <li>contact@luxdrive.fr</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} LUXDRIVE. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
