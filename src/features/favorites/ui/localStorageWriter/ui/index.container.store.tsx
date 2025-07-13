import { LocalStorageWriter } from './index.component';
import { favoritesStore } from '@/app/store/favorites';

export const LocalStorageWriterContainerStore = () => {
    const store = favoritesStore;
    return <LocalStorageWriter store={store} />;
};
