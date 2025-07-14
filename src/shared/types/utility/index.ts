export type NumbersRange =
    | { min: number; max?: number }
    | { min?: number; max: number }
    | { min: number; max: number };
