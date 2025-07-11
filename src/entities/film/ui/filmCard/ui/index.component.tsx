import type { FunctionComponent } from 'react';
import type { Props } from './index.types';
import {
    Card,
    CardActionArea,
    CardContent,
    CardHeader,
    CardMedia,
    Rating,
    Stack,
    Typography,
} from '@mui/material';

export const FilmCard: FunctionComponent<Props> = ({
    title,
    year,
    imageSrc,
    rating,
    id,
}) => {
    return (
        <Card>
            <CardActionArea href={`/film/${id}`}>
                <CardMedia
                    image={imageSrc}
                    title={title}
                    sx={{ aspectRatio: 3 / 4 }}
                />
                <CardHeader
                    sx={{
                        '& .MuiCardHeader-content': {
                            minWidth: 0,
                        },
                    }}
                    title={
                        <Typography
                            noWrap
                            variant='body1'
                            component='div'
                            sx={{
                                textOverflow: 'ellipsis',
                                overflow: 'hidden',
                                fontWeight: 500,
                            }}
                        >
                            {title}
                        </Typography>
                    }
                    subheader={
                        <Typography
                            variant='subtitle2'
                            color='textSecondary'
                        >
                            {year}
                        </Typography>
                    }
                />
                <CardContent>
                    <Stack
                        direction='row'
                        spacing={1}
                        sx={{ alignItems: 'center' }}
                    >
                        <Rating
                            value={rating}
                            readOnly
                            precision={0.1}
                            size='small'
                        />
                        <Typography variant='subtitle2'>{rating}</Typography>
                    </Stack>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};
