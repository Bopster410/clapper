import { Box, Typography, Button } from '@mui/material';

export const Assert = ({
    onAccept,
    onCancel,
}: {
    onAccept?: () => void;
    onCancel?: () => void;
}) => {
    return (
        <Box sx={{ padding: '10px' }}>
            <Typography
                variant='h6'
                component='div'
            >
                Вы хотите добавить этот фильм в избранное?
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    gap: '12px',
                    width: '100%',
                    marginTop: '20px',
                }}
            >
                <Button
                    sx={{ flex: 1 }}
                    onClick={() => {
                        if (onAccept) onAccept();
                    }}
                >
                    Да
                </Button>
                <Button
                    sx={{ flex: 1 }}
                    onClick={() => {
                        if (onCancel) onCancel();
                    }}
                >
                    Нет
                </Button>
            </Box>
        </Box>
    );
};
