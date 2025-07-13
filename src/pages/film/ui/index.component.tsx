import { Box, Button, Chip, Grid, Typography } from '@mui/material';
import type { FunctionComponent } from 'react';
// import { useParams } from 'react-router';
import type { Props } from './index.types';
import { FilmRating } from '@/shared/uikit/filmRating';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FavoriteBtn } from '@/features/favorites';

export const FilmPage: FunctionComponent<Props> = ({
    title,
    poster,
    year,
    releaseYears,
    description,
    rating,
    genres,
    isInFavorites,
    onFavoritesClick,
    id,
}) => {
    return (
        <Grid
            container
            spacing={3}
        >
            <Grid size={3}>
                <img
                    style={{ width: '100%' }}
                    src={poster}
                />
                <Button
                    endIcon={
                        isInFavorites ? (
                            <FavoriteIcon />
                        ) : (
                            <FavoriteBorderIcon />
                        )
                    }
                    size='large'
                    fullWidth
                    variant='outlined'
                    onClick={() => {
                        if (onFavoritesClick)
                            onFavoritesClick(id, {
                                id: id,
                                title: title.name,
                                year:
                                    year ??
                                    (releaseYears && releaseYears[0].start) ??
                                    0,
                                imageSrc: poster,
                                rating: rating.kp,
                                slots: { favoriteBtn: FavoriteBtn },
                                slotsProps: {
                                    favorteBtn: {
                                        filmId: id,
                                        isFavorite: true,
                                    },
                                },
                            });
                    }}
                >
                    {isInFavorites ? 'В избранном' : 'Добавить'}
                </Button>
            </Grid>
            <Grid size={6}>
                <Box sx={{ marginBottom: '16px' }}>
                    <Grid
                        container
                        columnSpacing={1}
                    >
                        <Grid>
                            <Typography
                                variant='h4'
                                // sx={{ whiteSpace: 'nowrap' }}
                            >
                                {title.name}
                            </Typography>
                        </Grid>
                        <Grid>
                            <Typography variant='h4'>
                                {releaseYears
                                    ? `(${releaseYears[0].start} — ${
                                          releaseYears[releaseYears.length - 1]
                                              .end ?? '...'
                                      })`
                                    : year
                                    ? `(${year})`
                                    : undefined}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography
                        variant='h5'
                        color='textSecondary'
                    >
                        {`${title.altName}`}
                    </Typography>
                </Box>
                <Typography variant='body1'>{description}</Typography>
            </Grid>
            <Grid size={3}>
                <FilmRating
                    rating={rating.kp}
                    range={{ min: 0, max: 10 }}
                    variant='header'
                />
                <Grid
                    container
                    spacing={0.5}
                    sx={{ marginTop: '12px' }}
                >
                    {genres.map(({ name }) => (
                        <Grid key={name}>
                            <Chip label={name} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
};
