'use client';
import { createContext, useContext, useState, ReactNode } from "react";

interface ProgressContextType {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  selectedGiftCard: number | null;
  setSelectedGiftCard: (id: number | null) => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider = ({ children }: { children: ReactNode }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedGiftCard, setSelectedGiftCard] = useState<number | null>(null);

  return (
    <ProgressContext.Provider
      value={{ currentStep, setCurrentStep, selectedGiftCard, setSelectedGiftCard }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error("useProgress must be used within a ProgressProvider");
  }
  return context;
};