export interface GiftCard {
  id: number;
  title: string;
  description: string;
  price: string;
  forPersons: string;
  image: string;
  category: string; // Pour le filtrage (ex: "tous", "formules-repas", etc.)
}

export interface BuyerInfo {
  email: string;
  address?: string;
  postalCode?: string;
  city?: string
}

export interface GiftCardInfo {
  recipient: string;
  from: string;
}

export interface FormData extends BuyerInfo, GiftCardInfo { };