import { ProductList, ProductListSkeleton, useProducts } from '..';

export const MensPage = () => {
  const { productsQuery } = useProducts({ filterkey: "men's clothing" });

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Productos para hombres</h1>

      {productsQuery.isLoading && <ProductListSkeleton />}

      <ProductList products={productsQuery.data || []} />
    </div>
  );
};
