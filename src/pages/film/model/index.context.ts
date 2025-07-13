import { type Props } from '../ui/index.types';
import { INIT_DATA } from './index.constants';
import type { FilmCardProps, Rating } from '@/entities/film';
import { makeAutoObservable, observable } from 'mobx';

class FilmData implements Props {
    id: number;
    poster?: string;
    title: {
        name: string;
        altName: string;
    };
    description: string | null;
    rating: Rating;
    releaseYears?: { start: number; end: number | null }[];
    year?: number;
    genres: { name: string }[];
    isInFavorites?: boolean;
    onFavoritesClick?: (id: number, filmData: FilmCardProps) => void;

    constructor({
        id,
        poster,
        title,
        description,
        rating,
        releaseYears,
        year,
        genres,
        isInFavorites,
        onFavoritesClick,
    }: Props) {
        this.id = id;
        this.poster = poster;
        this.title = title;
        this.description = description;
        this.rating = rating;
        this.releaseYears = releaseYears;
        this.year = year;
        this.genres = genres;
        this.isInFavorites = isInFavorites;
        this.onFavoritesClick = onFavoritesClick;

        makeAutoObservable(this, {
            onFavoritesClick: observable,
        });
    }
}

export const filmData = new FilmData(INIT_DATA);
