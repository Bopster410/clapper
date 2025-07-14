export interface Props {
    defaultYears: {
        min: number;
        max: number;
    };
    defaultRating: {
        min: number;
        max: number;
    };
}

export type SearchParams = {
    yearmin: string;
    yearmax: string;
    ratingmin: string;
    ratingmax: string;
    genres: string;
};
