import type { FunctionComponent } from 'react';
import type { Props } from './index.types';
import { Typography } from '@mui/material';
import {
    COLOR_POINTS,
    DEFAULT_COLOR,
    DEFAULT_RANGE,
    RATING_POINTS,
} from './index.constants';

export const FilmRatingKp: FunctionComponent<Props> = ({
    variant,
    rating,
    range,
}) => {
    range = range && range.max > range.min ? range : DEFAULT_RANGE;
    const rangeDelta = range.max - range.min;

    let color = DEFAULT_COLOR;
    if (COLOR_POINTS.length - 1 === RATING_POINTS.length)
        for (let i = 0; i < RATING_POINTS.length; i++) {
            // Any other interval
            if (rating < RATING_POINTS[i] * rangeDelta) {
                color = COLOR_POINTS[i];
                break;
            }
            // Last interval
            if (i + 1 >= RATING_POINTS.length) {
                color = COLOR_POINTS[i + 1];
                break;
            }
        }

    return (
        <Typography
            variant={variant === 'header' ? 'h4' : 'body1'}
            sx={{
                fontWeight: '700',
                color: color,
            }}
            component='span'
        >
            {Math.round(rating * 10) / 10}
        </Typography>
    );
};
