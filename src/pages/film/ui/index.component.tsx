import { Box, Chip, Container, Grid, Typography } from '@mui/material';
import type { FunctionComponent } from 'react';
// import { useParams } from 'react-router';
import type { Props } from './index.types';

export const FilmPage: FunctionComponent<Props> = ({
    title,
    poster,
    year,
    releaseYears,
    description,
    rating,
    genres,
}) => {
    return (
        <Container fixed>
            <Grid
                container
                spacing={3}
            >
                <Grid size={3}>
                    <img
                        style={{ width: '100%' }}
                        src={poster}
                    />
                </Grid>
                <Grid size={6}>
                    <Box sx={{ marginBottom: '16px' }}>
                        <Grid
                            container
                            columnSpacing={1}
                        >
                            <Grid>
                                <Typography
                                    variant='h4'
                                    // sx={{ whiteSpace: 'nowrap' }}
                                >
                                    {title.name}
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography variant='h4'>
                                    {releaseYears
                                        ? `(${releaseYears[0].start} — ${
                                              releaseYears[
                                                  releaseYears.length - 1
                                              ].end ?? '...'
                                          })`
                                        : year
                                        ? `(${year})`
                                        : undefined}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Typography
                            variant='h5'
                            color='textSecondary'
                        >
                            {`${title.altName}`}
                        </Typography>
                    </Box>
                    <Typography variant='body1'>{description}</Typography>
                </Grid>
                <Grid size={3}>
                    <Typography
                        variant='h4'
                        sx={{
                            fontWeight: '700',
                            color:
                                rating.kp >= 7
                                    ? 'var(--color-green-500)'
                                    : rating.kp >= 6
                                    ? 'var(--color-orange-500)'
                                    : 'var(--color-red-500)',
                        }}
                        component='span'
                    >
                        {Math.round(rating.kp * 10) / 10}
                    </Typography>
                    <Grid
                        container
                        columnSpacing={0.5}
                        sx={{ marginTop: '12px' }}
                    >
                        {genres.map(({ name }) => (
                            <Grid key={name}>
                                <Chip label={name} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};
