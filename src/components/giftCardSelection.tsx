'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useProgress } from "../context/ProgressContext";
import { GiftCard } from "../types";
import Image from "next/image";

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
  {
    id: 4,
    title: "Chèque cadeau",
    description:
      "Excepté sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: "12,000€",
    forPersons: "Pour 2 personnes",
    image: "/AdobeStock_59196237@2x.png",
    category: "repas-hebergement",
  },
  {
    id: 5,
    title: "Chèque cadeau",
    description:
      "Excepté sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: "12,000€",
    forPersons: "Pour 2 personnes",
    image: "/AdobeStock_59196237@2x.png",
    category: "repas-hebergement",
  },
  {
    id: 6,
    title: "Chèque cadeau",
    description:
      "Excepté sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: "12,000€",
    forPersons: "Pour 2 personnes",
    image: "/AdobeStock_59196237@2x.png",
    category: "repas-hebergement",
  },
  {
    id: 7,
    title: "aa cadeau",
    description:
      "Excepté sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: "12,000€",
    forPersons: "Pour 2 personnes",
    image: "/AdobeStock_59196237@2x.png",
    category: "repas-hebergement",
  },
  {
    id: 8,
    title: "Chèque cadeau",
    description:
      "Excepté sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: "12,000€",
    forPersons: "Pour 2 personnes",
    image: "/AdobeStock_59196237@2x.png",
    category: "repas-hebergement",
  },
  {
    id: 9,
    title: "Chèque cadeau",
    description:
      "Excepté sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: "12,000€",
    forPersons: "Pour 2 personnes",
    image: "/AdobeStock_59196237@2x.png",
    category: "repas-hebergement",
  },
  {
    id: 10,
    title: "Chèque cadeau",
    description:
      "Excepté sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: "12,000€",
    forPersons: "Pour 2 personnes",
    image: "/AdobeStock_59196237@2x.png",
    category: "repas-hebergement",
  },
  {
    id: 11,
    title: "Chèque cadeau",
    description:
      "Excepté sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: "12,000€",
    forPersons: "Pour 2 personnes",
    image: "/AdobeStock_59196237@2x.png",
    category: "repas-hebergement",
  },
  {
    id: 12,
    title: "Chèque cadeau",
    description:
      "Excepté sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: "12,000€",
    forPersons: "Pour 2 personnes",
    image: "/AdobeStock_59196237@2x.png",
    category: "repas-hebergement",
  },
  {
    id: 13,
    title: "Chèque cadeau",
    description:
      "Excepté sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: "12,000€",
    forPersons: "Pour 2 personnes",
    image: "/AdobeStock_59196237@2x.png",
    category: "repas-hebergement",
  },
  {
    id: 14,
    title: "Chèque cadeau",
    description:
      "Excepté sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: "12,000€",
    forPersons: "Pour 2 personnes",
    image: "/AdobeStock_59196237@2x.png",
    category: "repas-hebergement",
  },
  {
    id: 15,
    title: "Chèque cadeau",
    description:
      "Excepté sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: "12,000€",
    forPersons: "Pour 2 personnes",
    image: "/AdobeStock_59196237@2x.png",
    category: "repas-hebergement",
  },
  {
    id: 16,
    title: "Chèque cadeau",
    description:
      "Excepté sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: "12,000€",
    forPersons: "Pour 2 personnes",
    image: "/AdobeStock_59196237@2x.png",
    category: "repas-hebergement",
  },
  {
    id: 17,
    title: "Chèque cadeau",
    description:
      "Excepté sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: "12,000€",
    forPersons: "Pour 2 personnes",
    image: "/AdobeStock_59196237@2x.png",
    category: "repas-hebergement",
  },
  {
    id: 18,
    title: "Chèque cadeau",
    description:
      "Excepté sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: "12,000€",
    forPersons: "Pour 2 personnes",
    image: "/AdobeStock_59196237@2x.png",
    category: "repas-hebergement",
  },
  {
    id: 19,
    title: "Chèque cadeau",
    description:
      "Excepté sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: "12,000€",
    forPersons: "Pour 2 personnes",
    image: "/AdobeStock_59196237@2x.png",
    category: "repas-hebergement",
  },
  {
    id: 20,
    title: "Chèque cadeau",
    description:
      "Excepté sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: "12,000€",
    forPersons: "Pour 2 personnes",
    image: "/AdobeStock_59196237@2x.png",
    category: "repas-hebergement",
  },
  {
    id: 21,
    title: "Chèque cadeau",
    description:
      "Excepté sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: "12,000€",
    forPersons: "Pour 2 personnes",
    image: "/AdobeStock_59196237@2x.png",
    category: "repas-hebergement",
  },
  {
    id: 22,
    title: "Chèque cadeau",
    description:
      "Excepté sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: "12,000€",
    forPersons: "Pour 2 personnes",
    image: "/AdobeStock_59196237@2x.png",
    category: "repas-hebergement",
  },
  {
    id: 23,
    title: "Chèque cadeau",
    description:
      "Excepté sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: "12,000€",
    forPersons: "Pour 2 personnes",
    image: "/AdobeStock_59196237@2x.png",
    category: "repas-hebergement",
  },
  {
    id: 24,
    title: "Chèque cadeau",
    description:
      "Excepté sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: "12,000€",
    forPersons: "Pour 2 personnes",
    image: "/AdobeStock_59196237@2x.png",
    category: "repas-hebergement",
  },
  {
    id: 25,
    title: "Chèque cadeau",
    description:
      "Excepté sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: "12,000€",
    forPersons: "Pour 2 personnes",
    image: "/AdobeStock_59196237@2x.png",
    category: "repas-hebergement",
  },
  {
    id: 26,
    title: "Chèque cadeau",
    description:
      "Excepté sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: "12,000€",
    forPersons: "Pour 2 personnes",
    image: "/AdobeStock_59196237@2x.png",
    category: "repas-hebergement",
  },
  {
    id: 27,
    title: "Chèque cadeau",
    description:
      "Excepté sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: "12,000€",
    forPersons: "Pour 2 personnes",
    image: "/AdobeStock_59196237@2x.png",
    category: "repas-hebergement",
  },
  {
    id: 28,
    title: "Chèque cadeau",
    description:
      "Excepté sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: "12,000€",
    forPersons: "Pour 2 personnes",
    image: "/AdobeStock_59196237@2x.png",
    category: "repas-hebergement",
  },
  {
    id: 29,
    title: "Chèque cadeau",
    description:
      "Excepté sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: "12,000€",
    forPersons: "Pour 2 personnes",
    image: "/AdobeStock_59196237@2x.png",
    category: "repas-hebergement",
  },
  {
    id: 30,
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
  const [currentPage, setCurrentPage] = useState<number>(1); // État pour la page actuelle
  const cardsPerPage = 6; // 6 cartes par page
  const { currentStep, setCurrentStep, setSelectedGiftCard } = useProgress();
  const router = useRouter();

  // Filtrer les cartes selon le filtre actif
  const filteredGiftCards = giftCards.filter(
    (card) => activeFilter === "tous" || card.category === activeFilter
  );

  // Calculer le nombre total de pages
  const totalPages = Math.ceil(filteredGiftCards.length / cardsPerPage);

  // Calculer les cartes à afficher pour la page actuelle
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentGiftCards = filteredGiftCards.slice(startIndex, endIndex);

  const handleSelectGiftCard = (id: number) => {
    setSelectedGiftCard(id);
    setCurrentStep(2);
    router.push(`/gift-card/${id}`);
  };

  // Fonctions pour naviguer entre les pages
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

  // Fonction pour générer les éléments de pagination
  const renderPagination = () => {
    const paginationItems = [];
    const maxVisiblePages = 3; // Afficher maximum 3 numéros de page à la fois

    // Calculer la plage de pages à afficher
    let startPage = Math.max(1, currentPage - 1);
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    // Ajuster startPage si on est proche de la fin
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // Ajouter les numéros de page
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

    // Ajouter les points de suspension si nécessaire
    if (endPage < totalPages) {
      paginationItems.push(
        <button
          key="ellipsis"
          onClick={() => setCurrentPage(totalPages)} // Sauter à la dernière page
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
        {/* Filtres */}
        <div className="container mx-auto flex justify-center space-x-4 mb-8">
          {["tous", "formules-repas", "repas-hebergement", "repas-cadeau"].map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                setCurrentPage(1); // Réinitialiser la page à 1 lors du changement de filtre
              }}
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
          {currentGiftCards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <Image
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

        {/* Contrôles de pagination */}
        {totalPages > 1 && (
          <div className="container mx-auto flex justify-center items-center space-x-2 mt-8">
            {/* Bouton Précédent */}
            {/* <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                currentPage === 1
                  ? "bg-white border border-brownlight text-brownlight opacity-50 cursor-not-allowed"
                  : "bg-white border border-brownlight text-brownlight"
              }`}
            >
              {"<"}
            </button> */}

            {/* Numéros de page et points de suspension */}
            {renderPagination()}

            {/* Bouton Suivant */}
            {/* <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                currentPage === totalPages
                  ? "bg-white border border-brownlight text-brownlight opacity-50 cursor-not-allowed"
                  : "bg-white border border-brownlight text-brownlight"
              }`}
            >
              {">"}
            </button> */}
          </div>
        )}
      </div>
    </>
  );
};

export default GiftCardSelection;