import { observer } from 'mobx-react-lite';
import { FavoritesList } from './index.component';
import { favoritesStore } from '@/app/store/favorites';

export const FavoritesListContainerStore = observer(() => {
    const store = favoritesStore;

    return (
        <FavoritesList
            onRemoveFromFavorites={(id) => store.removeFromFavorites(id)}
            films={[...favoritesStore.favoriteFilms.values()]}
        />
    );
});
