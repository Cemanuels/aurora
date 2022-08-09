import React from 'react';
import { Box, Tabs, Tab } from '@mui/material';

// Icons
import ExploreIcon from '@mui/icons-material/Explore';
import GraphIcon from '@mui/icons-material/SignalCellularAlt';
import GridViewIcon from '@mui/icons-material/GridView';
import NewsPaperIcon from '@mui/icons-material/Newspaper';

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
            height: '80px',
            width: '80px',
            margin: '10px 0',
            padding: '0',
            fontSize: '16px',

            '&[aria-selected=true]': {
              backgroundColor: 'rgba(35, 35, 35, 0.1)',
              borderRadius: '10px',
              fontSize: '0'
            },
          },
        }}
      >
        <Tabs
          orientation="vertical"
          value={value}
          textColor="secondary"
          indicatorColor="secondary"
          onChange={handleChange}
          aria-label="aurora-navigation"
        >
          <Tab icon={<ExploreIcon sx={{fontSize: 35}} />} label="Home" />
          <Tab icon={<GraphIcon sx={{fontSize: 35}} />} label="Top" />
          <Tab icon={<GridViewIcon sx={{fontSize: 35}} />} label="Services" />
          <Tab icon={<NewsPaperIcon sx={{fontSize: 35}} />} label="News" />
        </Tabs>
      </Box>
    );
  };
