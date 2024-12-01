import { ProductList, ProductListSkeleton, useProducts } from '..';

export const WomensPage = () => {
  const { productsQuery } = useProducts({ filterkey: "women's clothing" });
  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Productos para mujeres</h1>

      {productsQuery.isLoading && <ProductListSkeleton />}

      <ProductList products={productsQuery.data || []} />
    </div>
  );
};
