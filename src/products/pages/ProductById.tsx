import { useParams } from 'react-router-dom';
import { useProduct } from '../hooks/useProduct';
import { ProductCardSkeleton } from '../components/ProductCardSkeleton';
import { ProductCard } from '../components/ProductCard';

export const ProductById = () => {
  const { id } = useParams();

  const { productQuery } = useProduct(+id!);

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Producto</h1>

      {productQuery.isLoading && <ProductCardSkeleton />}

      {productQuery.isError && <div>Error al cargar el producto</div>}

      {productQuery.data && (
        <ProductCard fullDescription product={productQuery.data} />
      )}
    </div>
  );
};
