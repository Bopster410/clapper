import type { BoxProps } from '@mui/material';

export interface Props extends BoxProps {
    onFavoritesClick: (id: number) => void;
}
