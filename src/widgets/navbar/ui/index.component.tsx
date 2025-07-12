import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import { Box, type SxProps, type Theme } from '@mui/material';

interface Props {
    children?: React.ReactElement<{ elevation?: number; sx: SxProps<Theme> }>;
}

function ElevationScroll(props: Props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return children
        ? React.cloneElement(children, {
              elevation: trigger ? 4 : 0,
              sx: {
                  backdropFilter: trigger ? 'blur(10px)' : 'none',
                  backgroundColor: trigger
                      ? 'rgba(25, 118, 210, 0.8)'
                      : 'primary.main',
              },
          })
        : null;
}

export const Navbar = (props: Props) => {
    return (
        <>
            <ElevationScroll {...props}>
                <AppBar>
                    <Toolbar>
                        <Box
                            component='a'
                            href='/'
                            sx={{
                                color: 'inherit',
                                textDecoration: 'none',
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <MovieOutlinedIcon />
                            <Typography
                                variant='h6'
                                component='span'
                                noWrap
                            >
                                Clapper
                            </Typography>
                        </Box>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
        </>
    );
};
