'use client';
import { useState } from "react";

const Header: React.FC = () => {
  const [giftCardNumber, setGiftCardNumber] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleVerify = () => {
    if (giftCardNumber === "123456") {
      setMessage("Bon cadeau valide !");
    } else {
      setMessage("Numéro de bon cadeau invalide.");
    }
  };

  return (
    <header className="bg-background p-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Section Logo */}
        <div className="flex items-center space-x-2 mb-4 sm:mb-0">
          {/* Icône de cadeau en SVG */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#B7833D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <rect x="3" y="8" width="18" height="13" rx="2" ry="2" />
            <path d="M3 10h18" />
            <path d="M12 8v13" />
            <path d="M7 3c1.5 2 3 3 5 3s3.5-1 5-3" />
            <path d="M7 3c1.5 2 3 3 5 3s3.5-1 5-3" />
          </svg>
          <div>
            <h1 className="text-[18px] font-semibold text-brown">
              Votre logo
            </h1>
            <p className="text-[14px] text-brownlight">Bon cadeau</p>
          </div>
        </div>

        {/* Section Vérification */}
        <div className="flex items-center  py-[9px] px-[8px] border border-custom-gray rounded-full">
          <input
            type="text"
            value={giftCardNumber}
            onChange={(e) => setGiftCardNumber(e.target.value)}
            placeholder="Entrez votre N° de bon cadeau"
            className="border-none rounded-lg px-3 py-1 text-[14px] text-gray-500 placeholder-gray-500 focus:outline-none"
          />
          <button
            onClick={handleVerify}
            className="bg-brownlight text-white px-3 py-1 rounded-lg text-[14px] border-l border-custom-gray"
          >
            Voir
          </button>
        </div>
      </div>
      {message && (
        <div className="container mx-auto mt-2">
          <p className="text-[14px] text-gray-600">{message}</p>
        </div>
      )}
    </header>
  );
};

export default Header;