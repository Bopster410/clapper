export type Rating = {
    kp: number;
    imdb: number;
    filmCritics: number;
    russianFilmCritics: number;
};

export interface FilmResponseShort {
    id: number;
    name: string | null;
    alternativeName: string | null;
    year: number;
    rating: Rating;
    votes: Rating;
    poster?: {
        url: string;
        previewUrl: string;
    };
    releaseYears?: { start: number; end: number | null }[];
}

export interface FilmResponseLong extends FilmResponseShort {
    movieLength: number | null;
    description: string | null;
    shortDescription: string | null;
    genres: { name: string }[];
}

export type SearchWIthFiltersRequest = {
    page?: number;
    limit?: number;
    rating?: { min: number; max: number };
    years?: { min: number; max: number };
    genres?: string[];
};

export type Genre = { name: string; slug: string };
