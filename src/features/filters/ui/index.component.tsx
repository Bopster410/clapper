import { type FunctionComponent } from 'react';
import type { Props } from './index.types';
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    Stack,
    Typography,
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import { YearsSlider } from './yearSlider';
import { RatingFilter } from './ratingFilter';
import { GenresFilterContainerApi } from './genresFilter';
import {
    DEFAULT_MAX_RATING,
    DEFAULT_MAX_YEAR,
    DEFAULT_MIN_RATING,
    DEFAULT_MIN_YEAR,
} from './index.constants';

export const FiltersCard: FunctionComponent<Props> = ({
    onGenresFilterChange,
    onRatingFilterChange,
    onYearFilterChange,
    year,
    rating,
    genres,
    yearRange,
    ratingRange,
}) => {
    const { min: minYear, max: maxYear } = {
        min: yearRange?.min ?? DEFAULT_MIN_YEAR,
        max: yearRange?.max ?? DEFAULT_MAX_YEAR,
    };

    const { min: minRating, max: maxRating } = {
        min: ratingRange?.min ?? DEFAULT_MIN_RATING,
        max: ratingRange?.max ?? DEFAULT_MAX_RATING,
    };

    return (
        <Card>
            <CardHeader
                title={
                    <Grid
                        container
                        spacing={1.5}
                        sx={{
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Grid>
                            <Typography variant='h6'>Фильтры</Typography>
                        </Grid>
                        <Grid>
                            <FilterListIcon />
                        </Grid>
                    </Grid>
                }
            />
            <Divider />
            <CardContent>
                <Stack spacing={3}>
                    <GenresFilterContainerApi
                        value={genres}
                        onGenresFilterChange={onGenresFilterChange}
                    />
                    <Box>
                        <Typography
                            variant='body1'
                            sx={{ marginBottom: '8px', fontWeight: 500 }}
                        >
                            Год выпуска
                        </Typography>
                        <YearsSlider
                            onYearFilterChange={(newYears) => {
                                if (onYearFilterChange)
                                    onYearFilterChange({
                                        min: newYears[0],
                                        max: newYears[1],
                                    });
                            }}
                            value={[year?.min ?? minYear, year?.max ?? maxYear]}
                            minYear={minYear}
                            maxYear={maxYear}
                        />
                    </Box>
                    <Box>
                        <Typography
                            variant='body1'
                            sx={{ marginBottom: '8px', fontWeight: 500 }}
                        >
                            Рейтинг
                        </Typography>
                        <RatingFilter
                            onRatingFilterChange={(newRating) => {
                                if (onRatingFilterChange)
                                    onRatingFilterChange({
                                        min: newRating[0],
                                        max: newRating[1],
                                    });
                            }}
                            value={[
                                rating?.min ?? minRating,
                                rating?.max ?? maxRating,
                            ]}
                            minRating={minRating}
                            maxRating={maxRating}
                        />
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    );
};
