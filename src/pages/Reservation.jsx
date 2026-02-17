import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import useReservationStore from '../context/useReservationStore';
import StepIndicator from '../components/reservation/StepIndicator';
import Step1Trip from '../components/reservation/Step1Trip';
import Step2Personal from '../components/reservation/Step2Personal';
import Step3Options from '../components/reservation/Step3Options';
import Step4Summary from '../components/reservation/Step4Summary';

const Reservation = () => {
  const { step, setStep, formData, updateFormData } = useReservationStore();
  const location = useLocation();

  useEffect(() => {
    // If coming from Details page with state
    if (location.state) {
        updateFormData({
            carId: location.state.carId,
            startDate: location.state.startDate,
            endDate: location.state.endDate,
        });
    }
  }, [location.state, updateFormData]);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen pt-24 pb-20 container mx-auto px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
            <h1 className="text-5xl font-display text-white mb-4">Réservez votre <span className="text-lux-red">Expérience</span></h1>
        </div>

        <StepIndicator currentStep={step} />

        <div className="glass-card p-6 md:p-8">
            <AnimatePresence mode="wait">
                {step === 1 && <Step1Trip key="step1" formData={formData} updateFormData={updateFormData} nextStep={nextStep} />}
                {step === 2 && <Step2Personal key="step2" formData={formData} updateFormData={updateFormData} nextStep={nextStep} prevStep={prevStep} />}
                {step === 3 && <Step3Options key="step3" formData={formData} updateFormData={updateFormData} nextStep={nextStep} prevStep={prevStep} />}
                {step === 4 && <Step4Summary key="step4" formData={formData} prevStep={prevStep} />}
            </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
