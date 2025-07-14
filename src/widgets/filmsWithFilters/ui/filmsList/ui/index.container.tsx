import { type FilmCardProps } from '@/entities/film';
import { useFilters, useLoadFilms } from '@/features/filters';
import {
    DEFAULT_MAX_RATING,
    DEFAULT_MAX_YEAR,
    DEFAULT_MIN_RATING,
    DEFAULT_MIN_YEAR,
} from '../../index.constants';
import { type FunctionComponent } from 'react';
import { InfiniteScrollObserver } from '@/shared/uikit/infiniteScroll';
import { Box } from '@mui/material';

export const FilmsListApiLoader = ({
    FilmsListComponent,
}: {
    FilmsListComponent: FunctionComponent<{ films: FilmCardProps[] }>;
}) => {
    const [filters] = useFilters();
    const { films, hasMore, isLoading, loadMore } = useLoadFilms({
        page: 1,
        limit: 50,
        ratingmin: filters.rating?.min ?? DEFAULT_MIN_RATING,
        ratingmax: filters.rating?.max ?? DEFAULT_MAX_RATING,
        yearmin: filters.year?.min ?? DEFAULT_MIN_YEAR,
        yearmax: filters.year?.max ?? DEFAULT_MAX_YEAR,
        genres: JSON.stringify(
            filters.genres.reduce(
                (prevVal, curVal) => [...prevVal, curVal.name],
                [] as string[]
            )
        ),
    });

    return (
        <Box>
            <FilmsListComponent films={films} />
            <InfiniteScrollObserver
                onIntersect={loadMore}
                isLoading={isLoading}
                hasMore={hasMore}
            />
        </Box>
    );
};
