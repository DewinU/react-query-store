import { useQueryClient } from '@tanstack/react-query';
import { productsActions } from '..';

export const usePrefetchProduct = () => {
  const queryClient = useQueryClient();

  const prefetchProduct = (productId: number) => {
    queryClient.prefetchQuery({
      queryKey: ['product', productId],
      queryFn: () => productsActions.getProductById(productId),
      staleTime: 1000 * 60 * 60,
    });
  };

  return { prefetchProduct };
};
