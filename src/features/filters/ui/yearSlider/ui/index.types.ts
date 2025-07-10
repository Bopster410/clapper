export interface Props {
    minYear: number;
    maxYear: number;
    value: number[];
    onYearFilterChange?: (newYears: number[]) => void;
}
