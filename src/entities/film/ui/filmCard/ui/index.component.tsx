import type { FunctionComponent } from 'react';
import type { Props } from './index.types';
import {
    Card,
    CardActionArea,
    CardActions,
    CardHeader,
    CardMedia,
    Typography,
} from '@mui/material';
import { FilmRating } from '@/shared/uikit/filmRating';
import { CustomLink } from '@/shared/uikit/customLink';

export const FilmCard: FunctionComponent<Props> = ({
    title,
    year,
    imageSrc,
    rating,
    id,
    slots,
    slotsProps,
}) => {
    return (
        <Card>
            <CardActionArea
                LinkComponent={CustomLink}
                href={`/film/${id}`}
            >
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
                    action={
                        <FilmRating
                            variant='body'
                            rating={rating}
                        />
                    }
                />
            </CardActionArea>
            <CardActions sx={{ paddingTop: 0 }}>
                {slots && slots.favoriteBtn && (
                    <slots.favoriteBtn {...slotsProps?.favorteBtn} />
                )}
            </CardActions>
        </Card>
    );
};
