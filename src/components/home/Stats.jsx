import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FaCar, FaSmile, FaMapMarkedAlt, FaAward } from 'react-icons/fa';

const stats = [
  { id: 1, icon: FaCar, number: 500, label: 'Véhicules', suffix: '+' },
  { id: 2, icon: FaSmile, number: 98, label: 'Satisfaction Client', suffix: '%' },
  { id: 3, icon: FaMapMarkedAlt, number: 50, label: 'Agences', suffix: '+' },
  { id: 4, icon: FaAward, number: 10, label: "Ans d'expérience", suffix: '+' },
];

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section className="py-20 bg-lux-black" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center group hover:-translate-y-2 transition-transform duration-300">
              <div className="inline-flex p-4 rounded-full bg-white/5 mb-4 text-lux-red text-2xl group-hover:bg-lux-red group-hover:text-white transition-colors duration-300">
                <stat.icon />
              </div>
              <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                {inView ? (
                  <CountUp end={stat.number} duration={2.5} separator="," />
                ) : (
                  '0'
                )}
                <span className="text-lux-red">{stat.suffix}</span>
              </div>
              <p className="text-gray-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
