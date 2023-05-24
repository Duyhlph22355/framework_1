export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imgUrl: string;
}
export interface Products {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
}
