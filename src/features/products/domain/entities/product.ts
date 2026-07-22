export type Product = {
  id: string;
  name: string;
  description?: string;
  price: number;
  originalPrice?: number;
  imageUrl?: string;
  category: ProductCategory;
  featured?: boolean;
};

export type ProductCategory = "cameras" | "audio" | "computers" | "tablets";
