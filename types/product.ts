export type ProductType = {

  id: number;
  productName: string;
  slug: string;
  active: boolean;
  isFeatured: boolean;
  origin: string;
  taste: string;
  price: number;
  images: {
    id: number;
    url: string;
  }[]; // Direct array of images
  category: {
    id: number;
    documentId: string;
    categoryName: string;
    slug: string;
    createdAt: string;
  };
  description: string;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  locale: string;
  localizations: unknown[];
};
