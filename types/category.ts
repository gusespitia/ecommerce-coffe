export type CategoryType = {
  id: number;
  categoryName: string;
  slug: string;
  mainImage: {
    url: string; // URL de la imagen (campo directo)
    alternativeText?: string | null; // Texto alternativo opcional
  };
};
