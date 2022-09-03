import React from "react";
import { Avatar as MuiAvatar } from "@mui/material";
interface AvatarProps {
  height?: number;
  width?: number;
  src?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  height = 50,
  width = 50,
  src = "https://pps.whatsapp.net/v/t61.24694-24/286170116_1163929854391014_8181499773682605496_n.jpg?ccb=11-4&oh=01_AVzGhLeW6wnFXRcJbEHOoHR7d66OlNio4PELne0rxrkkyg&oe=62C166A8",
}) => {
  return (
    <MuiAvatar
      alt="Kelly gostosa"
      src={src}
      sx={{ height: height, width: width }}
    />
  );
};
