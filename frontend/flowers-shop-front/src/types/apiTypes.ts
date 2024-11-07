export interface IResults<T> {
  count: number;
  results: T[];
}
export interface ICategory {
  id: number;
  title: string;
}
export interface IFlowerImage {
  id: number;
  image: string;
}
export interface IFlower {
  id: number;
  images: IFlowerImage[];
  title: string;
  size: string;
  materials: string;
  price: string;
  total_price: number;
  discount_percentage: number;
  in_stock: boolean;
  description: string;
  date: string;
  is_promotion: boolean;
  is_seasonal: boolean;
  category: number;
}
