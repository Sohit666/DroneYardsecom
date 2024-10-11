// types/product.ts
export interface Product {
  id: string;
  name: string;
  desc: string;
  price: number;
  imageUrls: string[]; // Ensure this is defined as an array of strings
  colors?: string[];
  weight: number;
  dimensions?: {
    width: number;
    height: number;
    depth: number;
  };
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}


export interface Product {

  id: string;

  name: string;

  desc: string;

  price: number;

  type: string;

  colors: string[];

  imageUrls?: string[];

  image: string; // Add this line

}



interface FilterProductsProps {

  products: Product[];

  selectedColor: string;

  weightRange: number[];

  dimensionRange: number[];

}