import { Grid, TextField } from '@mui/material';
import { type FunctionComponent } from 'react';
import type { Props } from './index.types';
export const RatingFilter: FunctionComponent<Props> = ({
    minRating,
    maxRating,
    onRatingFilterChange,
    value,
}) => {
    const handleMaxInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (onRatingFilterChange)
            onRatingFilterChange([
                value[0],
                event.target.value === '' ? 0 : Number(event.target.value),
            ]);
    };

    const handleMaxBlur = () => {
        if (!onRatingFilterChange) return;

        if (value[1] < value[0]) {
            onRatingFilterChange([value[0], value[0]]);
        } else if (value[1] < minRating) {
            onRatingFilterChange([value[0], minRating]);
        } else if (value[1] > maxRating) {
            onRatingFilterChange([value[0], maxRating]);
        }
    };

    const handleMinInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (onRatingFilterChange)
            onRatingFilterChange([
                event.target.value === '' ? 0 : Number(event.target.value),
                value[1],
            ]);
    };

    const handleMinBlur = () => {
        if (!onRatingFilterChange) return;

        if (value[1] < value[0]) {
            onRatingFilterChange([value[1], value[1]]);
        } else if (value[0] < minRating) {
            onRatingFilterChange([minRating, value[1]]);
        } else if (value[1] > maxRating) {
            onRatingFilterChange([maxRating, value[1]]);
        }
    };

    return (
        <Grid
            container
            spacing={2}
            sx={{ alignItems: 'center' }}
        >
            <Grid>
                <TextField
                    label='от'
                    value={value[0]}
                    size='small'
                    onChange={handleMinInputChange}
                    onBlur={handleMinBlur}
                    slotProps={{
                        htmlInput: {
                            step: 0.1,
                            min: minRating,
                            max: maxRating,
                            type: 'number',
                        },
                    }}
                />
            </Grid>
            <Grid>
                <TextField
                    label='до'
                    value={value[1]}
                    size='small'
                    onChange={handleMaxInputChange}
                    onBlur={handleMaxBlur}
                    slotProps={{
                        htmlInput: {
                            step: 0.1,
                            min: minRating,
                            max: maxRating,
                            type: 'number',
                        },
                    }}
                />
            </Grid>
        </Grid>
    );
};
