import type { Genre } from '../../../entities/film';
import type { NumbersRange } from '../../../shared/types';

export interface State {
    genres: Genre[];
    rating: NumbersRange | null;
    year: NumbersRange | null;
}

export type Action =
    | {
          type: 'SET_GENRES';
          payload: Genre[];
      }
    | {
          type: 'SET_RATING' | 'SET_YEAR';
          payload: NumbersRange;
      };
