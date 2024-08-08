import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";

export const PaymentData = () => {
  const { qrCodeData, modalPaymentIsOpen, togglePaymentModal } = useCart();
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    if (qrCodeData && qrCodeData.calendar) {
      const expirationDate = new Date(qrCodeData.calendar.criacao);
      const expirationDateInSeconds =
        expirationDate.getTime() / 1000 + qrCodeData.calendar.expiracao;

      const updateTimeLeft = () => {
        const currentTimeInSeconds = new Date().getTime() / 1000;
        const timeRemaining = expirationDateInSeconds - currentTimeInSeconds;
        setTimeLeft(Math.max(timeRemaining, 0));
      };

      updateTimeLeft();
      const intervalId = setInterval(updateTimeLeft, 1000);

      return () => clearInterval(intervalId);
    }
  }, [qrCodeData]);

  const formatTimeLeft = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${hours}:${minutes < 10 ? "0" : ""}${minutes}:${
      remainingSeconds < 10 ? "0" : ""
    }${remainingSeconds}`;
  };

  const handleInputClick = () => {
    navigator.clipboard
      .writeText(qrCodeData.pixKey)
      .then(() => {
        toast("Pix Copia e Cola copiado para a área de transferência!");
      })
      .catch((err) => {
        console.error("Erro ao copiar para a área de transferência:", err);
      });
  };

  return (
    <div
      id="cart-modal"
      className={`${
        modalPaymentIsOpen ? "flex" : "hidden"
      } fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center`}
    >
      <div className="bg-gray-100 p-4 rounded shadow-lg flex flex-col items-center space-y-4">
        <h1>Dados do Pagamento</h1>
        <h3>Validade: {formatTimeLeft(timeLeft)}</h3>
        <input
          type="text"
          value="Atenção! Não efetue o pagamento após a validade expirar."
          className="w-full p-2 bg-red-200"
          readOnly
        />
        <img src={qrCodeData.qrCodeImage} alt="QR Code" className="w-64 h-64" />
        <label className="w-fit font-bold">Pix Copia e Cola:</label>
        <input
          type="text"
          value={qrCodeData.pixKey}
          className="w-full p-2 bg-gray-200"
          readOnly
          onClick={handleInputClick}
        />
        <p>
          Valor do presente: <label>R$ {qrCodeData.total}</label>
        </p>
        <button
          className="bg-darkblue text-white p-2 rounded mt-4"
          onClick={togglePaymentModal}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};
