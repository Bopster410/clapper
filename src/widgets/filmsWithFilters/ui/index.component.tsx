import { type FunctionComponent, useEffect, useState } from 'react';
import type { Props } from './index.types';
import { Box, Grid } from '@mui/material';
import { type FilmCardProps, FilmCard } from '@/entities/film';
import { getFilmList } from '@/entities/film/api';
import { FiltersCardContainer } from '@/features/filters/ui/index.container.context';
import { FiltersProvider, UrlFilterParamsSetter } from '@/features/filters';
import { FavoriteBtn, FavoritesArea } from '@/features/favorites';
import {
    DEFAULT_APP_BAR_HEIGHT,
    DEFAULT_MAX_RATING,
    DEFAULT_MAX_YEAR,
    DEFAULT_MIN_RATING,
    DEFAULT_MIN_YEAR,
    DEFAULT_TOP_PADDING,
} from './index.constants';

export const FilmsWithFilters: FunctionComponent<Props> = ({
    initFilters,
    onFavoritesClick,
    isInFavorites,
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
        <FiltersProvider initValues={initFilters}>
            <UrlFilterParamsSetter
                defaultYears={{
                    min: DEFAULT_MIN_YEAR,
                    max: DEFAULT_MAX_YEAR,
                }}
                defaultRating={{
                    min: DEFAULT_MIN_RATING,
                    max: DEFAULT_MAX_RATING,
                }}
            />
            <Grid
                container
                columnSpacing={2}
            >
                <Grid size={3.5}>
                    <Box
                        sx={{
                            position: 'sticky',
                            top: `${
                                DEFAULT_APP_BAR_HEIGHT + DEFAULT_TOP_PADDING
                            }px`,
                        }}
                    >
                        <FiltersCardContainer
                            yearRange={{
                                min: DEFAULT_MIN_YEAR,
                                max: DEFAULT_MAX_YEAR,
                            }}
                            ratingRange={{
                                min: DEFAULT_MIN_RATING,
                                max: DEFAULT_MAX_RATING,
                            }}
                        />
                    </Box>
                </Grid>
                <Grid size={8.5}>
                    <FavoritesArea
                        onFavoritesClick={(id) => {
                            if (!onFavoritesClick) return;

                            const filmProps = films.find((v) => v.id === id);
                            if (!filmProps) return;

                            onFavoritesClick(id, filmProps);
                        }}
                    >
                        <Grid
                            spacing={3}
                            container
                        >
                            {films.map(
                                ({ id, title, year, rating, imageSrc }) => (
                                    <Grid
                                        size={{ xs: 6, md: 3 }}
                                        // sx={{ maxWidth: 150 }}
                                    >
                                        <FilmCard
                                            id={id}
                                            title={title}
                                            year={year}
                                            imageSrc={imageSrc}
                                            rating={rating}
                                            slots={{ favoriteBtn: FavoriteBtn }}
                                            slotsProps={{
                                                favorteBtn: {
                                                    filmId: id,
                                                    isFavorite: isInFavorites
                                                        ? isInFavorites(id)
                                                        : false,
                                                },
                                            }}
                                        />
                                    </Grid>
                                )
                            )}
                        </Grid>
                    </FavoritesArea>
                </Grid>
            </Grid>
        </FiltersProvider>
    );
};
