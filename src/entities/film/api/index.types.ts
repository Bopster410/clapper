export type FilmResponseShort = {
    id: number;
    name: string | null;
    alternativeName: string | null;
    year: number;
    rating: {
        kp: number;
        imdb: number;
        filmCritics: number;
        russianFilmCritics: number;
    };
    votes: {
        kp: number;
        imdb: number;
        filmCritics: number;
        russianFilmCritics: number;
    };
    poster?: {
        url: string;
        previewUrl: string;
    };
    releaseYears?: { start: number; end: number | null }[];
};

export type Genre = { name: string; slug: string };
