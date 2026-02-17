import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { useNavigate } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";

const BookingBox = ({ voiture }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [days, setDays] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (startDate && endDate) {
      const diffTime = Math.abs(endDate - startDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
      setDays(diffDays);
      setTotalPrice(diffDays * voiture.prixParJour);
    } else {
        setDays(0);
        setTotalPrice(0);
    }
  }, [startDate, endDate, voiture.prixParJour]);

  const handleBooking = () => {
    // Navigate to reservation page with pre-filled data (requires state management or query params)
    navigate('/reservation', { state: { carId: voiture.id, startDate, endDate, totalPrice } });
  };

  return (
    <div className="bg-neutral-900 border border-white/10 p-6 rounded-2xl sticky top-24 shadow-2xl">
      <h3 className="text-2xl font-display text-white mb-2">{voiture.prixParJour} DH <span className="text-sm font-sans text-gray-400 font-normal">/ jour</span></h3>
      
      <div className="space-y-4 my-6">
        <div>
          <label className="text-sm text-gray-400 block mb-2">Du</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
            placeholderText="Date de départ"
            className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-white focus:outline-none focus:border-lux-red"
          />
        </div>
        <div>
          <label className="text-sm text-gray-400 block mb-2">Au</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            placeholderText="Date de retour"
            className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-white focus:outline-none focus:border-lux-red"
          />
        </div>
      </div>

      <div className="border-t border-white/10 pt-4 mb-6">
        <div className="flex justify-between text-gray-400 mb-2">
          <span>{days} jours</span>
          <span>{days * voiture.prixParJour} DH</span>
        </div>
        <div className="flex justify-between text-gray-400 mb-2">
            <span>Taxes (20%)</span>
            <span>{(totalPrice * 0.2).toFixed(0)} DH</span>
        </div>
        <div className="flex justify-between text-xl text-white font-bold mt-4">
          <span>Total</span>
          <span>{(totalPrice * 1.2).toFixed(0)} DH</span>
        </div>
      </div>

      <button
        onClick={handleBooking}
        disabled={!startDate || !endDate}
        className={`w-full py-3 rounded font-bold transition-all ${
          startDate && endDate
            ? 'bg-lux-red text-white hover:bg-red-700 shadow-lg hover:shadow-red-900/50'
            : 'bg-gray-700 text-gray-400 cursor-not-allowed'
        }`}
      >
        Réserver maintenant
      </button>
      
      <p className="text-xs text-center text-gray-500 mt-4">
        Annulation gratuite jusqu'à 48h avant
      </p>
    </div>
  );
};

export default BookingBox;
