export type actionFunction = (
  prevState: any,
  formdata: FormData
) => Promise<{ message: string }>;

export type ProductCardProps = {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  price: number;
};
export type SwiperProps = {
  id: string;
  image: string;

};
