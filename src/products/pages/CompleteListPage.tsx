import { ProductList, ProductListSkeleton, useProducts } from '..';

export const CompleteListPage = () => {
  const { productsQuery } = useProducts({});

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Todos los productos</h1>

      {productsQuery.isLoading && <ProductListSkeleton />}

      <ProductList products={productsQuery.data || []} />
    </div>
  );
};
