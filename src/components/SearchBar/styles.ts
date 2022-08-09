import { styled } from '@mui/material';

export const SearchBarInput = styled('input')(() => ({
  width: '100%',
  marginLeft: '20px',
  padding: '4px 0 5px',
  fontSize: '1em',
  lineHeight: '1.4375em',
  fontWeight: '400',
  letterSpacing: '0.00938em',
  fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  background: 'none',
  border: '0',

  '::placeholder': {
    color: 'rgba(35, 35, 35, 0.4)',
  },

  ':focus': {
    outline: 'none',
  },
}));
