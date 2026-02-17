import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    name: 'Jean D.',
    role: 'Entrepreneur',
    content: "Service impeccable du début à la fin. La Porsche 911 était dans un état irréprochable. Je recommande vivement LUXDRIVE.",
    rating: 5,
  },
  {
    id: 2,
    name: 'Sophie M.',
    role: 'Directrice Mode',
    content: "J'ai loué le G63 pour un événement. L'équipe a été très professionnelle et flexible sur les horaires. Une expérience 5 étoiles.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Marc L.',
    role: 'Passionné Auto',
    content: "La sélection de véhicules est impressionnante. Pouvoir conduire une McLaren 720S le temps d'un weekend était un rêve devenu réalité.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-neutral-900 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-lux-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-lux-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl text-white mb-4">
            Ce que disent nos <span className="text-lux-red">Clients</span>
          </h2>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="glass-card p-8 h-full flex flex-col relative group hover:border-lux-red/30 transition-colors">
                <FaQuoteLeft className="text-4xl text-white/10 absolute top-6 right-6" />
                
                <div className="flex gap-1 mb-6 text-lux-gold">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <p className="text-gray-300 italic mb-6 leading-relaxed flex-grow">
                  "{item.content}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-lux-red to-lux-black flex items-center justify-center text-white font-bold text-lg">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-bold font-display tracking-wide">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
