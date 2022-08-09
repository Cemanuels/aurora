import Image from 'next/image';

import momoIcon from '../../../public/momo.jpeg';

interface IconProps {
  height?: number;
  width?: number;
}

export const MomoIcon = ({ height = 1000, width = 2000 }: IconProps) => (
  <Image
    src={momoIcon}
    alt="logo icon"
    width={width}
    height={height}
    style={{ borderRadius: '10px' }}
  />
);
