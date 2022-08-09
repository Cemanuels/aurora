import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SearchBar } from '../SearchBar';
import { ThemeProvider } from '@mui/material';
import { theme } from '../../assets/styles/theme';

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SearchBar>;

const searchBarMock = [
  {
    name: 'Bird World Mistery Box',
    volume: 813.7972,
    floorPrice: 750.9,
    image:
      'https://public.nftstatic.com/static/nft/res/nft-cex/S3/1654870821554_wtcwdjfryvbwboy0317zgntyijdxogvy.png',
  },
  {
    name: 'WonderfulDay Tiger NFT',
    volume: 13020934.6,
    floorPrice: 549.66,
    image:
      'https://public.nftstatic.com/static/nft/res/nft-cex/S3/1655415405337_ceh1l7pdwkffxeeg2kem6hulnc3qpgr9.png',
  },
  {
    name: 'LoK Drago Genesis NFT',
    volume: 149752.55,
    floorPrice: 59.97,
    image:
      'https://public.nftstatic.com/static/nft/res/nft-cex/S3/1655454792058_elim8t9tx6cp4w9esx6ebh4517ebhuge.png',
  },
];

const Template: ComponentStory<typeof SearchBar> = (args) => (
  <ThemeProvider theme={theme}>
    <SearchBar searchData={searchBarMock} {...args} />
  </ThemeProvider>
);

export const Primary = Template.bind({});
