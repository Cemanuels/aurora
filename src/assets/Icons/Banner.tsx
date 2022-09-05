import React from 'react';
import Image from 'next/image';

import bannerImg from '../../../public/banner.png';

export const BannerImg = () => <Image src={bannerImg} alt="banner img" />;
