'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useProgress } from "../context/ProgressContext";
import { GiftCard } from "../types";
import Image from "next/image";

import giftCardsData from "../data/bon_cadeau.json";

const giftCards: GiftCard[] = giftCardsData;

const GiftCardSelection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("tous");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const cardsPerPage = 6; 
  const { currentStep, setCurrentStep, setSelectedGiftCard } = useProgress();
  const router = useRouter();

  const filteredGiftCards = giftCards.filter(
    (card) => activeFilter === "tous" || card.category === activeFilter
  );

  const totalPages = Math.ceil(filteredGiftCards.length / cardsPerPage);

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentGiftCards = filteredGiftCards.slice(startIndex, endIndex);

  const handleSelectGiftCard = (id: number) => {
    setSelectedGiftCard(id);
    setCurrentStep(2);
    router.push(`/gift-card/${id}`);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderPagination = () => {
    const paginationItems = [];
    const maxVisiblePages = 3; 

    let startPage = Math.max(1, currentPage - 1);
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      paginationItems.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
            currentPage === i
              ? "bg-brownlight text-white"
              : "bg-white border border-brownlight text-brownlight"
          }`}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      paginationItems.push(
        <button
          key="ellipsis"
          onClick={() => setCurrentPage(totalPages)} //to last page
          className="w-6 h-6 rounded-full flex items-center justify-center text-xs bg-white border border-brownlight text-brownlight"
        >
          ...
        </button>
      );
    }

    return paginationItems;
  };

  return (
    <>
      <div className="bg-light py-6">
        <div className="container mx-auto mb-8">
          <style jsx>{`
            .hide-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          <div className="flex justify-start space-x-2 overflow-x-auto px-4 md:justify-center md:space-x-4 hide-scrollbar">
            {["tous", "formules-repas", "repas-hebergement", "repas-cadeau"].map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setCurrentPage(1); 
                }}
                className={`px-3 py-1 text-xs rounded-full whitespace-nowrap md:px-4 md:py-2 md:text-sm ${
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
        </div>

        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentGiftCards.map((card) => (
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

        {totalPages > 1 && (
          <div className="container mx-auto flex justify-center items-center space-x-2 mt-8">
            {renderPagination()}
          </div>
        )}
      </div>
    </>
  );
};

export default GiftCardSelection;