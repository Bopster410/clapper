import { Grid, Input, Slider } from '@mui/material';
import { type FunctionComponent } from 'react';
import type { Props } from './index.types';
export const YearsSlider: FunctionComponent<Props> = ({
    minYear,
    maxYear,
    onYearFilterChange,
    value,
}) => {
    const handleMaxInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (onYearFilterChange)
            onYearFilterChange([
                value[0],
                event.target.value === '' ? 0 : Number(event.target.value),
            ]);
    };

    const handleMaxBlur = () => {
        if (!onYearFilterChange) return;

        if (value[1] < value[0]) {
            onYearFilterChange([value[0], value[0]]);
        } else if (value[1] < minYear) {
            onYearFilterChange([value[0], minYear]);
        } else if (value[1] > maxYear) {
            onYearFilterChange([value[0], maxYear]);
        }
    };

    const handleMinInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (onYearFilterChange)
            onYearFilterChange([
                event.target.value === '' ? 0 : Number(event.target.value),
                value[1],
            ]);
    };

    const handleMinBlur = () => {
        if (!onYearFilterChange) return;

        if (value[1] < value[0]) {
            onYearFilterChange([value[1], value[1]]);
        } else if (value[0] < minYear) {
            onYearFilterChange([minYear, value[1]]);
        } else if (value[1] > maxYear) {
            onYearFilterChange([maxYear, value[1]]);
        }
    };

    const handleSliderChange = (_: Event, newYearRange: number[]) => {
        if (onYearFilterChange) onYearFilterChange(newYearRange);
    };

    return (
        <Grid
            container
            spacing={2}
            sx={{ alignItems: 'center' }}
        >
            <Grid>
                <Input
                    value={value[0]}
                    size='small'
                    onChange={handleMinInputChange}
                    onBlur={handleMinBlur}
                    inputProps={{
                        step: 1,
                        min: minYear,
                        max: maxYear,
                        type: 'number',
                    }}
                />
            </Grid>
            <Grid size='grow'>
                <Slider
                    value={value}
                    onChange={handleSliderChange}
                    min={minYear}
                    max={maxYear}
                />
            </Grid>
            <Grid>
                <Input
                    value={value[1]}
                    size='small'
                    onChange={handleMaxInputChange}
                    onBlur={handleMaxBlur}
                    inputProps={{
                        step: 1,
                        min: minYear,
                        max: maxYear,
                        type: 'number',
                    }}
                />
            </Grid>
        </Grid>
    );
};
