import { FilmsWithFilters } from '@/widgets/filmsWithFilters';
import type { FunctionComponent } from 'react';
import type { Props } from './index.types';

export const HomePage: FunctionComponent<Props> = ({ filterParams }) => {
    return <FilmsWithFilters initFilters={filterParams} />;
};
