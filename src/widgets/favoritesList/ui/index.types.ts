import type { FilmCardProps } from '@/entities/film';

export interface Props {
    films: FilmCardProps[];
    onRemoveFromFavorites?: (id: number) => void;
}
