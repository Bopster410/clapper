import { type FunctionComponent } from 'react';
import type { Props } from './index.types';
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Grid,
    Stack,
    Typography,
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import { YearsSlider } from './yearSlider';
import { RatingFilter } from './ratingFilter';
import { GenresFilterContainerApi } from './genresFilter';

export const FiltersCard: FunctionComponent<Props> = ({
    onGenresFilterChange,
    onRatingFilterChange,
    onYearFilterChange,
    year,
    rating,
    genres,
}) => {
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
                            <Typography variant='h5'>Фильтры</Typography>
                        </Grid>
                        <Grid>
                            <FilterListIcon />
                        </Grid>
                    </Grid>
                }
            />
            <CardContent>
                <Stack>
                    <GenresFilterContainerApi
                        value={genres}
                        onGenresFilterChange={onGenresFilterChange}
                    />
                    <Box>
                        <Typography>Год выпуска</Typography>
                        <YearsSlider
                            onYearFilterChange={(newYears) => {
                                if (onYearFilterChange)
                                    onYearFilterChange({
                                        min: newYears[0],
                                        max: newYears[1],
                                    });
                            }}
                            value={[year.min ?? 1990, year.max ?? 2025]}
                            minYear={1990}
                            maxYear={2025}
                        />
                    </Box>
                    <Box>
                        <Typography>Рейтинг</Typography>
                        <RatingFilter
                            onRatingFilterChange={(newRating) => {
                                if (onRatingFilterChange)
                                    onRatingFilterChange({
                                        min: newRating[0],
                                        max: newRating[1],
                                    });
                            }}
                            value={[rating.min ?? 0, rating.max ?? 5]}
                            minRating={0}
                            maxRating={5}
                        />
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    );
};
