import type { FavoritesStore } from '@/app/store/favorites';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

export const LocalStorageWriter = observer(
    ({ store }: { store: FavoritesStore }) => {
        const favorites = store.items;
        useEffect(() => {
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }, [favorites]);

        return <div />;
    }
);
