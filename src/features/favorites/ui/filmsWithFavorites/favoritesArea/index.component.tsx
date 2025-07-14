import { type FunctionComponent, type PropsWithChildren } from 'react';
import type { Props } from './index.types';
import { Box } from '@mui/material';

export const FavoritesArea: FunctionComponent<PropsWithChildren<Props>> = ({
    children,
    onFavoritesClick,
    ...props
}) => {
    const handleAreaClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        // event.preventDefault()
        const withId = (event.target as Element).closest(
            '[data-film-id]'
        ) as HTMLElement;
        if (!withId || !withId.dataset.filmId) return;

        const filmId = Number.parseInt(withId.dataset.filmId);
        onFavoritesClick(filmId);
    };

    return (
        <Box
            {...props}
            onClick={handleAreaClick}
        >
            {children}
        </Box>
    );
};
