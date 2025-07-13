import type { FilmCardProps } from '@/entities/film';
import type { FiltersState } from '@/features/filters';

export interface Props {
    initFilters?: FiltersState;
    onFavoritesClick?: (id: number, filmData: FilmCardProps) => void;
    isInFavorites?: (id: number) => boolean;
}

export interface ContainerProps {
    initFilters?: FiltersState;
}
