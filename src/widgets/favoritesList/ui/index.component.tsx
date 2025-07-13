import { type FunctionComponent } from 'react';
import type { Props } from './index.types';
import { FilmCard } from '@/entities/film';
import { FavoritesArea, FavoriteBtn } from '@/features/favorites';
import { Grid } from '@mui/material';

export const FavoritesList: FunctionComponent<Props> = ({
    films,
    onRemoveFromFavorites,
}) => {
    return (
        <FavoritesArea
            onFavoritesClick={(id) => {
                if (!onRemoveFromFavorites) return;

                // const filmProps = films.find((v) => v.id === id);
                // if (!filmProps) return;

                onRemoveFromFavorites(id);
            }}
        >
            <Grid
                spacing={3}
                container
            >
                {films.map(({ id, title, year, rating, imageSrc }) => (
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
                                    isFavorite: true,
                                },
                            }}
                        />
                    </Grid>
                ))}
            </Grid>
        </FavoritesArea>
    );
};
