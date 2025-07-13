import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { filmData } from '../model/index.context';
import { favoritesStore } from '@/app/store/favorites';
import { runInAction } from 'mobx';

export const FilmPageStore = observer(() => {
    const store = favoritesStore;

    const film = filmData;
    const isInFavorites = store.favoriteFilms.has(film.id);
    useEffect(() => {
        runInAction(() => {
            film.isInFavorites = isInFavorites;
            film.onFavoritesClick = store.toggle;
        });
    }, [film, isInFavorites, store.favoriteFilms, store.toggle]);

    return <div />;
});
