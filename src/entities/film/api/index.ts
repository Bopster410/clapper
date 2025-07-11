import type { KpApiResponse } from '@/shared/api';
import { FILM_BY_ID_MOCK, FILMS_MOCK, GENRES_MOCK } from './index.constants';
import type { FilmResponseLong, FilmResponseShort, Genre } from './index.types';

export function getFilmList(): KpApiResponse<FilmResponseShort[]> {
    return FILMS_MOCK;
}

export function getFilmGenres(): Genre[] {
    return GENRES_MOCK;
}

export function getFilmById(id: number): FilmResponseLong {
    return FILM_BY_ID_MOCK;
}

export type { Genre, Rating } from './index.types';
