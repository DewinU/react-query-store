import { useQuery } from '@tanstack/react-query';
import { productsActions } from '..';
interface Options {
  filterkey?: string;
}

export const useProducts = ({ filterkey }: Options) => {
  const productsQuery = useQuery({
    queryKey: ['products', { filterkey }],
    queryFn: () => productsActions.getProducts({ filterkey }),
    staleTime: 1000 * 60 * 60,
  });

  return { productsQuery };
};
