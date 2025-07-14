import { type FunctionComponent } from 'react';
import type { Props } from './index.types';
import { Box, Grid } from '@mui/material';
import { FiltersCardContainer } from '@/features/filters/ui/index.container.context';
import { FiltersProvider, UrlFilterParamsSetter } from '@/features/filters';
import {
    DEFAULT_APP_BAR_HEIGHT,
    DEFAULT_MAX_RATING,
    DEFAULT_MAX_YEAR,
    DEFAULT_MIN_RATING,
    DEFAULT_MIN_YEAR,
    DEFAULT_TOP_PADDING,
} from './index.constants';
import { FilmsListApiLoader } from './filmsList';
import { FilmsListWithFavorite } from '@/features/favorites';

export const FilmsWithFilters: FunctionComponent<Props> = ({ initFilters }) => {
    return (
        <FiltersProvider initValues={initFilters}>
            <UrlFilterParamsSetter
                defaultYears={{
                    min: DEFAULT_MIN_YEAR,
                    max: DEFAULT_MAX_YEAR,
                }}
                defaultRating={{
                    min: DEFAULT_MIN_RATING,
                    max: DEFAULT_MAX_RATING,
                }}
            />
            <Grid
                container
                columnSpacing={2}
            >
                <Grid size={3.5}>
                    <Box
                        sx={{
                            position: 'sticky',
                            top: `${
                                DEFAULT_APP_BAR_HEIGHT + DEFAULT_TOP_PADDING
                            }px`,
                        }}
                    >
                        <FiltersCardContainer
                            yearRange={{
                                min: DEFAULT_MIN_YEAR,
                                max: DEFAULT_MAX_YEAR,
                            }}
                            ratingRange={{
                                min: DEFAULT_MIN_RATING,
                                max: DEFAULT_MAX_RATING,
                            }}
                        />
                    </Box>
                </Grid>
                <Grid size={8.5}>
                    <FilmsListApiLoader
                        FilmsListComponent={FilmsListWithFavorite}
                    />
                </Grid>
            </Grid>
        </FiltersProvider>
    );
};
