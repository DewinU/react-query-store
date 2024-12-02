import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Product, productsActions } from '..';

interface MutationContext {
  optimisticProduct?: Product;
}

export const useProductMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: productsActions.createProduct,
    onSuccess: (product, variables, context) => {
      console.log('Producto creado');

      //   queryClient.invalidateQueries({
      //     queryKey: ['products'],
      //   });

      console.log({ product, variables, context });

      queryClient.removeQueries({
        queryKey: ['products', (context as MutationContext).optimisticProduct],
      });

      queryClient.setQueryData<Product[]>(['products', {}], (oldProducts) => {
        if (!oldProducts) {
          return [product];
        }

        console.log('Old Products', oldProducts);

        return oldProducts.map((cacheProduct) => {
          return cacheProduct.id ===
            (context as MutationContext).optimisticProduct?.id
            ? product
            : cacheProduct;
        });
      });
    },
    onSettled: () => {
      console.log('On Settled');
    },

    onMutate(product) {
      console.log('On Mutate', product);

      //Optimistic Product

      const optimisticProduct: Product = {
        id: Math.random(),
        ...product,
      } as Product;

      //Almacenar el producto optimista

      queryClient.setQueryData<Product[]>(['products', {}], (oldProducts) => {
        if (!oldProducts) {
          return [optimisticProduct];
        }

        return [...oldProducts, optimisticProduct];
      });

      return { optimisticProduct };
    },
  });

  return mutation;
};
