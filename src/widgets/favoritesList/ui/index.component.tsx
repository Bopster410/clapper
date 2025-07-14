import { type FunctionComponent } from 'react';
import type { Props } from './index.types';
import { FilmsListWithFavorite } from '@/features/favorites';

export const FavoritesList: FunctionComponent<Props> = ({ films }) => {
    return <FilmsListWithFavorite films={films} />;
};
