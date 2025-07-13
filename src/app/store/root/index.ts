import { createContext } from 'react';
import { favoritesStore, type FavoritesStore } from '../favorites';
import { type IRootStore } from './index.types';

class RootStore implements IRootStore {
    favorites: FavoritesStore;

    constructor() {
        this.favorites = favoritesStore;
    }
}

export const rootStore = new RootStore();
export const RootContext = createContext(rootStore);
