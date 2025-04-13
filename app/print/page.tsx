'use client';
import { useEffect } from "react";
import { useRouter } from "next/navigation";
// import { useProgress } from "../../context/ProgressContext";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useProgress } from "@/src/context/ProgressContext";
import GiftCardPDF from "@/src/components/giftCardPdf";
import Image from "next/image";
// import GiftCardPDF from "../../components/GiftCardPDF";

const Print = () => {
  const { currentStep, setCurrentStep, selectedGiftCard, giftCardDetails } = useProgress();
  const router = useRouter();

  // Générer un numéro de bon cadeau aléatoire
  const giftCardNumber = Math.floor(100000 + Math.random() * 900000).toString();

  useEffect(() => {
    if (!selectedGiftCard || !giftCardDetails) {
      router.push("/gift-card-selection");
      return;
    }
    setCurrentStep(4);
  }, [selectedGiftCard, giftCardDetails, router, setCurrentStep]);

  if (!giftCardDetails) return null;

  const steps = [
    { label: "Choisissez un bon", icon: "gift" },
    { label: "Informations sur le bon", icon: "info" },
    { label: "Paiement", icon: "payment" },
    { label: "Imprimer votre bon", icon: "print" },
  ];

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

      {/* Numéro du bon cadeau */}
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-2xl font-semibold text-brown">
          Bon cadeau n°{giftCardNumber}
        </h2>
      </div>

      {/* Prévisualisation du bon cadeau */}
      <div className="container mx-auto flex justify-center mb-8">
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-6">
          <div>
            <h3 className="text-xl font-semibold text-brown">Chèque cadeau</h3>
            <p className="text-sm text-gray-600 mt-2">
              Pour : {giftCardDetails.for}
            </p>
            <p className="text-sm text-gray-600">
              De la part de : {giftCardDetails.from}
            </p>
          </div>
          <div>
            <Image
              src="https://via.placeholder.com/100x50?text=Votre+Logo"
              alt="Logo"
              className="w-24 h-12 mb-4"
            />
            <Image
              src="https://via.placeholder.com/80?text=QR+Code"
              alt="QR Code"
              className="w-20 h-20"
            />
          </div>
        </div>
      </div>

      {/* Bouton de téléchargement */}
      <div className="container mx-auto text-center">
        <PDFDownloadLink
          document={
            <GiftCardPDF
              giftCardNumber={giftCardNumber}
              forPerson={giftCardDetails.for}
              fromPerson={giftCardDetails.from}
            />
          }
          fileName={`bon-cadeau-${giftCardNumber}.pdf`}
        >
          {({ loading }) => (
            <button
              className="bg-brownlight text-white px-4 py-2 rounded-full text-sm"
              disabled={loading}
            >
              {loading ? "Génération en cours..." : "Télécharger votre bon"}
            </button>
          )}
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default Print;