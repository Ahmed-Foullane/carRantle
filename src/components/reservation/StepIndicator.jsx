import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const StepIndicator = ({ currentStep }) => {
  const steps = [
    { num: 1, label: 'Trajet' },
    { num: 2, label: 'Infos' },
    { num: 3, label: 'Options' },
    { num: 4, label: 'Récap' },
  ];

  return (
    <div className="flex justify-between items-center mb-12 relative">
      {/* ProgressBar Background */}
      <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 -z-10 -translate-y-1/2 rounded-full"></div>
      
      {/* Animated Progress Bar */}
      <motion.div 
        className="absolute top-1/2 left-0 h-1 bg-lux-red -z-10 -translate-y-1/2 rounded-full"
        initial={{ width: '0%' }}
        animate={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        transition={{ duration: 0.5 }}
      />

      {steps.map((step) => (
        <div key={step.num} className="flex flex-col items-center gap-2">
          <motion.div
            animate={{
              backgroundColor: step.num <= currentStep ? '#E63946' : '#262626',
              scale: step.num === currentStep ? 1.2 : 1,
            }}
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold border-4 border-lux-black z-10 transition-colors duration-500"
          >
            {step.num < currentStep ? <FaCheck /> : step.num}
          </motion.div>
          <span className={`text-sm font-medium ${step.num <= currentStep ? 'text-white' : 'text-gray-500'}`}>
            {step.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
