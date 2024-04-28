import { useState, useEffect } from "react";

const Countdown = () => {
  // Defina a data final para a contagem regressiva
  const targetDate = new Date("2024-10-24T23:59:59");

  // Estado para armazenar os dias, horas, minutos e segundos restantes
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Função para calcular o tempo restante
  const calculateTimeLeft = () => {
    const difference = targetDate.getTime() - new Date().getTime();
    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds });
    } else {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  };

  // Atualize o tempo restante a cada segundo
  useEffect(() => {
    const timer = setTimeout(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft]);

  // Renderize o componente Countdown
  return (
    <div
      className="bg-lightnude flex flex-col justify-center items-center text-center 
       py-12 px-4 sm:px-6 lg:px-8"
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl text-darkblue font-bold mb-8 font-hurricane font-normal">
        Contagem Regressiva
      </h1>
      <div className="flex justify-center flex-wrap gap-4">
        <div className="bg-darkblue w-32 text-white text-center border rounded-lg border-gray-500 p-3 mb-4">
          <p className="text-4xl md:text-5xl font-bold">{timeLeft.days}</p>
          <p className="text-sm md:text-base">Dias</p>
        </div>
        <div className="bg-darkblue w-32 text-white text-center border rounded-lg border-gray-500 p-3 mb-4">
          <p className="text-4xl md:text-5xl font-bold">{timeLeft.hours}</p>
          <p className="text-sm md:text-base">Horas</p>
        </div>
        <div className="bg-darkblue w-32 text-white text-center border rounded-lg border-gray-500 p-3 mb-4">
          <p className="text-4xl md:text-5xl font-bold">{timeLeft.minutes}</p>
          <p className="text-sm md:text-base">Minutos</p>
        </div>
        <div className="bg-darkblue w-32 text-white text-center border rounded-lg border-gray-500 p-3 mb-4">
          <p className="text-4xl md:text-5xl font-bold">{timeLeft.seconds}</p>
          <p className="text-sm md:text-base">Segundos</p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
