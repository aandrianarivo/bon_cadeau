'use client';
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useProgress } from "@/src/context/ProgressContext";
import GiftCardPDF from "@/src/components/giftCardPdf";

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


  return (
    <div className="bg-white py-6">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-2xl font-semibold text-brown">
          Bon cadeau n°{giftCardNumber}
        </h2>
      </div>

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
          <svg fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5 13.5V5.41a1 1 0 0 0-.3-.7L9.8.29A1 1 0 0 0 9.08 0H1.5v13.5A2.5 2.5 0 0 0 4 16h8a2.5 2.5 0 0 0 2.5-2.5m-1.5 0v-7H8v-5H3v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1M9.5 5V2.12L12.38 5zM5.13 5h-.62v1.25h2.12V5zm-.62 3h7.12v1.25H4.5zm.62 3h-.62v1.25h7.12V11z" clipRule="evenodd" fill="#666" fillRule="evenodd"/>
          </svg>
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.475sj6R0A1guhH7edkpWhQHaHa%26pid%3DApi&f=1&ipt=4bef19b469860196dd04b83ce21d51401262286f4b668e7abca39bb7399455a1&ipo=images"
              alt="QR Code"
              className="w-20 h-20"
            />
          </div>
        </div>
      </div>

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