import Image from 'next/image';

import auroraIcon from '../../../public/Icon.svg';

interface IconProps {
  height?: number;
  width?: number;
}

export const LogoIcon = ({ height = 50, width = 50 }: IconProps) => (
  <Image
    src={auroraIcon}
    alt="logo icon"
    width={width}
    height={height}
    style={{ borderRadius: '10px' }}
  />
);
