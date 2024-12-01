import { ProductCardSkeleton } from './ProductCardSkeleton';

export const ProductListSkeleton = () => {
  return (
    <div className="mt-2 flex flex-wrap gap-2 w-full justify-center">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="flex-grow">
          <ProductCardSkeleton />
        </div>
      ))}
    </div>
  );
};
