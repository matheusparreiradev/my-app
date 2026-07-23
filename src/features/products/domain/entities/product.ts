export type Product = {
  id: string;
  name: string;
  description?: string;
  price: number;
  originalPrice?: number;
  imageUrl?: string;
  category: ProductCategory;
  featured?: boolean;
  inStock?: boolean;
  quantityInStock?: number;
};


export type ProductCategory = "cameras" | "audio" | "computers" | "tablets";
