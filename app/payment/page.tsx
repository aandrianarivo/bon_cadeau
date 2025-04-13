'use client';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useProgress } from "@/src/context/ProgressContext";
import Image from "next/image";

const Payment = () => {
  const { currentStep, setCurrentStep, selectedGiftCard, setGiftCardDetails } = useProgress();
  const router = useRouter();

  // État du formulaire
  const [formData, setFormData] = useState({
    email: "",
    address: "",
    postalCode: "",
    city: "",
    for: "",
    from: "",
  });
  const [selectedModel, setSelectedModel] = useState<number>(0);
  const [acceptTerms, setAcceptTerms] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Modèles de bons cadeaux (images placeholders)
  const models = [
    { id: 0, image: "https://via.placeholder.com/300x150?text=Modèle+1" },
    { id: 1, image: "https://via.placeholder.com/300x150?text=Modèle+2" },
    { id: 2, image: "https://via.placeholder.com/300x150?text=Modèle+3" },
  ];

  // Mettre à jour l'étape actuelle
  useEffect(() => {
    if (!selectedGiftCard) {
      router.push("/gift-card-selection");
      return;
    }
    setCurrentStep(3);
  }, [selectedGiftCard, router, setCurrentStep]);

  // Validation du formulaire
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.email) newErrors.email = "L'email est requis";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "L'email n'est pas valide";
    if (!formData.address) newErrors.address = "L'adresse est requise";
    if (!formData.postalCode) newErrors.postalCode = "Le code postal est requis";
    if (!formData.city) newErrors.city = "La ville est requise";
    if (!formData.for) newErrors.for = "Le champ 'Pour' est requis";
    if (!formData.from) newErrors.from = "Le champ 'De la part de' est requis";
    if (!acceptTerms) newErrors.terms = "Vous devez accepter les conditions générales";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Gestion des changements dans le formulaire
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Soumission du formulaire
// Dans src/app/payment/page.tsx
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Sauvegarder les données dans le contexte
      setGiftCardDetails({
        for: formData.for,
        from: formData.from,
        selectedModel,
      });
      setCurrentStep(4);
      router.push("/print");
    }
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
        <Link
          href={`/gift-card/${selectedGiftCard}`}
          className="text-brownlight text-sm hover:underline"
        >
          ← Revenir aux informations sur le bon
        </Link>
      </div>

      {/* Message */}
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-2xl font-semibold text-brown">Compléter formulaire</h2>
        <p className="text-sm text-gray-600 mt-2">
          Recevez immédiatement votre bon cadeau !
        </p>
      </div>

      {/* Formulaire */}
      <div className="container mx-auto">
        <form onSubmit={handleSubmit}>
          {/* Section 1 : Identité de l'acheteur */}
          <div className="mb-8 border p-5 rounded-xl">
            <h3 className="text-lg font-semibold text-brown mb-4">
              1 Identité de l’acheteur du bon cadeau:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brownlight"
                  placeholder="exemple@domaine.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Adresse <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brownlight"
                  placeholder="Votre adresse"
                />
                {errors.address && (
                  <p className="text-red-500 text-xs mt-1">{errors.address}</p>
                )}
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Code postal <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brownlight"
                  placeholder="Votre code postal"
                />
                {errors.postalCode && (
                  <p className="text-red-500 text-xs mt-1">{errors.postalCode}</p>
                )}
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Ville <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brownlight"
                  placeholder="Votre ville"
                />
                {errors.city && (
                  <p className="text-red-500 text-xs mt-1">{errors.city}</p>
                )}
              </div>
            </div>
          </div>

          {/* Section 2 : Informations présentes sur le bon cadeau */}
          <div className="mb-8 border p-5 rounded-xl">
            <h3 className="text-lg font-semibold text-brown mb-4">
              2 Informations présentes sur le bon cadeau:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Pour <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="for"
                  value={formData.for}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brownlight"
                  placeholder="ex: Mr & Mme M. et Mme Leclerc"
                />
                {errors.for && (
                  <p className="text-red-500 text-xs mt-1">{errors.for}</p>
                )}
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  De la part de <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="from"
                  value={formData.from}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brownlight"
                  placeholder="ex: Votre famille - Sophie Dubois"
                />
                {errors.from && (
                  <p className="text-red-500 text-xs mt-1">{errors.from}</p>
                )}
              </div>
            </div>
          </div>

          {/* Section 3 : Choisir un modèle */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-brown mb-4">
              3 Choisir un modèle:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {models.map((model) => (
                <label
                  key={model.id}
                  className={`relative flex items-center justify-center border rounded-lg p-2 cursor-pointer ${
                    selectedModel === model.id
                      ? "border-brownlight"
                      : "border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="model"
                    checked={selectedModel === model.id}
                    onChange={() => setSelectedModel(model.id)}
                    className="absolute opacity-0"
                  />
                  <Image
                    src={model.image}
                    alt={`Modèle ${model.id + 1}`}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  {selectedModel === model.id && (
                    <div className="absolute top-2 right-2 w-6 h-6 bg-brownlight rounded-full flex items-center justify-center">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                  )}
                </label>
              ))}
            </div>
          </div>

          {/* Conditions générales */}
          <div className="mb-8">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="text-brownlight focus:ring-brownlight"
              />
              <span className="text-sm text-gray-600">
                J’accepte des conditions générales de ventes et offres promo
              </span>
            </label>
            {errors.terms && (
              <p className="text-red-500 text-xs mt-1">{errors.terms}</p>
            )}
          </div>

          {/* Bouton Valider et payer */}
          <button
            type="submit"
            className="w-full bg-brownlight text-white px-4 py-2 rounded-full text-sm"
          >
            Valider et payer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;