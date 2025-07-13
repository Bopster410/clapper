import type { FunctionComponent } from 'react';
import type { Props } from './index.types';
import { FilmsWithFiltersContainerStore } from '@/widgets/filmsWithFilters/ui/index.container.store';

export const HomePage: FunctionComponent<Props> = ({ filterParams }) => {
    return <FilmsWithFiltersContainerStore initFilters={filterParams} />;
};
