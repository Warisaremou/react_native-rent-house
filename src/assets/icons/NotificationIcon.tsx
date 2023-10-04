import { FC } from "react";
import Svg, { Path } from "react-native-svg";

interface NotificationIconProps {
  size?: number;
  color?: string;
}

const NotificationIcon: FC<NotificationIconProps> = ({ size, color }) => {
  return (
    <Svg
      width={`${size ? size : 24}`}
      height={`${size ? size : 24}`}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M18.75 9.71V9.005C18.75 5.136 15.726 2 12 2C8.274 2 5.25 5.136 5.25 9.005V9.71C5.2512 10.5516 5.01105 11.3758 4.558 12.085L3.45 13.81C2.439 15.385 3.211 17.526 4.97 18.024C9.56611 19.327 14.4339 19.327 19.03 18.024C20.789 17.526 21.561 15.385 20.55 13.811L19.442 12.086C18.9886 11.3769 18.7481 10.5527 18.749 9.711L18.75 9.71Z"
        stroke={`${color ? color : "#434851"}`}
        strokeWidth="1.5"
      />
      <Path
        d="M7.5 19C8.155 20.748 9.922 22 12 22C14.078 22 15.845 20.748 16.5 19"
        stroke={`${color ? color : "#434851"}`}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default NotificationIcon;
