import type { Props } from '../ui/index.types';

export const INIT_DATA: Props = {
    id: 0,
    poster: undefined,
    title: {
        name: '',
        altName: '',
    },
    description: null,
    rating: {
        kp: 0,
        imdb: 0,
        filmCritics: 0,
        russianFilmCritics: 0,
    },
    releaseYears: undefined,
    year: undefined,
    genres: [{ name: '' }],
    isInFavorites: undefined,
};
