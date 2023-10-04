export type houseType = {
  id: number;
  name: string;
  price: string;
  rating: number;
  description: string;
  picture?: any;
};

export type othersPlaceType = houseType & {
  location: string;
};
