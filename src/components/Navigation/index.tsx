import React from 'react';
import { Box, Tabs, Tab } from '@mui/material';

import ExploreIcon from '@mui/icons-material/Explore';
import HomeIcon from '@mui/icons-material/Home';

interface NavigationProps {}

export const Navigation: React.FunctionComponent<NavigationProps> =
  ({}: NavigationProps) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    return (
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          '& button': {
            mt: '10px',
          },
        }}
      >
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="icon label tabs example"
        >
          <Tab icon={<HomeIcon />} label="Home" />
          <Tab icon={<ExploreIcon />} label="Top" />
          <Tab icon={<ExploreIcon />} label="Services" />
          <Tab icon={<ExploreIcon />} label="News" />
        </Tabs>
      </Box>
    );
  };
