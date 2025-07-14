import { favoritesStore } from '@/app/store/favorites';
import { rootUiStore } from '@/app/store/rootUi';
import { FilmCard, type FilmCardProps } from '@/entities/film';
import {
    FavoritesArea,
    AddToFavoritesAssert,
    FavoriteBtn,
} from '@/features/favorites';
import { Grid } from '@mui/material';
import { observer } from 'mobx-react-lite';

export const FilmsListWithFavorite = observer(
    ({ films }: { films: FilmCardProps[] }) => {
        return (
            <FavoritesArea
                onFavoritesClick={(id) => {
                    const isInFavorites = favoritesStore.isIdInFavorites(id);

                    if (isInFavorites) favoritesStore.removeFromFavorites(id);

                    const filmProps = films.find((v) => v.id === id);
                    if (!isInFavorites && filmProps) {
                        rootUiStore.openModal(AddToFavoritesAssert, {
                            componentProps: {
                                onAccept: () => {
                                    favoritesStore.addToFavorites(
                                        id,
                                        filmProps
                                    );
                                    rootUiStore.closeModal();
                                },
                                onCancel: () => rootUiStore.closeModal(),
                            },
                            modalProps: {
                                onClose: () => rootUiStore.closeModal(),
                            },
                        });
                    }
                }}
            >
                <Grid
                    spacing={3}
                    container
                >
                    {films.map(({ id, title, year, rating, imageSrc }) => (
                        <Grid
                            size={{ xs: 6, md: 3 }}
                            key={id}
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
                                        isFavorite:
                                            favoritesStore.favoriteFilms.has(
                                                id
                                            ),
                                    },
                                }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </FavoritesArea>
        );
    }
);
