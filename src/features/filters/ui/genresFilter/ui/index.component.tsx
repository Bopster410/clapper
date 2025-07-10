import { Autocomplete, CircularProgress, TextField } from '@mui/material';
import { type FunctionComponent } from 'react';
import type { Props } from './index.types';
export const GenresFilter: FunctionComponent<Props> = ({
    value,
    onGenresFilterChange,
    options,
    onClose,
    onOpen,
    open,
    loading,
}) => {
    return (
        <Autocomplete
            multiple
            value={value}
            onChange={(_, value: { name: string; slug: string }[] | null) => {
                if (onGenresFilterChange) onGenresFilterChange(value);
            }}
            limitTags={2}
            open={open}
            loading={loading}
            onOpen={onOpen}
            onClose={onClose}
            options={options ?? []}
            getOptionLabel={(option) => option.name}
            isOptionEqualToValue={(option, value) => option.slug === value.slug}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label='Жанры'
                    placeholder='Введите ваш любимый жанр'
                    slotProps={{
                        input: {
                            ...params.InputProps,
                            endAdornment: (
                                <>
                                    {loading ? (
                                        <CircularProgress
                                            color='inherit'
                                            size={20}
                                        />
                                    ) : null}
                                    {params.InputProps.endAdornment}
                                </>
                            ),
                        },
                    }}
                />
            )}
        />
    );
};
