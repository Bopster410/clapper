import type { FilmCardProps } from '@/entities/film';

export interface IFavoritesStore {
    favoriteFilms: Map<number, FilmCardProps>;

    isIdInFavorites: (id: number) => boolean;
    items: [number, FilmCardProps][];
    addToFavorites: (id: number, filmData: FilmCardProps) => void;
    removeFromFavorites: (id: number) => void;
    toggle: (id: number, filmData: FilmCardProps) => void;
}
