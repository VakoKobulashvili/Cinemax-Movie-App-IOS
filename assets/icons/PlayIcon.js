import React from "react";
import Svg, { Path } from "react-native-svg";

const PlayIcon = ({ color }) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M8 6.82V17.18C8 17.97 8.87 18.45 9.54 18.02L17.68 12.84C18.3 12.45 18.3 11.55 17.68 11.15L9.54 5.98C8.87 5.55 8 6.03 8 6.82Z"
        fill={color}
      />
    </Svg>
  );
};

export default PlayIcon;
