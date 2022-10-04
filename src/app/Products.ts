import productsdata from "../app/products.json";

export interface Products {
  id: number;
  name: string;
  picture: string;
  price: number;
  description: string;
}

export let products: Products[] = productsdata;