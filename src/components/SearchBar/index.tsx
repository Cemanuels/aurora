import React, { FormEventHandler } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import { ProductProps } from '../../types/ProductProps';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, InputBase, Paper, Theme, Typography } from '@mui/material';
import { SearchBarInput } from './styles';

interface SearchBarProps {
  searchData?: ProductProps[];
  onSubmit?: (value?: string) => any;
  onChange?: (value?: string) => any;
}

export const SearchBar: React.FunctionComponent<SearchBarProps> = ({
  searchData = [],
  onSubmit,
  onChange,
}: SearchBarProps) => {
  return (
    <Autocomplete
      freeSolo
      id="search-bar"
      options={searchData.map((option) => option.name)}
      style={{ width: '100%', maxWidth: '550px', padding: '0 20px' }}
      renderInput={(params) => (
        <Paper
          component="form"
          onSubmit={(event: any) => {
            event.preventDefault();
            onSubmit && onSubmit(event.target['0'].value);
          }}
          onChange={(event: any) => {
            onChange && onChange(event.target.value);
          }}
          ref={params.InputProps.ref}
          elevation={0}
          sx={{
            height: 50,
            width: '100%',
            maxWidth: '550px',
            display: 'flex',
            alignItems: 'center',
            borderRadius: 2.5,
            backgroundColor: (theme) => theme.palette.background.default,
            boxShadow: 'inset 0px 1px 0px rgba(0, 0, 0, 0.05)',
          }}
        >
          <SearchBarInput
            {...params.inputProps}
            type="text"
            placeholder="Most searched for: cyberpunks"
            aria-label="search nft"
          />
          <IconButton
            type="submit"
            aria-label="search"
            sx={{
              p: 2,
              color: 'rgba(35, 35, 35, 0.4)',
            }}
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      )}
    />
  );
};
