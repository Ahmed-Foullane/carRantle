import { create } from 'zustand';

const useReservationStore = create((set) => ({
  step: 1,
  formData: {
    // Step 1: Trip
    location: 'Paris, Champs-Élysées',
    startDate: null,
    endDate: null,
    carId: null,
    
    // Step 2: Personal
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Step 3: Options
    insurance: 'basic', // basic, standard, premium
    gps: false,
    childSeat: false,
    driver: false,
  },
  
  setStep: (step) => set({ step }),
  
  updateFormData: (data) => set((state) => ({ 
    formData: { ...state.formData, ...data } 
  })),
  
  resetReservation: () => set({ 
    step: 1, 
    formData: {
      location: 'Paris, Champs-Élysées',
      startDate: null,
      endDate: null,
      carId: null,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      insurance: 'basic',
      gps: false,
      childSeat: false,
      driver: false,
    } 
  }),
}));

export default useReservationStore;
