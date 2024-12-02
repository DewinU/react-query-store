import { type Product, productsApi } from '../index';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

interface Options {
  filterkey?: string;
}

interface ProductCreate {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export const getProducts = async ({ filterkey }: Options) => {
  await sleep(1000);
  const { data } = await productsApi.get<Product[]>('/products', {
    params: { category: filterkey },
  });

  return data;
};

export const getProductById = async (id: number) => {
  await sleep(1000);
  const { data } = await productsApi.get<Product>(`/products/${id}`);

  return data;
};

export const createProduct = async (product: ProductCreate) => {
  await sleep(5000);
  const { data } = await productsApi.post<Product>('/products', product);
  return data;
};
