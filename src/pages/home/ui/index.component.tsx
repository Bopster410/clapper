import type { FunctionComponent } from 'react';
import type { Props } from './index.types';
import { FilmsWithFilters } from '@/widgets/filmsWithFilters';

export const HomePage: FunctionComponent<Props> = ({ filterParams }) => {
    return <FilmsWithFilters initFilters={filterParams} />;
};
