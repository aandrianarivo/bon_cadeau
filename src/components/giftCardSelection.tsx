'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useProgress } from "../context/ProgressContext";
import { GiftCard } from "../types";

const giftCards: GiftCard[] = [
  {
    id: 1,
    title: "Chèque cadeau",
    description:
      "Excepté sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: "12,000€",
    forPersons: "Pour 2 personnes",
    image: "/AdobeStock_59196237.png",
    category: "tous",
  },
  {
    id: 2,
    title: "Chèque cadeau",
    description:
      "Excepté sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: "12,000€",
    forPersons: "Pour 2 personnes",
    image: "/AdobeStock_59196237@2x.png",
    category: "formules-repas",
  },
  {
    id: 3,
    title: "Chèque cadeau",
    description:
      "Excepté sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: "12,000€",
    forPersons: "Pour 2 personnes",
    image: "/AdobeStock_59196237@2x.png",
    category: "repas-hebergement",
  },
];

const GiftCardSelection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("tous");
  const { currentStep, setCurrentStep, setSelectedGiftCard } = useProgress();
  const router = useRouter();

  const filteredGiftCards = giftCards.filter(
    (card) => activeFilter === "tous" || card.category === activeFilter
  );

  const handleSelectGiftCard = (id: number) => {
    setSelectedGiftCard(id);
    setCurrentStep(2);
    router.push(`/gift-card/${id}`);
  };

  const steps = [
    { label: "Choisissez un bon", icon: "gift" },
    { label: "Informations sur le bon", icon: "info" },
    { label: "Paiement", icon: "payment" },
    { label: "Imprimer votre bon", icon: "print" },
  ];

  return (
    <div className="bg-[#F5F1EC] py-6">
      {/* Barre de progression */}
      <div className="container mx-auto flex justify-center items-center space-x-4 mb-8">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                currentStep === index + 1 ? "bg-brownlight" : "bg-gray-200"
              }`}
            >
              {step.icon === "gift" && (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={currentStep === index + 1 ? "white" : "gray"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="8" width="18" height="13" rx="2" ry="2" />
                  <path d="M3 10h18" />
                  <path d="M12 8v13" />
                  <path d="M7 3c1.5 2 3 3 5 3s3.5-1 5-3" />
                  <path d="M7 3c1.5 2 3 3 5 3s3.5-1 5-3" />
                </svg>
              )}
              {step.icon === "info" && (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={currentStep === index + 1 ? "white" : "gray"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                </svg>
              )}
              {step.icon === "payment" && (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={currentStep === index + 1 ? "white" : "gray"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <path d="M9 9h.01" />
                  <path d="M15 9h.01" />
                </svg>
              )}
              {step.icon === "print" && (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={currentStep === index + 1 ? "white" : "gray"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              )}
            </div>
            <span
              className={`ml-2 text-sm ${
                currentStep === index + 1 ? "text-brownlight" : "text-gray-500"
              }`}
            >
              {step.label}
            </span>
            {index < steps.length - 1 && (
              <div className="flex-1 h-px border-t border-dashed border-gray-300 mx-4"></div>
            )}
          </div>
        ))}
      </div>

      {/* Filtres */}
      <div className="container mx-auto flex justify-center space-x-4 mb-8">
        {["tous", "formules-repas", "repas-hebergement", "repas-cadeau"].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-sm ${
              activeFilter === filter
                ? "bg-brownlight text-white"
                : "border border-brownlight text-brownlight bg-white"
            }`}
          >
            {filter === "tous"
              ? "Tous"
              : filter === "formules-repas"
              ? "Formules repas"
              : filter === "repas-hebergement"
              ? "Repas & hébergement"
              : "Repas & cadeau"}
          </button>
        ))}
      </div>

      {/* Cartes de bons cadeaux */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGiftCards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-brown">{card.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{card.description}</p>
              <div className="flex items-center mt-4">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#B7833D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <rect x="3" y="8" width="18" height="13" rx="2" ry="2" />
                  <path d="M3 10h18" />
                  <path d="M12 8v13" />
                  <path d="M7 3c1.5 2 3 3 5 3s3.5-1 5-3" />
                  <path d="M7 3c1.5 2 3 3 5 3s3.5-1 5-3" />
                </svg>
                <span className="text-brownlight">À partir de {card.price}</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">{card.forPersons}</p>
              <button
                onClick={() => handleSelectGiftCard(card.id)}
                className="mt-4 w-full bg-brownlight text-white px-4 py-2 rounded-full text-sm"
              >
                Offrir
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GiftCardSelection;