import type { KpApiResponse } from '@/shared/api';
import { FILMS_MOCK, GENRES_MOCK } from './index.constants';
import type { FilmResponseShort, Genre } from './index.types';

export function getFilmList(): KpApiResponse<FilmResponseShort[]> {
    return FILMS_MOCK;
}

export function getFilmGenres(): Genre[] {
    return GENRES_MOCK;
}

export type { Genre } from './index.types';
