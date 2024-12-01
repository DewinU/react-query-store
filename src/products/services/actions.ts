import { type Product, productsApi } from '../index';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

interface Options {
  filterkey?: string;
}

export const getProducts = async ({ filterkey }: Options) => {
  await sleep(1000);
  const { data } = await productsApi.get<Product[]>('/products', {
    params: { category: filterkey },
  });

  return data;
};

export const getProductById = async (id: number) => {
  // await sleep(1000);
  const { data } = await productsApi.get<Product>(`/products/${id}`);

  return data;
};
