import { api, type KpApiResponse } from '@/shared/api';
import { FILM_URLS } from './index.constants';
import type {
    FilmResponseLong,
    FilmResponseShort,
    SearchWIthFiltersRequest,
} from './index.types';

export async function getFilmList({
    params,
}: {
    params?: SearchWIthFiltersRequest;
    signal?: AbortSignal;
}) {
    return await api.get<KpApiResponse<FilmResponseShort[]>>(
        FILM_URLS.searchWithFilters,
        {
            params: params
                ? {
                      page: params.page,
                      limit: params.limit,
                      'rating.kp': `${params.rating?.min}-${params.rating?.max}`,
                      'genres.name': params.genres,
                      year: `${params.years?.min}-${params.years?.max}`,
                      'releasYears.start': `${params.years?.min}-${params.years?.max}`,
                  }
                : undefined,
            paramsSerializer: (params) => {
                const parts: string[] = [];

                Object.entries(params).forEach(([key, value]) => {
                    if (Array.isArray(value)) {
                        value.forEach((item) =>
                            parts.push(`${key}=${encodeURIComponent(item)}`)
                        );
                    } else {
                        parts.push(`${key}=${encodeURIComponent(value)}`);
                    }
                });

                return parts.join('&');
            },
        }
    );
    // return { data: FILMS_MOCK, pages: 10, page: 1 };
}

export async function getFilmGenres() {
    return await api.get(FILM_URLS.getGenres, {
        baseURL: 'https://api.kinopoisk.dev/v1/',
    });
}

export async function getFilmById(id: number) {
    return await api.get<FilmResponseLong>(FILM_URLS.searchById(id));
}

export type { Genre, Rating, SearchWIthFiltersRequest } from './index.types';
