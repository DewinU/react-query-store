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
} from './products';

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <main className="dark text-foreground bg-background">
        <RouterProvider router={router} />
      </main>
    </NextUIProvider>
  </React.StrictMode>,
);
