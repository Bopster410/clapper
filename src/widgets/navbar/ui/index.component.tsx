import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import { Box, type SxProps, type Theme } from '@mui/material';
import { Link, NavLink } from 'react-router';

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
              elevation: 0,
              sx: {
                  backdropFilter: trigger ? 'blur(10px)' : 'none',
                  backgroundColor: 'rgba(25, 118, 210, 0.9)',
              },
          })
        : null;
}

export const Navbar = (props: Props) => {
    return (
        <>
            <ElevationScroll {...props}>
                <AppBar>
                    <Toolbar sx={{ display: 'flex' }}>
                        <Box
                            component={Link}
                            to='/'
                            sx={{
                                color: 'inherit',
                                textDecoration: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                flexGrow: '1',
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
                        <NavLink
                            to='/favorites'
                            style={({ isActive }) => ({
                                textDecoration: 'none',
                                color: isActive ? '#BBB' : 'white',
                            })}
                        >
                            <Typography variant='h6'>Избранное</Typography>
                        </NavLink>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
        </>
    );
};
