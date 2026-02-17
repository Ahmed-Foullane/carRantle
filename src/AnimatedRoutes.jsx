import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Accueil from './pages/Accueil';
import Voitures from './pages/Voitures';
import DetailVoiture from './pages/DetailVoiture';
import Reservation from './pages/Reservation';
import APropos from './pages/APropos';
import Contact from './pages/Contact';

const AnimatedRoutes = () => {
    const location = useLocation();
    
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Accueil />} />
                <Route path="/voitures" element={<Voitures />} />
                <Route path="/voitures/:id" element={<DetailVoiture />} />
                <Route path="/reservation" element={<Reservation />} />
                <Route path="/a-propos" element={<APropos />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;
