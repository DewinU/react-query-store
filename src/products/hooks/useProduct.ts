import { useQuery } from '@tanstack/react-query';
import { productsActions } from '..';

export const useProduct = (id: number) => {
  const productQuery = useQuery({
    queryKey: ['products', id],
    queryFn: () => productsActions.getProductById(id),
    staleTime: 1000 * 60 * 60,
  });

  return { productQuery };
};
