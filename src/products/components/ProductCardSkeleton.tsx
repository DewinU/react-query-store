// Adjust the import based on your UI library

import { Card } from '@nextui-org/react';

export const ProductCardSkeleton = () => {
  return (
    <Card className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 w-full h-full border border-white bg-white animate-pulse">
      <div className="w-full md:w-1/3 bg-white grid place-items-center">
        <div className="w-72 h-48 bg-gray-300 rounded-xl"></div>
      </div>
      <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
        <div className="flex justify-between item-center">
          <div className="h-6 bg-gray-300 rounded w-1/4"></div>
        </div>
        <div className="h-8 bg-gray-300 rounded w-3/4"></div>
        <div className="h-6 bg-gray-300 rounded w-full"></div>
        <div className="h-6 bg-gray-300 rounded w-5/6"></div>
      </div>
    </Card>
  );
};
