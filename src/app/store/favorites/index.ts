import { action, computed, makeObservable, observable } from 'mobx';
import type { IFavoritesStore } from './index.types';
import type { FilmCardProps } from '@/entities/film';

class FavoritesStore implements IFavoritesStore {
    favoriteFilms = new Map<number, FilmCardProps>(
        JSON.parse(localStorage.getItem('favorites') ?? '[]')
    );

    constructor() {
        makeObservable(this, {
            favoriteFilms: observable,
            isIdInFavorites: action,
            addToFavorites: action,
            removeFromFavorites: action,
            toggle: action,
            items: computed,
        });
    }

    get items() {
        return [...this.favoriteFilms.entries()];
    }

    isIdInFavorites = (id: number) => {
        return this.favoriteFilms.has(id);
    };

    addToFavorites(id: number, filmData: FilmCardProps) {
        this.favoriteFilms.set(id, filmData);
    }

    removeFromFavorites(id: number) {
        this.favoriteFilms.delete(id);
    }

    toggle = (id: number, filmData: FilmCardProps) => {
        const isInFavorites = this.isIdInFavorites(id);
        if (isInFavorites) this.removeFromFavorites(id);
        if (!isInFavorites) this.addToFavorites(id, filmData);
    };
}

export const favoritesStore = new FavoritesStore();
export type { IFavoritesStore as FavoritesStore };
