import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/utils/ScrollToTop';
import CustomCursor from './components/ui/CustomCursor';
import LoadingScreen from './components/ui/LoadingScreen';
import AnimatedRoutes from './AnimatedRoutes';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <CustomCursor />
      
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} key="loading" />}
      </AnimatePresence>

      {!isLoading && (
        <div className="flex flex-col min-h-screen bg-lux-black text-lux-white font-sans selection:bg-lux-red selection:text-white max-w-[1920px] mx-auto shadow-2xl">
            <ScrollToTop />
            <Navbar />
            <main className="flex-grow relative z-10 w-full">
                <AnimatedRoutes />
            </main>
            <Footer />
        </div>
      )}
    </>
  );
}

export default App;
