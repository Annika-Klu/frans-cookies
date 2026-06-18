export type Cookie = {
  _createdAt: string;
  name: string;
  price: number;
  description?: string;
  image?: any;
};

export type CookieViewModel = {
  name: string;
  isNew: boolean;
  price: number;
  description?: string;
  image: string;
};