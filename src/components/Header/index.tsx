import {
  Avatar,
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import { NextComponentType } from 'next';
import { LogoIcon } from '../../assets/Icons/LogoIcon';
import AddIcon from '@mui/icons-material/Add';
import { SearchBar } from '../SearchBar';

export const Header: NextComponentType = () => {
  const router = useRouter();

  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      justifyContent="space-between"
      padding="40px"
    >
      <Box
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <LogoIcon />
        <Typography
          sx={{
            marginLeft: '15px',
            fontSize: 28,
            lineHeight: '35px',
            letterSpacing: '0.2em',
            fontWeight: 700,
          }}
        >
          AURORA
        </Typography>
      </Box>
      <SearchBar
        onSubmit={(value) => console.log(value)}
        onChange={(value) => console.log(value)}
      />
      <Stack
        direction="row"
        justifyContent="center"
        spacing={4}
        alignItems="center"
      >
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            height: '50px',
            width: '145px',
            borderRadius: '100px',
            textTransform: 'none',
            backgroundColor: '#1F50FF',
            boxShadow: 'none',
            border: '3px solid transparent',

            transition: 'color 0.5s, transform 0.2s, background-color 0.2s',

            '&:hover': {
              backgroundColor: '#000',
            },
          }}
          onClick={() => {
            router.push('/create');
          }}
        >
          Create
        </Button>
        <IconButton
          onClick={() => {
            router.push('/profile');
          }}
        >
          <Avatar
            alt="Kelly gostosa"
            src="https://pps.whatsapp.net/v/t61.24694-24/286170116_1163929854391014_8181499773682605496_n.jpg?ccb=11-4&oh=01_AVzGhLeW6wnFXRcJbEHOoHR7d66OlNio4PELne0rxrkkyg&oe=62C166A8"
          />
        </IconButton>
      </Stack>
    </Stack>
  );
};
