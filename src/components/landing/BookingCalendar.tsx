import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const RES_KEY = 'chef_reservations';
const loadReservations = () => {
  const data = localStorage.getItem(RES_KEY);
  return data ? JSON.parse(data) : [];
};
const saveReservation = (date: string) => {
  const all = loadReservations();
  all.push(date);
  localStorage.setItem(RES_KEY, JSON.stringify(all));
};

const BookingCalendar = () => {
  const [value, setValue] = useState<Date | null>(null);
  const [reserved, setReserved] = useState<string[]>([]);

  useEffect(() => {
    setReserved(loadReservations());
  }, []);

  const handleReserve = () => {
    if (value) {
      const dateStr = value.toISOString().slice(0, 10);
      saveReservation(dateStr);
      setReserved(loadReservations());
      setValue(null);
    }
  };

  const handleChange = (val: Date | Date[] | null) => {
    if (val && Array.isArray(val)) {
      setValue(val[0]);
    } else {
      setValue(val as Date);
    }
  };

  const tileDisabled = ({ date, view }: { date: Date; view: string }) => {
    if (view === 'month') {
      const dateStr = date.toISOString().slice(0, 10);
      return reserved.includes(dateStr);
    }
    return false;
  };

  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    if (view === 'month') {
      const dateStr = date.toISOString().slice(0, 10);
      if (reserved.includes(dateStr)) {
        return 'bg-[#2A2A2A] text-[#B89B5E] cursor-not-allowed';
      }
      if (value && dateStr === value.toISOString().slice(0, 10)) {
        return 'bg-[#B89B5E] text-black';
      }
      return 'border border-[#B89B5E] text-[#B89B5E] hover:bg-[#FFD700] hover:text-black';
    }
    return '';
  };

  return (
    <section className="w-full bg-[#0E0E0E] py-28 px-4 flex flex-col items-center justify-center">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif text-[#B89B5E] mb-6">Reserva tu experiencia privada</h2>
          <p className="text-lg text-[#F5F5F5] mb-8 font-light">Selecciona una fecha disponible en el calendario y confirma tu reserva. Las fechas ocupadas se bloquean automáticamente.</p>
        </div>
        <div className="bg-[#181818] rounded-2xl p-6 shadow-lg flex flex-col items-center">
          <Calendar
            onChange={handleChange}
            value={value}
            tileDisabled={tileDisabled}
            tileClassName={tileClassName}
            locale="es-ES"
          />
          <button
            className="mt-6 w-full py-3 rounded-lg bg-[#B89B5E] text-black font-bold text-lg hover:bg-[#FFD700] transition-all disabled:bg-[#2A2A2A] disabled:text-[#B89B5E]"
            disabled={!value || reserved.includes(value.toISOString().slice(0, 10))}
            onClick={handleReserve}
          >
            Confirmar reserva
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookingCalendar;
