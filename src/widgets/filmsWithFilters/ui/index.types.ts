import type { NumbersRange } from '../../../shared/types';

export interface Props {
    initialFilters?: {
        genres?: string[];
        rating?: NumbersRange;
        year?: NumbersRange;
    };
}
