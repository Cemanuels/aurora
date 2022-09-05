import { NextComponentType } from 'next';

import { Box, Typography, Stack } from '@mui/material';
import { Avatar } from '../Avatar';
import { BannerImg } from '../../assets/Icons/Banner';

export const Banner: NextComponentType = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 300,
        width: '100%',
        backgroundColor: (theme) => theme.palette.secondary.light,
        borderRadius: '50px',
        marginLeft: '42px',
        padding: '73px 0 50px 50px',
      }}
    >
      <Stack spacing={2.25}>
        <Typography
          fontSize="40px"
          lineHeight="49px"
          fontWeight="700"
          color="background.paper"
        >
          Popular and affordable
          <br />
          collections
        </Typography>

        <Stack direction="row" spacing={2}>
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
        </Stack>
      </Stack>
      <Box sx={{ position: 'absolute', right: 0 }}>
        <BannerImg />
      </Box>
    </Box>
  );
};
