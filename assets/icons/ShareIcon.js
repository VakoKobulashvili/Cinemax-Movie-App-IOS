import React from "react";
import Svg, { Path } from "react-native-svg";

const ShareIcon = ({ color }) => {
  return (
    <Svg
      width="16"
      height="16"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9 0H4C1.791 0 0 1.791 0 4V16C0 18.209 1.791 20 4 20H16C18.209 20 20 18.209 20 16C20 13.729 20 11 20 11C20 10.448 19.552 10 19 10C18.448 10 18 10.448 18 11V16C18 17.104 17.104 18 16 18C12.67 18 7.329 18 4 18C2.895 18 2 17.104 2 16C2 12.67 2 7.329 2 4C2 2.895 2.895 2 4 2H9C9.552 2 10 1.552 10 1C10 0.448 9.552 0 9 0ZM16.586 2H13C12.448 2 12 1.552 12 1C12 0.448 12.448 0 13 0H19C19.552 0 20 0.448 20 1V7C20 7.552 19.552 8 19 8C18.448 8 18 7.552 18 7V3.414L10.707 10.707C10.317 11.097 9.683 11.097 9.293 10.707C8.902 10.317 8.902 9.683 9.293 9.293L16.586 2Z"
        fill={color}
      />
    </Svg>
  );
};

export default ShareIcon;
