import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { HomePageContainerSearchParams } from '@/pages/home';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router';
import { loadFilmPageData, FilmPageContainerLoader } from '@/pages/film';
import { Container, CssBaseline, Fab } from '@mui/material';
import { Navbar } from '@/widgets/navbar';
import { ScrollTopButton, ScrollToTopAnchor } from '@/shared/uikit/scrollToTop';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <Navbar />
                <ScrollToTopAnchor />
                <Container
                    fixed
                    sx={{ marginTop: '16px' }}
                >
                    <Outlet />
                </Container>
                <ScrollTopButton>
                    <Fab
                        size='medium'
                        aria-label='scroll back to top'
                    >
                        <KeyboardArrowUpIcon />
                    </Fab>
                </ScrollTopButton>
            </>
        ),
        children: [
            { index: true, Component: HomePageContainerSearchParams },
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
        <CssBaseline />
        <RouterProvider router={router} />
    </StrictMode>
);
