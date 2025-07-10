import { type FunctionComponent, useEffect, useState } from 'react';
import type { Props } from './index.types';
import { Grid } from '@mui/material';
import { type FilmCardProps, FilmCard } from '@/entities/film';
import { getFilmList } from '@/entities/film/api';
import { FiltersCardContainer } from '@/features/filters/ui/index.container.context';
import { FiltersProvider } from '@/features/filters';

export const FilmsWithFilters: FunctionComponent<Props> = ({
    initialFilters,
}) => {
    const [films, setFilms] = useState<FilmCardProps[]>([]);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setFilms([
                ...getFilmList().docs.map(
                    ({
                        name,
                        alternativeName,
                        // releaseYears,
                        id,
                        year,
                        rating,
                        poster,
                    }) => ({
                        id,
                        title: name ?? alternativeName ?? 'неизвестный фильм',
                        year,
                        rating: rating.kp,
                        imageSrc: poster?.previewUrl,
                    })
                ),
            ]);
        }, 1000);

        return () => clearTimeout(timeout);
    });

    return (
        <FiltersProvider>
            <Grid container>
                <Grid size={4}>
                    <FiltersCardContainer initialFilters={initialFilters} />
                </Grid>
                <Grid size={8}>
                    <Grid
                        spacing={3}
                        container
                    >
                        {films.map(({ id, title, year, rating, imageSrc }) => (
                            <Grid
                                size={{ xs: 6, md: 2 }}
                                sx={{ maxWidth: 150 }}
                            >
                                <FilmCard
                                    id={id}
                                    title={title}
                                    year={year}
                                    imageSrc={imageSrc}
                                    rating={rating}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </FiltersProvider>
    );
};
