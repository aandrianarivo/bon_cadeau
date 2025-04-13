'use client';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React from "react"; 
import { useProgress } from "@/src/context/ProgressContext";
import Image from "next/image";
import giftCards from "@/src/data/giftCards.json";

const GiftCardDetails = ({ params: paramsPromise }: { params: Promise<{ id: string }> }) => {
  const params = React.use(paramsPromise); 
  const { setCurrentStep, setSelectedGiftCard } = useProgress();
  const router = useRouter();
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedOption, setSelectedOption] = useState<number>(0);

  const giftCard = giftCards.find((card) => card.id === parseInt(params.id));

  useEffect(() => {
    if (!giftCard) {
      router.push("/gift-card-selection");
      return;
    }
    setCurrentStep(2);
    setSelectedGiftCard(parseInt(params.id));
  }, [giftCard, params.id, router, setCurrentStep, setSelectedGiftCard]);

  if (!giftCard) return null;

  const total = giftCard.priceOptions[selectedOption].value * quantity;

  const handleProceedToPayment = () => {
    setCurrentStep(3);
    router.push("/payment");
  };

  return (
    <div className="bg-white py-6">
      <div className="container mx-auto mb-6">
        <Link href={"/"} className="text-brownlight text-sm hover:underline">
          ← Revenir au choix du bon
        </Link>
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2">
          <img
            src={giftCard.image}
            alt={giftCard.title}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>

        <div className="lg:w-1/2">
          <h2 className="text-2xl font-semibold text-brown">{giftCard.title}</h2>
          <p className="text-sm text-gray-600 mt-2">{giftCard.forPersons}</p>
          <p className="text-sm text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>

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

          <button
            onClick={handleProceedToPayment}
            className="mt-6 w-full bg-brownlight text-white px-4 py-2 rounded-full text-sm"
          >
            Commander
          </button>
        </div>
      </div>

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