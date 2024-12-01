import React from 'react';
import ReactDOM from 'react-dom/client';

import { NextUIProvider } from '@nextui-org/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import { ErrorPage } from './ErrorPage.tsx';
import {
  StoreLayout,
  CompleteListPage,
  MensPage,
  WomensPage,
  NewProduct,
  ProductById,
} from './products';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const router = createBrowserRouter([
  {
    path: '/',
    element: <StoreLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <CompleteListPage />,
      },
      {
        path: 'men',
        element: <MensPage />,
      },
      {
        path: 'women',
        element: <WomensPage />,
      },
      {
        path: 'new',
        element: <NewProduct />,
      },
      {
        path: 'products/:id',
        element: <ProductById />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <QueryClientProvider client={queryClient}>
        <main className="dark text-foreground bg-background">
          <RouterProvider router={router} />
        </main>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </NextUIProvider>
  </React.StrictMode>,
);
