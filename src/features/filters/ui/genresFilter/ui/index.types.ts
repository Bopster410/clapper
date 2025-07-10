import type { Genre } from '../../../../../entities/film';

export interface Props {
    open?: boolean;
    loading?: boolean;
    options?: readonly Genre[];
    onOpen?: () => void;
    onClose?: () => void;
    value?: Genre[];
    onGenresFilterChange?: (newGenres: Genre[] | null) => void;
}

export interface ContainerApiProps {
    value?: Genre[];
    onGenresFilterChange?: (newGenres: Genre[] | null) => void;
}
