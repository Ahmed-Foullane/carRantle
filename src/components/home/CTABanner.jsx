import { Link } from 'react-router-dom';

const CTABanner = () => {
  return (
    <section className="py-24 relative overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-lux-red/90 to-lux-black/90 mix-blend-multiply z-10" />
        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury Car Drive"
          className="w-full h-full object-cover grayscale"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center">
        <h2 className="text-4xl md:text-6xl text-white font-display mb-6">
            Prêt à prendre la route ?
        </h2>
        <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Réservez votre véhicule de rêve dès aujourd'hui et vivez une expérience inoubliable.
        </p>
        <Link
            to="/reservation"
            className="inline-block px-10 py-4 bg-white text-lux-red font-bold text-lg rounded-full hover:scale-105 transition-transform shadow-lg"
        >
            Réserver maintenant
        </Link>
      </div>
    </section>
  );
};

export default CTABanner;
