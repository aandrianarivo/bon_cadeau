'use client';
import { useProgress } from "../context/ProgressContext";
import { useEffect, useState } from "react";

const ProgressBar = () => {
  const { currentStep } = useProgress();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const steps = [
    { label: "Choisissez un bon", icon: "gift" },
    { label: "Informations sur le bon", icon: "info" },
    { label: "Paiement", icon: "payment" },
    { label: "Imprimer votre bon", icon: "print" },
  ];

  const progressWidth = ((currentStep - 1) / (steps.length - 1)) * 100;

  if (!hydrated) {
    return (
      <div className="bg-whitebrown py-4">
        <div className="container mx-auto">
          <div className="hidden md:flex justify-center items-center space-x-6">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center relative w-[80px] h-[80px]">
                <div
                  className={`relative w-10 h-10 rounded-full flex items-center justify-center bg-custom-gray`}
                >
                  {step.icon === "gift" && (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="gray"
                      stroke="none"
                    >
                      <path d="M9 3v18m6-18v18m-9-6h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z" />
                    </svg>
                  )}
                  {step.icon === "info" && (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="gray"
                      stroke="none"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="12" y1="18" x2="12" y2="12" />
                      <line x1="9" y1="15" x2="15" y2="15" />
                    </svg>
                  )}
                  {step.icon === "payment" && (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="gray"
                      stroke="none"
                    >
                      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                      <line x1="1" y1="10" x2="23" y2="10" />
                    </svg>
                  )}
                  {step.icon === "print" && (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="gray"
                      stroke="none"
                    >
                      <polyline points="6 9 6 2 18 2 18 9" />
                      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                      <rect x="6" y="14" width="12" height="8" />
                    </svg>
                  )}
                </div>

                <span className="mt-2 text-sm text-center text-gray-500">
                  {step.label}
                </span>

                {index < steps.length - 1 && (
                  <div
                    className="absolute top-5 left-1/2 transform translate-x-[20px] w-[72px] h-px border-t border-dashed"
                    style={{ borderWidth: "1px", borderStyle: "dashed", borderColor: "#D9D9D9" }}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-whitebrown py-4">
      <div className="container mx-auto">
        {/* Version mobile  */}
        <div className="md:hidden flex items-center justify-between relative px-4">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-custom-gray transform -translate-y-1/2">
            <div
              className="h-full bg-brownlight transition-all duration-300 ease-in-out"
              style={{ width: `${progressWidth}%` }}
            ></div>
          </div>

          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center z-10 group">
              <div
                className={`relative w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-300 ${
                  currentStep > index + 1
                    ? "bg-green-500 border-2 border-white"
                    : currentStep === index + 1
                    ? "bg-brownlight border-2 border-white"
                    : "bg-custom-gray"
                }`}
              >
                {currentStep > index + 1 ? (
                  <div className="relative w-6 h-6 rounded-full flex items-center justify-center">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="green" 
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                ) : (
                  <span className="text-white text-xs font-semibold">
                    {index + 1}
                  </span>
                )}
              </div>
              <div className="absolute top-8 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {step.label}
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:flex justify-center items-center space-x-6">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center relative w-[80px] h-[80px]">
              <div
                className={`relative w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep >= index + 1
                    ? "bg-brownlight border-2 border-white"
                    : "bg-custom-gray"
                }`}
              >
                {step.icon === "gift" && (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill={currentStep >= index + 1 ? "white" : "gray"}
                    stroke="none"
                  >
                    <path d="M9 3v18m6-18v18m-9-6h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z" />
                  </svg>
                )}
                {step.icon === "info" && (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill={currentStep >= index + 1 ? "white" : "gray"}
                    stroke="none"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="12" y1="18" x2="12" y2="12" />
                    <line x1="9" y1="15" x2="15" y2="15" />
                  </svg>
                )}
                {step.icon === "payment" && (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill={currentStep >= index + 1 ? "white" : "gray"}
                    stroke="none"
                  >
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                    <line x1="1" y1="10" x2="23" y2="10" />
                  </svg>
                )}
                {step.icon === "print" && (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill={currentStep >= index + 1 ? "white" : "gray"}
                    stroke="none"
                  >
                    <polyline points="6 9 6 2 18 2 18 9" />
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                    <rect x="6" y="14" width="12" height="8" />
                  </svg>
                )}

                {currentStep > index + 1 && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border-2 border-green-500 flex items-center justify-center">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="green"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Texte sous le cercle */}
              <span
                className={`mt-2 text-sm text-center ${
                  currentStep >= index + 1 ? "text-brownlight" : "text-gray-500"
                }`}
              >
                {step.label}
              </span>

              {index < steps.length - 1 && (
                <div
                  className="absolute top-5 left-1/2 transform translate-x-[20px] w-[72px] h-px border-t border-dashed"
                  style={{ borderWidth: "1px", borderStyle: "dashed", borderColor: "#D9D9D9" }}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;