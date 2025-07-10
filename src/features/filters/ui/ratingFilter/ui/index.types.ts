export interface Props {
    minRating: number;
    maxRating: number;
    value: number[];
    onRatingFilterChange?: (newRating: number[]) => void;
}
