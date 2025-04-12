'use client';
import { useEffect } from "react";
import { useRouter } from "next/navigation";
// import { useProgress } from "../../context/ProgressContext";
import { useProgress } from "@/src/context/ProgressContext";


const Payment = () => {
  const { setCurrentStep } = useProgress();
  const router = useRouter();

  useEffect(() => {
    setCurrentStep(3); // Étape "Paiement"
  }, [setCurrentStep]);

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-semibold text-brown">Paiement</h1>
      <p className="text-sm text-gray-600 mt-4">
        Page de paiement en cours de développement...
      </p>
      <button
        onClick={() => router.push("/print")}
        className="mt-6 bg-brownlight text-white px-4 py-2 rounded-full text-sm"
      >
        Passer à l'impression
      </button>
    </div>
  );
};

export default Payment;