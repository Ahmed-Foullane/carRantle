import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { title: 'Accueil', path: '/' },
    { title: 'Voitures', path: '/voitures' },
    { title: 'À Propos', path: '/a-propos' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-lux-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="relative z-50">
            <img src="/luxDriveLogo.png" alt="LUXDRIVE" className="h-24 w-auto object-contain" />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.path}
                className="relative text-lux-white font-medium hover:text-lux-red transition-colors group"
              >
                {link.title}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lux-red transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              to="/reservation"
              className="px-6 py-2 bg-lux-red text-white font-bold rounded-full hover:bg-red-700 transition-all hover:scale-105"
            >
              Réserver
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            className="md:hidden text-lux-white text-3xl relative z-50"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <button
              aria-label="Fermer le menu"
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35 }}
              className="absolute right-0 top-0 h-[100dvh] w-full bg-lux-black/95 shadow-2xl flex flex-col items-center justify-center px-6 pt-24 pb-10 gap-6 overflow-y-auto overscroll-contain"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * index }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-display text-lux-white hover:text-lux-red transition-colors text-center"
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4 flex justify-center w-full">
                <Link
                  to="/reservation"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex px-7 py-3 bg-lux-red text-white font-bold text-lg rounded-full text-center"
                >
                  Réserver maintenant
                </Link>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
