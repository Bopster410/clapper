import FILMS_MOCK from './mock.films.json';
import GENRES_MOCK from './mock.genres.json';
import FILM_BY_ID_MOCK from './mock.filmById.json';

export const FILM_URLS = {
    searchWithFilters: 'movie',
    searchById: (id: number) => `movie/${id}`,
    getGenres: 'movie/possible-values-by-field?field=genres.name',
};

export { FILMS_MOCK, GENRES_MOCK, FILM_BY_ID_MOCK };
