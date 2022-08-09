import { Box, Container, Typography } from '@mui/material';
import type { NextPage } from 'next';
import { Navigation } from '../src/components/Navigation';
import { Header } from '../src/components/Header';

const Home: NextPage = () => {
  return (
    <Container disableGutters maxWidth={false}>
      <Box sx={{ bgcolor: 'background.paper', height: '100vh' }}>
        <Header />
        <Navigation />
      </Box>
    </Container>
  );
};

export default Home;
