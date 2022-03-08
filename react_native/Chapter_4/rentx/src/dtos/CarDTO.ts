export interface CarDTO {
  about: string;
  accessories: {
    id: string;
    name: string;
    type: string;
  }[];
  brand: string;
  fuel_type: string;
  id: string;
  name: string;
  photos: {
    id: string;
    photo: string;
  }[];
  period: string;
  price: number;
  thumbnail: string;
}
