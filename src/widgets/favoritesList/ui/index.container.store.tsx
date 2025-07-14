import { observer } from 'mobx-react-lite';
import { FavoritesList } from './index.component';
import { favoritesStore } from '@/app/store/favorites';

export const FavoritesListContainerStore = observer(() => {
    return <FavoritesList films={[...favoritesStore.favoriteFilms.values()]} />;
});
