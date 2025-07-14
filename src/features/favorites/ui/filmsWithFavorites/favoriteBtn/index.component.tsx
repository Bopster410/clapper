import { type FunctionComponent } from 'react';
import type { Props } from './index.types';
import { IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const FavoriteBtn: FunctionComponent<Props> = ({
    isFavorite,
    filmId,
}) => {
    return (
        <IconButton data-film-id={filmId}>
            {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
    );
};
