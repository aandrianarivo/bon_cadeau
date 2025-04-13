import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white py-4 ">
      <div className="container mx-auto px-4 border-t-3 border-b-3 border-whitebrown">
        {/* Disposition principale : flex-row sur desktop, flex-col sur mobile */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Section logo et texte */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="#B7833D"
                stroke="none"
              >
                <path d="M9 3v18m6-18v18m-9-6h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z" />
              </svg>
              <span className="text-brown text-base font-semibold">Votre logo</span>
            </div>
            <span className="text-brown text-xs mt-1">Bon cadeau</span>
            <span className="text-gray-600 text-xs mt-1">
              Site réalisé par Agence Publika.
            </span>
          </div>

          {/* Section paiement sécurisé */}
          <div className="flex flex-col items-center">
            <span className="text-gray-600 text-xs mb-2">Paiement sécurisé :</span>
            <div className="flex space-x-4">
              {/* Icônes de paiement avec vos images */}
              <Image src="/ressource_footer/visa-2.png" alt="Visa" className="h-6" />
              <Image src="/ressource_footer/" alt="Mastercard" className="h-6" />
              <Image src="/icons/cb.png" alt="CB" className="h-6" />
              <Image src="/icons/stripe.png" alt="Stripe" className="h-6" />
            </div>
          </div>

          {/* Section réseaux sociaux */}
          <div className="flex space-x-2">
            {/* Icônes de réseaux sociaux */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <div className="w-6 h-6 rounded-full bg-whitebrown border border-brownlight flex items-center justify-center">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="#B7833D"
                  stroke="none"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </div>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <div className="w-6 h-6 rounded-full bg-whitebrown border border-brownlight flex items-center justify-center">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="#B7833D"
                  stroke="none"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </svg>
              </div>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <div className="w-6 h-6 rounded-full bg-whitebrown border border-brownlight flex items-center justify-center">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="#B7833D"
                  stroke="none"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
              <div className="w-6 h-6 rounded-full bg-whitebrown border border-brownlight flex items-center justify-center">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="#B7833D"
                  stroke="none"
                >
                  <path d="M12 0a12 12 0 0 0-3.8 23.4c-.1-1-.2-2.5 0-3.6l2-8.5s-.5-1-.5-2.5c0-2.4 1.4-4.2 3.1-4.2 1.5 0 2.1 1.1 2.1 2.5 0 1.5-1 2.6-1.1 4-.1 1.3.7 2.3 1.9 2.3 2.3 0 4-2.5 4-6.1 0-3.2-2.6-5.5-6.3-5.5-4.3 0-6.9 3.2-6.9 6.5 0 1.3.5 2.7 1.1 3.5-.2.5-.4 1.8-.1 2.2-.9.3-3.3 1-3.8-1.3-.7-3 1-6.2 4.3-7.9 2-1.1 4.2-.3 5.3 1.3 1.5 2.1.7 5.3-.7 7.3-1.7 2.4-3.5 5-3.5 8.6A12 12 0 0 0 12 0z" />
                </svg>
              </div>
            </a>
          </div>
        </div>

        {/* Liens légaux */}
        <div className="mt-4 text-center">
          <span className="text-gray-600 text-xs">
            <Link href="/mentions-legales" className="hover:underline">
              Mentions légales
            </Link>{" "}
            |{" "}
            <Link href="/politique-confidentialite" className="hover:underline">
              Politique de confidentialité
            </Link>{" "}
            |{" "}
            <Link href="/cgv" className="hover:underline">
              Conditions générales de ventes
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;