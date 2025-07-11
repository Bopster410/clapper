import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { HomePage } from '@/pages/home';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { loadFilmPageData, FilmPageContainerLoader } from '@/pages/film';

const router = createBrowserRouter([
    {
        path: '/',
        children: [
            { index: true, Component: HomePage },
            {
                path: 'film/:id',
                loader: loadFilmPageData,
                Component: FilmPageContainerLoader,
            },
        ],
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
