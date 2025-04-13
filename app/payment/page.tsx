'use client';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useProgress } from "@/src/context/ProgressContext";
import Image from "next/image";

const Payment = () => {
  const { currentStep, setCurrentStep, selectedGiftCard, setGiftCardDetails } = useProgress();
  const router = useRouter();

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

  const models = [
    { id: 0, image: "/check/AdobeStock_180713028-[Converti]@2x.png" },
    { id: 1, image: "/check/cheque2@2x.png" },
    { id: 2, image: "/check/cheque3@2x.png" },
  ];

  useEffect(() => {
    if (!selectedGiftCard) {
      router.push("/gift-card-selection");
      return;
    }
    setCurrentStep(3);
  }, [selectedGiftCard, router, setCurrentStep]);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setGiftCardDetails({
        for: formData.for,
        from: formData.from,
        selectedModel,
      });
      setCurrentStep(4);
      router.push("/print");
    }
  };


  return (
    <div className="bg-white py-6">
      <div className="container mx-auto mb-6">
        <Link
          href={`/gift-card/${selectedGiftCard}`}
          className="text-brownlight text-sm hover:underline"
        >
          ← Revenir aux informations sur le bon
        </Link>
      </div>

      <div className="container mx-auto text-center mb-8">
        <h2 className="text-2xl font-semibold text-brown">Compléter formulaire</h2>
        <p className="text-sm text-gray-600 mt-2">
          Recevez immédiatement votre bon cadeau !
        </p>
      </div>

      <div className="container mx-auto">
        <form onSubmit={handleSubmit}>
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
                  className="w-full border border-gray-300 text-brown rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brownlight"
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
                  className="w-full border border-gray-300 text-brown rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brownlight"
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
                  className="w-full border border-gray-300 text-brown rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brownlight"
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
                  className="w-full border border-gray-300 text-brown rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brownlight"
                  placeholder="Votre ville"
                />
                {errors.city && (
                  <p className="text-red-500 text-xs mt-1">{errors.city}</p>
                )}
              </div>
            </div>
          </div>

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
                  className="w-full border border-gray-300 text-brown rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brownlight"
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
                  className="w-full border border-gray-300 text-brown rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brownlight"
                  placeholder="ex: Votre famille - Sophie Dubois"
                />
                {errors.from && (
                  <p className="text-red-500 text-xs mt-1">{errors.from}</p>
                )}
              </div>
            </div>
          </div>

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
                  <img
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

\          <div className="mb-8">
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