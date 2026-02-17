import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGasPump, FaCogs, FaUserFriends, FaArrowRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { donneesVoitures } from '../../data/donneesVoitures';

const FeaturedCars = () => {
  const featuredCars = donneesVoitures.slice(0, 5); // Take first 5 cars

  return (
    <section className="py-20 bg-neutral-900 relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl text-white mb-2">
              Véhicules en <span className="text-lux-red">Vedette</span>
            </h2>
            <div className="h-1 w-20 bg-lux-red rounded-full"></div>
          </div>
          <Link to="/voitures" className="hidden md:flex items-center gap-2 text-lux-white hover:text-lux-red transition-colors group">
            Voir tout le catalogue <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {featuredCars.map((voiture) => (
            <SwiperSlide key={voiture.id}>
              <motion.div
                whileHover={{ y: -10 }}
                className="glass-card overflow-hidden group h-full flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={voiture.image}
                    alt={voiture.nom}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-lux-black/80 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold uppercase tracking-wider text-white border border-white/10">
                    {voiture.categorie}
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl text-white">{voiture.nom}</h3>
                    <div className="text-right">
                      <p className="text-lux-red font-bold text-xl">{voiture.prixParJour}DH</p>
                      <p className="text-xs text-gray-500">/ jour</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mb-6 text-sm text-gray-400">
                    <div className="flex flex-col items-center gap-1 bg-white/5 p-2 rounded">
                        <FaUserFriends /> <span>{voiture.places}</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 bg-white/5 p-2 rounded">
                        <FaCogs /> <span>{voiture.transmission}</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 bg-white/5 p-2 rounded">
                        <FaGasPump /> <span>{voiture.carburant}</span>
                    </div>
                  </div>

                  <Link
                    to={`/voitures/${voiture.id}`}
                    className="mt-auto w-full py-3 border border-white/20 text-white text-center rounded hover:bg-lux-red hover:border-lux-red transition-all font-medium"
                  >
                    Voir les détails
                  </Link>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        <div className="mt-8 text-center md:hidden">
            <Link to="/voitures" className="inline-flex items-center gap-2 text-lux-white hover:text-lux-red transition-colors group">
            Voir tout le catalogue <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
