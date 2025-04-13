'use client';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React from "react"; // Importer React pour utiliser React.use
import { useProgress } from "@/src/context/ProgressContext";
import Image from "next/image";

// Données simulées (remplacez par une API ou une base de données)
const giftCards = [
  {
    id: 1,
    title: "Chèque cadeau",
    description:
      "Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    priceOptions: [
      { label: "12,000€ hors boissons", value: 12000 },
      { label: "34,400€ avec vins, hors apéro & café", value: 34400 },
    ],
    forPersons: "Pour 2 personnes",
    image: "/AdobeStock_59196237.png", // Image mise à jour
  },
  {
    id: 2,
    title: "Chèque cadeau",
    description:
      "Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    priceOptions: [
      { label: "12,000€ hors boissons", value: 12000 },
      { label: "34,400€ avec vins, hors apéro & café", value: 34400 },
    ],
    forPersons: "Pour 2 personnes",
    image: "/AdobeStock_59196237.png",
  },
  {
    id: 3,
    title: "Chèque cadeau",
    description:
      "Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    priceOptions: [
      { label: "12,000€ hors boissons", value: 12000 },
      { label: "34,400€ avec vins, hors apéro & café", value: 34400 },
    ],
    forPersons: "Pour 2 personnes",
    image: "/AdobeStock_59196237.png",
  },
  {
    id: 4,
    title: "Chèque cadeau",
    description:
      "Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    priceOptions: [
      { label: "12,000€ hors boissons", value: 12000 },
      { label: "34,400€ avec vins, hors apéro & café", value: 34400 },
    ],
    forPersons: "Pour 2 personnes",
    image: "/AdobeStock_59196237.png",
  },
  {
    id: 5,
    title: "Chèque cadeau",
    description:
      "Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    priceOptions: [
      { label: "12,000€ hors boissons", value: 12000 },
      { label: "34,400€ avec vins, hors apéro & café", value: 34400 },
    ],
    forPersons: "Pour 2 personnes",
    image: "/AdobeStock_59196237.png",
  },
  {
    id: 3,
    title: "Chèque cadeau",
    description:
      "Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    priceOptions: [
      { label: "12,000€ hors boissons", value: 12000 },
      { label: "34,400€ avec vins, hors apéro & café", value: 34400 },
    ],
    forPersons: "Pour 2 personnes",
    image: "/AdobeStock_59196237.png",
  },
  {
    id: 6,
    title: "Chèque cadeau",
    description:
      "Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    priceOptions: [
      { label: "12,000€ hors boissons", value: 12000 },
      { label: "34,400€ avec vins, hors apéro & café", value: 34400 },
    ],
    forPersons: "Pour 2 personnes",
    image: "/AdobeStock_59196237.png",
  },
  {
    id: 7,
    title: "Chèque cadeau",
    description:
      "Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    priceOptions: [
      { label: "12,000€ hors boissons", value: 12000 },
      { label: "34,400€ avec vins, hors apéro & café", value: 34400 },
    ],
    forPersons: "Pour 2 personnes",
    image: "/AdobeStock_59196237.png",
  },
  {
    id: 8,
    title: "Chèque cadeau",
    description:
      "Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    priceOptions: [
      { label: "12,000€ hors boissons", value: 12000 },
      { label: "34,400€ avec vins, hors apéro & café", value: 34400 },
    ],
    forPersons: "Pour 2 personnes",
    image: "/AdobeStock_59196237.png",
  },
  {
    id: 3,
    title: "Chèque cadeau",
    description:
      "Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    priceOptions: [
      { label: "12,000€ hors boissons", value: 12000 },
      { label: "34,400€ avec vins, hors apéro & café", value: 34400 },
    ],
    forPersons: "Pour 2 personnes",
    image: "/AdobeStock_59196237.png",
  },
  {
    id: 3,
    title: "Chèque cadeau",
    description:
      "Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    priceOptions: [
      { label: "12,000€ hors boissons", value: 12000 },
      { label: "34,400€ avec vins, hors apéro & café", value: 34400 },
    ],
    forPersons: "Pour 2 personnes",
    image: "/AdobeStock_59196237.png",
  },
  {
    id: 3,
    title: "Chèque cadeau",
    description:
      "Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    priceOptions: [
      { label: "12,000€ hors boissons", value: 12000 },
      { label: "34,400€ avec vins, hors apéro & café", value: 34400 },
    ],
    forPersons: "Pour 2 personnes",
    image: "/AdobeStock_59196237.png",
  },
  {
    id: 9,
    title: "Chèque cadeau",
    description:
      "Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    priceOptions: [
      { label: "12,000€ hors boissons", value: 12000 },
      { label: "34,400€ avec vins, hors apéro & café", value: 34400 },
    ],
    forPersons: "Pour 2 personnes",
    image: "/AdobeStock_59196237.png",
  },
  {
    id: 10,
    title: "Chèque cadeau",
    description:
      "Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    priceOptions: [
      { label: "12,000€ hors boissons", value: 12000 },
      { label: "34,400€ avec vins, hors apéro & café", value: 34400 },
    ],
    forPersons: "Pour 2 personnes",
    image: "/AdobeStock_59196237.png",
  },
  {
    id: 11,
    title: "Chèque cadeau",
    description:
      "Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    priceOptions: [
      { label: "12,000€ hors boissons", value: 12000 },
      { label: "34,400€ avec vins, hors apéro & café", value: 34400 },
    ],
    forPersons: "Pour 2 personnes",
    image: "/AdobeStock_59196237.png",
  },
  {
    id: 12,
    title: "Chèque cadeau",
    description:
      "Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    priceOptions: [
      { label: "12,000€ hors boissons", value: 12000 },
      { label: "34,400€ avec vins, hors apéro & café", value: 34400 },
    ],
    forPersons: "Pour 2 personnes",
    image: "/AdobeStock_59196237.png",
  }
];

const GiftCardDetails = ({ params: paramsPromise }: { params: Promise<{ id: string }> }) => {
  const params = React.use(paramsPromise); // Déballer la promesse params
  const { setCurrentStep, setSelectedGiftCard } = useProgress();
  const router = useRouter();
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedOption, setSelectedOption] = useState<number>(0);

  // Trouver le bon cadeau correspondant à l'ID
  const giftCard = giftCards.find((card) => card.id === parseInt(params.id));

  // Rediriger si le bon n'est pas trouvé
  useEffect(() => {
    if (!giftCard) {
      router.push("/gift-card-selection");
      return;
    }
    setCurrentStep(2);
    setSelectedGiftCard(parseInt(params.id));
  }, [giftCard, params.id, router, setCurrentStep, setSelectedGiftCard]);

  if (!giftCard) return null;

  // Calculer le total
  const total = giftCard.priceOptions[selectedOption].value * quantity;

  const handleProceedToPayment = () => {
    setCurrentStep(3);
    router.push("/payment");
  };

  // const steps = [
  //   { label: "Choisissez un bon", icon: "gift" },
  //   { label: "Informations sur le bon", icon: "info" },
  //   { label: "Paiement", icon: "payment" },
  //   { label: "Imprimer votre bon", icon: "print" },
  // ];

  return (
    <div className="bg-white py-6">
      {/* Barre de progression */}
      {/* <div className="container mx-auto flex justify-center items-center space-x-4 mb-8">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                currentStep >= index + 1 ? "bg-brownlight" : "bg-gray-200"
              }`}
            >
              {currentStep > index + 1 ? (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              ) : step.icon === "gift" ? (
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
              ) : step.icon === "info" ? (
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
              ) : step.icon === "payment" ? (
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
              ) : (
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
                currentStep >= index + 1 ? "text-brownlight" : "text-gray-500"
              }`}
            >
              {step.label}
            </span>
            {index < steps.length - 1 && (
              <div className="flex-1 h-px border-t border-dashed border-gray-300 mx-4"></div>
            )}
          </div>
        ))}
      </div> */}

      {/* Lien de retour */}
      <div className="container mx-auto mb-6">
        <Link href={"/"} className="text-brownlight text-sm hover:underline">
          ← Revenir au choix du bon
        </Link>
      </div>

      {/* Section principale */}
      <div className="container mx-auto flex flex-col lg:flex-row gap-8">
        {/* Image */}
        <div className="lg:w-1/2">
          <Image
            src={giftCard.image}
            alt={giftCard.title}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>

        {/* Détails */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-semibold text-brown">{giftCard.title}</h2>
          <p className="text-sm text-gray-600 mt-2">{giftCard.forPersons}</p>
          <p className="text-sm text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>

          {/* Options */}
          <div className="mt-6">
            {giftCard.priceOptions.map((option, index) => (
              <label key={index} className="flex items-center space-x-2 mb-4">
                <input
                  type="radio"
                  name="priceOption"
                  checked={selectedOption === index}
                  onChange={() => setSelectedOption(index)}
                  className="text-brownlight focus:ring-brownlight"
                />
                <span className="text-sm text-gray-600">{option.label}</span>
              </label>
            ))}
          </div>

          {/* Quantité */}
          <div className="flex items-center space-x-4 mt-4">
            <button
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-gray-600"
            >
              -
            </button>
            <span className="text-sm text-gray-600">{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-gray-600"
            >
              +
            </button>
            <div className="ml-auto">
              <span className="text-sm text-gray-600">Total : </span>
              <span className="text-sm font-semibold text-brownlight">
                {total.toLocaleString()}€
              </span>
            </div>
          </div>

          <p className="text-sm text-gray-600 mt-2">{giftCard.forPersons}</p>

          {/* Bouton Commander */}
          <button
            onClick={handleProceedToPayment}
            className="mt-6 w-full bg-brownlight text-white px-4 py-2 rounded-full text-sm"
          >
            Commander
          </button>
        </div>
      </div>

      {/* Description */}
      <div className="container mx-auto mt-12">
        <h3 className="text-lg font-semibold text-brown">Description</h3>
        <p className="text-sm text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
  );
};

export default GiftCardDetails;