import Hero from '../components/home/Hero';
import SearchForm from '../components/home/SearchForm';
import Stats from '../components/home/Stats';
import FeaturedCars from '../components/home/FeaturedCars';
import HowItWorks from '../components/home/HowItWorks';
import Testimonials from '../components/home/Testimonials';
import Brands from '../components/home/Brands';
import CTABanner from '../components/home/CTABanner';

const Accueil = () => {
  return (
    <>
      <Hero />
      <SearchForm />
      <Stats />
      <FeaturedCars />
      <Brands />
      <HowItWorks />
      <Testimonials />
      <CTABanner />
    </>
  );
};

export default Accueil;
