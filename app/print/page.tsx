'use client';
import { useEffect } from "react";
import { useProgress } from "@/src/context/ProgressContext";

const Print = () => {
  const { setCurrentStep } = useProgress();

  useEffect(() => {
    setCurrentStep(4); // Étape "Imprimer votre bon"
  }, [setCurrentStep]);

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-semibold text-brown">Imprimer votre bon</h1>
      <p className="text-sm text-gray-600 mt-4">
        Page d'impression en cours de développement...
      </p>
    </div>
  );
};

export default Print;