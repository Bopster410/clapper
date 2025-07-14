import type { favoritesStore } from '../favorites';

export interface IRootStore {
    favorites: typeof favoritesStore;
}
