import * as React from 'react';
import Svg, {
  Path,
  Rect,
  Circle,
  G,
  Defs,
  ClipPath,
  Mask,
  Ellipse,
} from 'react-native-svg';

interface IconProps {
  size?: number;
  color?: string;
  width?: number;
  height?: number;
}

export const CBXMEETLOGO: React.FC<IconProps> = ({ width, height, color }) => (
  <Svg width={width} height={height} viewBox="0 0 171 153" fill="none">
    <Circle
      cx={85.0427}
      cy={20.446}
      r={15.5}
      transform="rotate(6.9747 85.0427 20.446)"
      stroke="#142F5A"
      strokeWidth={2}
    />
    <Path
      d="M52.403 26.3529C51.5196 29.3003 51.0188 32.4159 50.9594 35.6431C50.6089 54.6936 65.7683 70.4214 84.8188 70.772C103.869 71.1226 119.597 55.9631 119.948 36.9126C120.044 31.662 118.963 26.6635 116.946 22.17C112.615 36.6214 99.0837 47.0304 83.2607 46.7393C69.4608 46.4853 57.7028 38.1626 52.403 26.3529Z"
      fill="#142F5A"
    />
    <Circle
      cx={137.852}
      cy={109.366}
      r={16.5}
      transform="rotate(123.814 137.852 109.366)"
      fill="#142F5A"
    />
    <Path
      d="M93.9317 86.913C102.587 70.561 122.86 64.3216 139.212 72.9769C141.168 74.0126 142.978 75.2157 144.636 76.5564C132.297 76.933 120.501 83.7433 114.311 95.4374C107.14 108.985 109.619 125.07 119.32 135.828C115.423 135.334 111.547 134.141 107.868 132.193C91.5157 123.538 85.2763 103.265 93.9317 86.913Z"
      stroke="#142F5A"
      strokeWidth={2}
    />
    <Circle
      cx={16.5}
      cy={16.5}
      r={15.5}
      transform="matrix(0.556492 0.830853 0.830853 -0.556492 9.729 105.317)"
      stroke="#142F5A"
      strokeWidth={2}
    />
    <Path
      d="M76.5405 87.3907C67.8851 71.0388 47.6124 64.7994 31.2604 73.4547C29.3038 74.4904 27.4939 75.6935 25.836 77.0342C38.1752 77.4108 49.9709 84.2211 56.1608 95.9152C63.3318 109.463 60.8534 125.548 51.152 136.305C55.049 135.811 58.9252 134.618 62.6045 132.671C78.9565 124.015 85.1959 103.743 76.5405 87.3907Z"
      stroke="#142F5A"
      strokeWidth={2}
    />
  </Svg>
);

export const HomeIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 25 24" fill="none">
    <Path
      d="M15.5928 15.1111C15.5928 15.0816 15.4874 15.0534 15.2999 15.0325C15.1123 15.0117 14.858 15 14.5928 15H10.5928C10.3276 15 10.0732 15.0117 9.88567 15.0325C9.69813 15.0534 9.59277 15.0816 9.59277 15.1111"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3.59277 9.15763C3.5927 8.89731 3.65611 8.64012 3.77856 8.40398C3.90102 8.16785 4.07957 7.95846 4.30177 7.79043L11.3018 2.42276C11.6628 2.14977 12.1201 2 12.5928 2C13.0654 2 13.5228 2.14977 13.8838 2.42276L20.8838 7.79043C21.106 7.95846 21.2845 8.16785 21.407 8.40398C21.5294 8.64012 21.5928 8.89731 21.5928 9.15763V17.2105C21.5928 17.6851 21.3821 18.1403 21.007 18.4759C20.6319 18.8115 20.1232 19 19.5928 19H5.59277C5.06234 19 4.55363 18.8115 4.17856 18.4759C3.80349 18.1403 3.59277 17.6851 3.59277 17.2105V9.15763Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const EventIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Rect
      x={1.03867}
      y={0.852143}
      width={22.2947}
      height={22.2947}
      rx={5.37985}
      stroke={color}
      strokeWidth={0.891786}
    />
    <Path
      d="M0.623047 7.89258H23.693"
      stroke="#B0C9F5"
      strokeWidth={0.891786}
    />
    <Circle cx={8.74294} cy={4.01833} r={1.22341} fill="#B0C9F5" />
    <Circle
      cx={10.0608}
      cy={11.679}
      r={0.779305}
      stroke={color}
      strokeWidth={0.713429}
    />
    <Circle cx={10.388} cy={15.9739} r={1.13602} fill="#B0C9F5" />
    <Circle
      cx={14.3128}
      cy={11.679}
      r={0.779305}
      stroke={color}
      strokeWidth={0.713429}
    />
    <Circle
      cx={14.3128}
      cy={15.9739}
      r={0.779305}
      stroke={color}
      strokeWidth={0.713429}
    />
    <Circle
      cx={5.76981}
      cy={15.9739}
      r={0.779305}
      stroke={color}
      strokeWidth={0.713429}
    />
    <Circle
      cx={18.5091}
      cy={11.679}
      r={0.779305}
      stroke={color}
      strokeWidth={0.713429}
    />
    <Circle cx={15.4402} cy={4.01833} r={1.22341} fill="#B0C9F5" />
  </Svg>
);

export const DashboardIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 25 24" fill="none">
    <Path
      d="M9.68652 3H4.68652C4.13424 3 3.68652 3.44772 3.68652 4V11C3.68652 11.5523 4.13424 12 4.68652 12H9.68652C10.2388 12 10.6865 11.5523 10.6865 11V4C10.6865 3.44772 10.2388 3 9.68652 3Z"
      stroke="#B0C9F5"
      strokeWidth={0.96}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M20.6865 3H15.6865C15.1342 3 14.6865 3.44772 14.6865 4V7C14.6865 7.55228 15.1342 8 15.6865 8H20.6865C21.2388 8 21.6865 7.55228 21.6865 7V4C21.6865 3.44772 21.2388 3 20.6865 3Z"
      stroke="#B0C9F5"
      strokeWidth={0.96}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M20.6865 12H15.6865C15.1342 12 14.6865 12.4477 14.6865 13V20C14.6865 20.5523 15.1342 21 15.6865 21H20.6865C21.2388 21 21.6865 20.5523 21.6865 20V13C21.6865 12.4477 21.2388 12 20.6865 12Z"
      stroke="#B0C9F5"
      strokeWidth={0.96}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.68652 16H4.68652C4.13424 16 3.68652 16.4477 3.68652 17V20C3.68652 20.5523 4.13424 21 4.68652 21H9.68652C10.2388 21 10.6865 20.5523 10.6865 20V17C10.6865 16.4477 10.2388 16 9.68652 16Z"
      stroke="#B0C9F5"
      strokeWidth={0.96}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const SettingsIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 25 24" fill="none">
    <Path
      d="M12.9065 2H12.4665C11.9361 2 11.4274 2.21071 11.0523 2.58579C10.6772 2.96086 10.4665 3.46957 10.4665 4V4.18C10.4662 4.53073 10.3736 4.87519 10.1981 5.17884C10.0225 5.48248 9.77026 5.73464 9.46653 5.91L9.03653 6.16C8.73249 6.33554 8.3876 6.42795 8.03653 6.42795C7.68545 6.42795 7.34056 6.33554 7.03653 6.16L6.88653 6.08C6.42759 5.81526 5.88236 5.74344 5.37053 5.88031C4.85869 6.01717 4.42208 6.35154 4.15653 6.81L3.93653 7.19C3.67179 7.64893 3.59997 8.19416 3.73683 8.706C3.8737 9.21783 4.20806 9.65445 4.66653 9.92L4.81653 10.02C5.1188 10.1945 5.37014 10.4451 5.54558 10.7468C5.72101 11.0486 5.81442 11.391 5.81653 11.74V12.25C5.81792 12.6024 5.72618 12.949 5.55057 13.2545C5.37496 13.5601 5.12173 13.8138 4.81653 13.99L4.66653 14.08C4.20806 14.3456 3.8737 14.7822 3.73683 15.294C3.59997 15.8058 3.67179 16.3511 3.93653 16.81L4.15653 17.19C4.42208 17.6485 4.85869 17.9828 5.37053 18.1197C5.88236 18.2566 6.42759 18.1847 6.88653 17.92L7.03653 17.84C7.34056 17.6645 7.68545 17.5721 8.03653 17.5721C8.3876 17.5721 8.73249 17.6645 9.03653 17.84L9.46653 18.09C9.77026 18.2654 10.0225 18.5175 10.1981 18.8212C10.3736 19.1248 10.4662 19.4693 10.4665 19.82V20C10.4665 20.5304 10.6772 21.0391 11.0523 21.4142C11.4274 21.7893 11.9361 22 12.4665 22H12.9065C13.437 22 13.9457 21.7893 14.3207 21.4142C14.6958 21.0391 14.9065 20.5304 14.9065 20V19.82C14.9069 19.4693 14.9995 19.1248 15.175 18.8212C15.3505 18.5175 15.6028 18.2654 15.9065 18.09L16.3365 17.84C16.6406 17.6645 16.9855 17.5721 17.3365 17.5721C17.6876 17.5721 18.0325 17.6645 18.3365 17.84L18.4865 17.92C18.9455 18.1847 19.4907 18.2566 20.0025 18.1197C20.5144 17.9828 20.951 17.6485 21.2165 17.19L21.4365 16.8C21.7013 16.3411 21.7731 15.7958 21.6362 15.284C21.4994 14.7722 21.165 14.3356 20.7065 14.07L20.5565 13.99C20.2513 13.8138 19.9981 13.5601 19.8225 13.2545C19.6469 12.949 19.5551 12.6024 19.5565 12.25V11.75C19.5551 11.3976 19.6469 11.051 19.8225 10.7455C19.9981 10.4399 20.2513 10.1862 20.5565 10.01L20.7065 9.92C21.165 9.65445 21.4994 9.21783 21.6362 8.706C21.7731 8.19416 21.7013 7.64893 21.4365 7.19L21.2165 6.81C20.951 6.35154 20.5144 6.01717 20.0025 5.88031C19.4907 5.74344 18.9455 5.81526 18.4865 6.08L18.3365 6.16C18.0325 6.33554 17.6876 6.42795 17.3365 6.42795C16.9855 6.42795 16.6406 6.33554 16.3365 6.16L15.9065 5.91C15.6028 5.73464 15.3505 5.48248 15.175 5.17884C14.9995 4.87519 14.9069 4.53073 14.9065 4.18V4C14.9065 3.46957 14.6958 2.96086 14.3207 2.58579C13.9457 2.21071 13.437 2 12.9065 2Z"
      stroke="#B0C9F5"
      strokeWidth={0.94}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.6865 15C14.3434 15 15.6865 13.6569 15.6865 12C15.6865 10.3431 14.3434 9 12.6865 9C11.0297 9 9.68652 10.3431 9.68652 12C9.68652 13.6569 11.0297 15 12.6865 15Z"
      stroke="#B0C9F5"
      strokeWidth={0.94}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const BackIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M15 6L9 12L15 18"
      stroke="#040C1A"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15 6L9 12L15 18"
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15 6L9 12L15 18"
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const GoogleIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 48 48">
    <Path
      fill="#ffc107"
      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"
    />
    <Path
      fill="#ff3d00"
      d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"
    />
    <Path
      fill="#4caf50"
      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"
    />
    <Path
      fill="#1976d2"
      d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"
    />
  </Svg>
);

// search icon
export const SearchIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 19 18" fill="none">
    <Path
      d="M8.38428 14.25C11.698 14.25 14.3843 11.5637 14.3843 8.25C14.3843 4.93629 11.698 2.25 8.38428 2.25C5.07057 2.25 2.38428 4.93629 2.38428 8.25C2.38428 11.5637 5.07057 14.25 8.38428 14.25Z"
      stroke="#040C1A"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.38428 14.25C11.698 14.25 14.3843 11.5637 14.3843 8.25C14.3843 4.93629 11.698 2.25 8.38428 2.25C5.07057 2.25 2.38428 4.93629 2.38428 8.25C2.38428 11.5637 5.07057 14.25 8.38428 14.25Z"
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.38428 14.25C11.698 14.25 14.3843 11.5637 14.3843 8.25C14.3843 4.93629 11.698 2.25 8.38428 2.25C5.07057 2.25 2.38428 4.93629 2.38428 8.25C2.38428 11.5637 5.07057 14.25 8.38428 14.25Z"
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.1343 15.002L12.6577 12.5254"
      stroke="#040C1A"
      strokeWidth={1.15189}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.1343 15.002L12.6577 12.5254"
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={1.15189}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.1343 15.002L12.6577 12.5254"
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={1.15189}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const BurgerIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 19 18" fill="none">
    <G opacity={0.6}>
      <Path
        d="M3.13428 9H15.1343"
        stroke="#040C1A"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.13428 9H15.1343"
        stroke="black"
        strokeOpacity={0.2}
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.13428 9H15.1343"
        stroke="black"
        strokeOpacity={0.2}
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Path
      d="M3.13428 4.5H15.1343"
      stroke="#040C1A"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3.13428 4.5H15.1343"
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3.13428 4.5H15.1343"
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <G opacity={0.2}>
      <Path
        d="M3.13428 13.5H15.1343"
        stroke="#040C1A"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.13428 13.5H15.1343"
        stroke="black"
        strokeOpacity={0.2}
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.13428 13.5H15.1343"
        stroke="black"
        strokeOpacity={0.2}
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);

export const PlusIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path
      fill={color}
      d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2"
    />
  </Svg>
);

export const MinusIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 9 2" fill="none">
    <Path d="M8.38 0.5V1.68H0.6V0.5H8.38Z" fill="black" />
  </Svg>
);

export const ShareIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 32 32">
    <Path
      fill="currentColor"
      d="M23 20a5 5 0 0 0-3.89 1.89l-7.31-4.57a4.46 4.46 0 0 0 0-2.64l7.31-4.57A5 5 0 1 0 18 7a4.8 4.8 0 0 0 .2 1.32l-7.31 4.57a5 5 0 1 0 0 6.22l7.31 4.57A4.8 4.8 0 0 0 18 25a5 5 0 1 0 5-5m0-16a3 3 0 1 1-3 3a3 3 0 0 1 3-3M7 19a3 3 0 1 1 3-3a3 3 0 0 1-3 3m16 9a3 3 0 1 1 3-3a3 3 0 0 1-3 3"
    />
  </Svg>
);

export const UpRightArrowIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 17 14" fill="none">
    <Path
      d="M16.7429 2.08371C16.7892 1.81146 16.606 1.55329 16.3337 1.50706L11.8972 0.753691C11.625 0.70746 11.3668 0.890681 11.3206 1.16293C11.2743 1.43517 11.4576 1.69335 11.7298 1.73958L15.6733 2.40924L15.0037 6.35278C14.9575 6.62503 15.1407 6.8832 15.4129 6.92943C15.6852 6.97566 15.9433 6.79244 15.9896 6.5202L16.7429 2.08371ZM1.03937 13.4078L16.5394 2.40775L15.9606 1.59225L0.460626 12.5922L1.03937 13.4078Z"
      fill="black"
    />
  </Svg>
);

export const ShareLinkToIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 40 54" fill="none">
    <Circle
      cx={6.64703}
      cy={30.4112}
      r={4.06588}
      stroke={color}
      strokeWidth={0.602353}
    />
    <Circle cx={19.8235} cy={34.1758} r={3.76471} fill={color} />
    <Circle
      cx={33.0001}
      cy={30.4112}
      r={4.06588}
      stroke={color}
      strokeWidth={0.602353}
    />
    <Path
      d="M13.3235 43.5297V47.6861C13.3235 48.5513 13.7471 49.3615 14.4605 49.8509C16.192 51.0386 18.4893 52.592 18.9732 52.834C19.5758 53.1353 20.1031 52.9595 20.2915 52.834L25.0786 49.842C25.8495 49.3602 26.3178 48.5153 26.3178 47.6062V43.2295C26.3178 41.2709 24.4346 40.6557 23.493 40.593C21.6725 40.5302 17.6173 40.4423 15.96 40.593C14.4801 40.7275 13.691 42.0735 13.4049 42.9411C13.3425 43.1306 13.3235 43.3302 13.3235 43.5297Z"
      stroke={color}
      strokeWidth={0.602353}
    />
    <Path
      d="M12.5709 37.391C12.5709 37.1399 12.3449 36.6001 11.441 36.4494C10.5696 36.3042 6.36118 36.3806 4.14732 36.4425C3.9876 36.447 3.82937 36.4639 3.67571 36.5078C2.74685 36.7727 1.22154 37.5641 1.08319 39.0859C0.967667 40.3566 0.992393 41.1919 1.03851 41.6255C1.05885 41.8168 1.12462 41.9994 1.2422 42.1516C1.50003 42.4855 2.04063 43.0271 2.96642 43.6057C4.17169 44.359 7.10954 45.9283 8.4278 46.6189"
      stroke={color}
      strokeWidth={0.602353}
    />
    <Path
      d="M27.2599 37.391C27.2599 37.1399 27.4859 36.6001 28.3898 36.4494C29.2613 36.3042 33.4696 36.3806 35.6835 36.4425C35.8432 36.447 36.0014 36.4639 36.1551 36.5078C37.084 36.7727 38.6093 37.5641 38.7476 39.0859C38.8631 40.3566 38.8384 41.1919 38.7923 41.6255C38.772 41.8168 38.7062 41.9994 38.5886 42.1516C38.3308 42.4855 37.7902 43.0271 36.8644 43.6057C35.6591 44.359 32.7213 45.9283 31.403 46.6189"
      stroke={color}
      strokeWidth={0.602353}
    />
    <Circle
      cx={20.2847}
      cy={13.2847}
      r={13.2847}
      fill="#7EBED5"
      fillOpacity={0.11}
    />
    <G clipPath="url(#clip0_75_3524)">
      <Path
        d="M19.177 13.8372C19.4147 14.155 19.718 14.4179 20.0663 14.6082C20.4145 14.7985 20.7997 14.9116 21.1955 14.94C21.5914 14.9683 21.9887 14.9112 22.3605 14.7725C22.7324 14.6338 23.07 14.4168 23.3506 14.1361L25.0112 12.4755C25.5153 11.9535 25.7943 11.2544 25.788 10.5287C25.7817 9.80308 25.4906 9.10892 24.9775 8.59578C24.4643 8.08264 23.7702 7.79157 23.0445 7.78526C22.3188 7.77896 21.6197 8.05792 21.0977 8.56207L20.1457 9.5086"
        stroke={color}
        strokeWidth={0.602353}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.3923 12.73C21.1546 12.4122 20.8513 12.1492 20.5031 11.959C20.1548 11.7687 19.7697 11.6555 19.3738 11.6272C18.978 11.5988 18.5807 11.656 18.2088 11.7947C17.837 11.9334 17.4993 12.1504 17.2187 12.4311L15.5582 14.0917C15.054 14.6137 14.775 15.3128 14.7814 16.0384C14.7877 16.7641 15.0787 17.4583 15.5919 17.9714C16.105 18.4845 16.7992 18.7756 17.5248 18.7819C18.2505 18.7882 18.9496 18.5093 19.4716 18.0051L20.4181 17.0586"
        stroke={color}
        strokeWidth={0.602353}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_75_3524">
        <Rect
          width={13.2847}
          height={13.2847}
          fill={color}
          transform="translate(13.6411 6.6416)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);

export const CreateAnEventIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 44 43" fill="none">
    <Rect
      x={0.318839}
      y={0.318839}
      width={39.5289}
      height={39.5289}
      rx={9.77326}
      stroke="#040C1A"
      strokeWidth={0.637677}
    />
    <Rect
      x={0.318839}
      y={0.318839}
      width={39.5289}
      height={39.5289}
      rx={9.77326}
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.637677}
    />
    <Rect
      x={0.318839}
      y={0.318839}
      width={39.5289}
      height={39.5289}
      rx={9.77326}
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.637677}
    />
    <Path
      d="M0.0524902 12.9688H40.0172"
      stroke="#040C1A"
      strokeWidth={0.637677}
    />
    <Path
      d="M0.0524902 12.9688H40.0172"
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.637677}
    />
    <Path
      d="M0.0524902 12.9688H40.0172"
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.637677}
    />
    <Circle cx={12.819} cy={6.25704} r={2.11934} fill="#040C1A" />
    <Circle
      cx={12.819}
      cy={6.25704}
      r={2.11934}
      fill="black"
      fillOpacity={0.2}
    />
    <Circle
      cx={12.819}
      cy={6.25704}
      r={2.11934}
      fill="black"
      fillOpacity={0.2}
    />
    <Circle
      cx={9.0329}
      cy={26.1896}
      r={1.81658}
      stroke="#040C1A"
      strokeWidth={0.302763}
    />
    <Circle
      cx={9.0329}
      cy={26.1896}
      r={1.81658}
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.302763}
    />
    <Circle
      cx={9.0329}
      cy={26.1896}
      r={1.81658}
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.302763}
    />
    <Circle
      cx={16.4013}
      cy={19.5285}
      r={1.81658}
      stroke="#040C1A"
      strokeWidth={0.302763}
    />
    <Circle
      cx={16.4013}
      cy={19.5285}
      r={1.81658}
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.302763}
    />
    <Circle
      cx={16.4013}
      cy={19.5285}
      r={1.81658}
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.302763}
    />
    <Circle
      cx={9.0329}
      cy={33.3547}
      r={1.81658}
      stroke="#040C1A"
      strokeWidth={0.302763}
    />
    <Circle
      cx={9.0329}
      cy={33.3547}
      r={1.81658}
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.302763}
    />
    <Circle
      cx={9.0329}
      cy={33.3547}
      r={1.81658}
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.302763}
    />
    <Circle cx={16.4013} cy={26.1896} r={1.96796} fill="#040C1A" />
    <Circle
      cx={16.4013}
      cy={26.1896}
      r={1.96796}
      fill="black"
      fillOpacity={0.2}
    />
    <Circle
      cx={16.4013}
      cy={26.1896}
      r={1.96796}
      fill="black"
      fillOpacity={0.2}
    />
    <Circle
      cx={23.7673}
      cy={19.5285}
      r={1.81658}
      stroke="#040C1A"
      strokeWidth={0.302763}
    />
    <Circle
      cx={23.7673}
      cy={19.5285}
      r={1.81658}
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.302763}
    />
    <Circle
      cx={23.7673}
      cy={19.5285}
      r={1.81658}
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.302763}
    />
    <Circle
      cx={16.4013}
      cy={33.3547}
      r={1.81658}
      stroke="#040C1A"
      strokeWidth={0.302763}
    />
    <Circle
      cx={16.4013}
      cy={33.3547}
      r={1.81658}
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.302763}
    />
    <Circle
      cx={16.4013}
      cy={33.3547}
      r={1.81658}
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.302763}
    />
    <Circle
      cx={23.7673}
      cy={26.1896}
      r={1.81658}
      stroke="#040C1A"
      strokeWidth={0.302763}
    />
    <Circle
      cx={23.7673}
      cy={26.1896}
      r={1.81658}
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.302763}
    />
    <Circle
      cx={23.7673}
      cy={26.1896}
      r={1.81658}
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.302763}
    />
    <Circle
      cx={31.0351}
      cy={19.5285}
      r={1.81658}
      stroke="#040C1A"
      strokeWidth={0.302763}
    />
    <Circle
      cx={31.0351}
      cy={19.5285}
      r={1.81658}
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.302763}
    />
    <Circle
      cx={31.0351}
      cy={19.5285}
      r={1.81658}
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.302763}
    />
    <Circle
      cx={23.6669}
      cy={33.3547}
      r={1.81658}
      stroke="#040C1A"
      strokeWidth={0.302763}
    />
    <Circle
      cx={23.6669}
      cy={33.3547}
      r={1.81658}
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.302763}
    />
    <Circle
      cx={23.6669}
      cy={33.3547}
      r={1.81658}
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.302763}
    />
    <Circle cx={24.4209} cy={6.25704} r={2.11934} fill="#040C1A" />
    <Circle
      cx={24.4209}
      cy={6.25704}
      r={2.11934}
      fill="black"
      fillOpacity={0.2}
    />
    <Circle
      cx={24.4209}
      cy={6.25704}
      r={2.11934}
      fill="black"
      fillOpacity={0.2}
    />
    <Rect
      x={30.396}
      y={28.4834}
      width={13.6038}
      height={13.6038}
      rx={6.80189}
      fill="#040C1A"
    />
    <Rect
      x={30.396}
      y={28.4834}
      width={13.6038}
      height={13.6038}
      rx={6.80189}
      fill="black"
      fillOpacity={0.2}
    />
    <Rect
      x={30.396}
      y={28.4834}
      width={13.6038}
      height={13.6038}
      rx={6.80189}
      fill="black"
      fillOpacity={0.2}
    />
    <Path
      d="M34.4309 31.9658V34.1791H36.6442"
      stroke="#21C0F9"
      strokeWidth={0.637677}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M34.4309 34.1795L35.2803 33.2914C35.5979 32.9862 35.9838 32.7612 36.406 32.6351C36.8281 32.5091 37.2742 32.4857 37.7072 32.5669C38.1402 32.6481 38.5476 32.8315 38.8954 33.1019C39.2432 33.3723 39.5214 33.7218 39.7069 34.1214"
      stroke="#21C0F9"
      strokeWidth={0.637677}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M39.9643 38.6059V36.3926H37.751"
      stroke="#21C0F9"
      strokeWidth={0.637677}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M39.9649 36.3926L39.1156 37.2807C38.798 37.5859 38.412 37.8109 37.9899 37.937C37.5677 38.063 37.1216 38.0864 36.6886 38.0052C36.2556 37.924 35.8483 37.7406 35.5005 37.4702C35.1526 37.1998 34.8744 36.8503 34.689 36.4507"
      stroke="#21C0F9"
      strokeWidth={0.637677}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const DownArrowIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 11 5" fill="none">
    <Path d="M1 1L5.60976 4L10 1" stroke="#040C1A" strokeLinecap="round" />
    <Path
      d="M1 1L5.60976 4L10 1"
      stroke="black"
      strokeOpacity={0.2}
      strokeLinecap="round"
    />
    <Path
      d="M1 1L5.60976 4L10 1"
      stroke="black"
      strokeOpacity={0.2}
      strokeLinecap="round"
    />
  </Svg>
);

export const LocationIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 13 13" fill="none">
    <Path
      d="M10.4861 5.50304C10.4861 7.99047 7.72663 10.581 6.80001 11.3811C6.71369 11.446 6.60861 11.4811 6.5006 11.4811C6.3926 11.4811 6.28752 11.446 6.20119 11.3811C5.27457 10.581 2.51514 7.99047 2.51514 5.50304C2.51514 4.44603 2.93503 3.43231 3.68245 2.68489C4.42987 1.93747 5.44359 1.51758 6.5006 1.51758C7.55761 1.51758 8.57133 1.93747 9.31875 2.68489C10.0662 3.43231 10.4861 4.44603 10.4861 5.50304Z"
      stroke="#778297"
      strokeWidth={0.996366}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6.50041 6.99789C7.32583 6.99789 7.99496 6.32876 7.99496 5.50334C7.99496 4.67792 7.32583 4.00879 6.50041 4.00879C5.67499 4.00879 5.00586 4.67792 5.00586 5.50334C5.00586 6.32876 5.67499 6.99789 6.50041 6.99789Z"
      fill="#778297"
    />
  </Svg>
);

export const UserIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 16 17" fill="none">
    <Path
      d="M1.3335 13.54C1.33341 12.7464 1.52578 11.9647 1.89412 11.2619C2.26247 10.559 2.79578 9.95597 3.44834 9.50447C4.1009 9.05297 4.85323 8.76647 5.64081 8.66955C6.4284 8.57263 7.22774 8.66817 7.9703 8.94799"
      stroke="#040C1A"
      strokeWidth={0.735991}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M1.3335 13.54C1.33341 12.7464 1.52578 11.9647 1.89412 11.2619C2.26247 10.559 2.79578 9.95597 3.44834 9.50447C4.1009 9.05297 4.85323 8.76647 5.64081 8.66955C6.4284 8.57263 7.22774 8.66817 7.9703 8.94799"
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.735991}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M1.3335 13.54C1.33341 12.7464 1.52578 11.9647 1.89412 11.2619C2.26247 10.559 2.79578 9.95597 3.44834 9.50447C4.1009 9.05297 4.85323 8.76647 5.64081 8.66955C6.4284 8.57263 7.22774 8.66817 7.9703 8.94799"
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.735991}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13.2184 10.8568C13.4627 10.6125 13.6 10.2811 13.6 9.93561C13.6 9.59009 13.4627 9.25871 13.2184 9.01439C12.9741 8.77007 12.6427 8.63281 12.2972 8.63281C11.9517 8.63281 11.6203 8.77007 11.376 9.01439L8.91653 11.4751C8.77071 11.6208 8.66397 11.8009 8.60619 11.9988L8.09283 13.7591C8.07744 13.8119 8.07652 13.8678 8.09016 13.9211C8.1038 13.9743 8.13151 14.0229 8.17039 14.0618C8.20926 14.1007 8.25787 14.1284 8.31112 14.142C8.36438 14.1557 8.42032 14.1547 8.47309 14.1393L10.2333 13.626C10.4312 13.5682 10.6114 13.4615 10.7571 13.3156L13.2184 10.8568Z"
      stroke="#040C1A"
      strokeWidth={0.735991}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13.2184 10.8568C13.4627 10.6125 13.6 10.2811 13.6 9.93561C13.6 9.59009 13.4627 9.25871 13.2184 9.01439C12.9741 8.77007 12.6427 8.63281 12.2972 8.63281C11.9517 8.63281 11.6203 8.77007 11.376 9.01439L8.91653 11.4751C8.77071 11.6208 8.66397 11.8009 8.60619 11.9988L8.09283 13.7591C8.07744 13.8119 8.07652 13.8678 8.09016 13.9211C8.1038 13.9743 8.13151 14.0229 8.17039 14.0618C8.20926 14.1007 8.25787 14.1284 8.31112 14.142C8.36438 14.1557 8.42032 14.1547 8.47309 14.1393L10.2333 13.626C10.4312 13.5682 10.6114 13.4615 10.7571 13.3156L13.2184 10.8568Z"
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.735991}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13.2184 10.8568C13.4627 10.6125 13.6 10.2811 13.6 9.93561C13.6 9.59009 13.4627 9.25871 13.2184 9.01439C12.9741 8.77007 12.6427 8.63281 12.2972 8.63281C11.9517 8.63281 11.6203 8.77007 11.376 9.01439L8.91653 11.4751C8.77071 11.6208 8.66397 11.8009 8.60619 11.9988L8.09283 13.7591C8.07744 13.8119 8.07652 13.8678 8.09016 13.9211C8.1038 13.9743 8.13151 14.0229 8.17039 14.0618C8.20926 14.1007 8.25787 14.1284 8.31112 14.142C8.36438 14.1557 8.42032 14.1547 8.47309 14.1393L10.2333 13.626C10.4312 13.5682 10.6114 13.4615 10.7571 13.3156L13.2184 10.8568Z"
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.735991}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6.23997 8.63326C7.93362 8.63326 9.3066 7.26028 9.3066 5.56663C9.3066 3.87298 7.93362 2.5 6.23997 2.5C4.54632 2.5 3.17334 3.87298 3.17334 5.56663C3.17334 7.26028 4.54632 8.63326 6.23997 8.63326Z"
      stroke="#040C1A"
      strokeWidth={0.735991}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6.23997 8.63326C7.93362 8.63326 9.3066 7.26028 9.3066 5.56663C9.3066 3.87298 7.93362 2.5 6.23997 2.5C4.54632 2.5 3.17334 3.87298 3.17334 5.56663C3.17334 7.26028 4.54632 8.63326 6.23997 8.63326Z"
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.735991}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6.23997 8.63326C7.93362 8.63326 9.3066 7.26028 9.3066 5.56663C9.3066 3.87298 7.93362 2.5 6.23997 2.5C4.54632 2.5 3.17334 3.87298 3.17334 5.56663C3.17334 7.26028 4.54632 8.63326 6.23997 8.63326Z"
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.735991}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const FAQIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 14 15" fill="none">
    <G clipPath="url(#clip0_67_317)">
      <Path
        d="M6.99976 13.3335C10.2214 13.3335 12.833 10.7219 12.833 7.50025C12.833 4.27863 10.2214 1.66699 6.99976 1.66699C3.77814 1.66699 1.1665 4.27863 1.1665 7.50025C1.1665 10.7219 3.77814 13.3335 6.99976 13.3335Z"
        stroke="#040C1A"
        strokeWidth={0.679941}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.99976 13.3335C10.2214 13.3335 12.833 10.7219 12.833 7.50025C12.833 4.27863 10.2214 1.66699 6.99976 1.66699C3.77814 1.66699 1.1665 4.27863 1.1665 7.50025C1.1665 10.7219 3.77814 13.3335 6.99976 13.3335Z"
        stroke="black"
        strokeOpacity={0.2}
        strokeWidth={0.679941}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.99976 13.3335C10.2214 13.3335 12.833 10.7219 12.833 7.50025C12.833 4.27863 10.2214 1.66699 6.99976 1.66699C3.77814 1.66699 1.1665 4.27863 1.1665 7.50025C1.1665 10.7219 3.77814 13.3335 6.99976 13.3335Z"
        stroke="black"
        strokeOpacity={0.2}
        strokeWidth={0.679941}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.30225 5.75032C5.43939 5.36046 5.71008 5.03172 6.06638 4.82232C6.42267 4.61292 6.84158 4.53638 7.24891 4.60625C7.65623 4.67611 8.02569 4.88788 8.29183 5.20405C8.55798 5.52021 8.70365 5.92037 8.70303 6.33364C8.70303 7.50029 6.95306 8.08362 6.95306 8.08362"
        stroke="#040C1A"
        strokeWidth={0.679941}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.30225 5.75032C5.43939 5.36046 5.71008 5.03172 6.06638 4.82232C6.42267 4.61292 6.84158 4.53638 7.24891 4.60625C7.65623 4.67611 8.02569 4.88788 8.29183 5.20405C8.55798 5.52021 8.70365 5.92037 8.70303 6.33364C8.70303 7.50029 6.95306 8.08362 6.95306 8.08362"
        stroke="black"
        strokeOpacity={0.2}
        strokeWidth={0.679941}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.30225 5.75032C5.43939 5.36046 5.71008 5.03172 6.06638 4.82232C6.42267 4.61292 6.84158 4.53638 7.24891 4.60625C7.65623 4.67611 8.02569 4.88788 8.29183 5.20405C8.55798 5.52021 8.70365 5.92037 8.70303 6.33364C8.70303 7.50029 6.95306 8.08362 6.95306 8.08362"
        stroke="black"
        strokeOpacity={0.2}
        strokeWidth={0.679941}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 10.417H7.00739"
        stroke="#040C1A"
        strokeWidth={0.679941}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 10.417H7.00739"
        stroke="black"
        strokeOpacity={0.2}
        strokeWidth={0.679941}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 10.417H7.00739"
        stroke="black"
        strokeOpacity={0.2}
        strokeWidth={0.679941}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_67_317">
        <Rect
          width={13.9998}
          height={13.9998}
          fill="white"
          transform="translate(0 0.5)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);

export const LogOutIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 12 13" fill="none">
    <Path
      d="M4.5 11H2.5C2.23478 11 1.98043 10.8946 1.79289 10.7071C1.60536 10.5196 1.5 10.2652 1.5 10V3C1.5 2.73478 1.60536 2.48043 1.79289 2.29289C1.98043 2.10536 2.23478 2 2.5 2H4.5"
      stroke="#040C1A"
      strokeWidth={0.613333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4.5 11H2.5C2.23478 11 1.98043 10.8946 1.79289 10.7071C1.60536 10.5196 1.5 10.2652 1.5 10V3C1.5 2.73478 1.60536 2.48043 1.79289 2.29289C1.98043 2.10536 2.23478 2 2.5 2H4.5"
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.613333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4.5 11H2.5C2.23478 11 1.98043 10.8946 1.79289 10.7071C1.60536 10.5196 1.5 10.2652 1.5 10V3C1.5 2.73478 1.60536 2.48043 1.79289 2.29289C1.98043 2.10536 2.23478 2 2.5 2H4.5"
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.613333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8 9L10.5 6.5L8 4"
      stroke="#040C1A"
      strokeWidth={0.613333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8 9L10.5 6.5L8 4"
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.613333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8 9L10.5 6.5L8 4"
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.613333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.5 6.5H4.5"
      stroke="#040C1A"
      strokeWidth={0.613333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.5 6.5H4.5"
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.613333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.5 6.5H4.5"
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.613333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const AlertActionIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 23 22" fill="none">
    <Path
      d="M11.5 14.6663H11.5083"
      stroke="#040C1A"
      strokeWidth={1.55294}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.5 14.6663H11.5083"
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={1.55294}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.5 14.6663H11.5083"
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={1.55294}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.5 7.33374V11.0004"
      stroke="#040C1A"
      strokeWidth={1.55294}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.5 7.33374V11.0004"
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={1.55294}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.5 7.33374V11.0004"
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={1.55294}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.5357 1.83374C15.0219 1.83384 15.4881 2.02707 15.8318 2.37091L20.1292 6.66824C20.473 7.01198 20.6662 7.47822 20.6663 7.96441V14.0364C20.6662 14.5226 20.473 14.9888 20.1292 15.3326L15.8318 19.6299C15.4881 19.9737 15.0219 20.167 14.5357 20.1671H8.46367C7.97748 20.167 7.51124 19.9737 7.16751 19.6299L2.87017 15.3326C2.52633 14.9888 2.33311 14.5226 2.33301 14.0364V7.96441C2.33311 7.47822 2.52633 7.01198 2.87017 6.66824L7.16751 2.37091C7.51124 2.02707 7.97748 1.83384 8.46367 1.83374H14.5357Z"
      stroke="#040C1A"
      strokeWidth={1.55294}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.5357 1.83374C15.0219 1.83384 15.4881 2.02707 15.8318 2.37091L20.1292 6.66824C20.473 7.01198 20.6662 7.47822 20.6663 7.96441V14.0364C20.6662 14.5226 20.473 14.9888 20.1292 15.3326L15.8318 19.6299C15.4881 19.9737 15.0219 20.167 14.5357 20.1671H8.46367C7.97748 20.167 7.51124 19.9737 7.16751 19.6299L2.87017 15.3326C2.52633 14.9888 2.33311 14.5226 2.33301 14.0364V7.96441C2.33311 7.47822 2.52633 7.01198 2.87017 6.66824L7.16751 2.37091C7.51124 2.02707 7.97748 1.83384 8.46367 1.83374H14.5357Z"
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={1.55294}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.5357 1.83374C15.0219 1.83384 15.4881 2.02707 15.8318 2.37091L20.1292 6.66824C20.473 7.01198 20.6662 7.47822 20.6663 7.96441V14.0364C20.6662 14.5226 20.473 14.9888 20.1292 15.3326L15.8318 19.6299C15.4881 19.9737 15.0219 20.167 14.5357 20.1671H8.46367C7.97748 20.167 7.51124 19.9737 7.16751 19.6299L2.87017 15.3326C2.52633 14.9888 2.33311 14.5226 2.33301 14.0364V7.96441C2.33311 7.47822 2.52633 7.01198 2.87017 6.66824L7.16751 2.37091C7.51124 2.02707 7.97748 1.83384 8.46367 1.83374H14.5357Z"
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={1.55294}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const QuickMeetingIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 223 164" fill="none">
    <Mask id="path-1-inside-1_89_137" fill="white">
      <Path d="M69.5058 41.2558C78.5955 25.3804 92.7327 13.0003 109.669 6.08485C126.605 -0.83059 145.367 -1.88422 162.971 3.09155C180.575 8.06732 196.009 18.7867 206.819 33.5447C217.629 48.3026 223.194 66.2515 222.628 84.5362C222.062 102.821 215.398 120.391 203.696 134.453C191.995 148.514 175.927 158.259 158.049 162.137C140.171 166.014 121.51 163.803 105.034 155.853C88.5582 147.904 75.2135 134.673 67.1228 118.266L69.5503 117.069C77.3739 132.935 90.2782 145.729 106.21 153.416C122.143 161.103 140.188 163.241 157.475 159.491C174.763 155.742 190.3 146.319 201.616 132.721C212.931 119.124 219.375 102.134 219.922 84.4525C220.47 66.7713 215.089 49.4149 204.635 35.1441C194.182 20.8732 179.257 10.5077 162.235 5.69612C145.212 0.884581 127.069 1.90344 110.692 8.59062C94.3149 15.2778 80.6443 27.2492 71.8547 42.6007L69.5058 41.2558Z" />
    </Mask>
    <Path
      d="M69.5058 41.2558C78.5955 25.3804 92.7327 13.0003 109.669 6.08485C126.605 -0.83059 145.367 -1.88422 162.971 3.09155C180.575 8.06732 196.009 18.7867 206.819 33.5447C217.629 48.3026 223.194 66.2515 222.628 84.5362C222.062 102.821 215.398 120.391 203.696 134.453C191.995 148.514 175.927 158.259 158.049 162.137C140.171 166.014 121.51 163.803 105.034 155.853C88.5582 147.904 75.2135 134.673 67.1228 118.266L69.5503 117.069C77.3739 132.935 90.2782 145.729 106.21 153.416C122.143 161.103 140.188 163.241 157.475 159.491C174.763 155.742 190.3 146.319 201.616 132.721C212.931 119.124 219.375 102.134 219.922 84.4525C220.47 66.7713 215.089 49.4149 204.635 35.1441C194.182 20.8732 179.257 10.5077 162.235 5.69612C145.212 0.884581 127.069 1.90344 110.692 8.59062C94.3149 15.2778 80.6443 27.2492 71.8547 42.6007L69.5058 41.2558Z"
      stroke="white"
      strokeWidth={6}
      mask="url(#path-1-inside-1_89_137)"
    />
    <Circle cx={141.333} cy={82.6666} r={13.3333} fill="white" />
    <Path d="M150.666 92L189.999 131.333" stroke="white" strokeWidth={3} />
    <Path d="M81.333 26.6667L97.333 42.6667" stroke="white" strokeWidth={3} />
    <Path d="M200.334 26.6667L184.334 42.6667" stroke="white" strokeWidth={3} />
    <Path d="M141.333 1.33325V22.6666" stroke="white" strokeWidth={3} />
    <Path d="M141.333 142.667V164" stroke="white" strokeWidth={3} />
    <Path d="M221.333 78.6667L200 78.6667" stroke="white" strokeWidth={3} />
    <Path d="M89.3333 60H0" stroke="white" strokeWidth={3} />
    <Path d="M88.6667 78.6668L22 78.6667" stroke="white" strokeWidth={3} />
    <Path d="M88.667 97.3332L44.667 97.3333" stroke="white" strokeWidth={3} />
  </Svg>
);
export const SmartReminderIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 210 194" fill="none">
    <Path
      d="M50.6858 167.143C37.3836 157.889 39.3596 143.045 42.0104 136.779L86.1098 167.143C79.8443 170.999 63.9879 176.397 50.6858 167.143Z"
      fill="white"
    />
    <Path
      d="M122.98 191L6.58594 109.307C8.51379 102.801 15.4059 90.2216 27.5513 91.9566C39.6968 93.6917 48.0348 81.1124 50.6856 74.6059C76.1332 36.4344 111.895 37.9766 126.595 43.5192C134.547 37.7356 141.777 42.0733 144.668 46.4109C146.982 49.8811 145.632 56.0502 144.668 58.701C168.526 81.1123 154.79 113.645 147.56 127.381C140.331 141.117 127.318 149.069 134.547 167.866C140.331 182.903 129.246 189.554 122.98 191Z"
      stroke="white"
      strokeWidth={4.33767}
    />
    <Circle
      cx={31.2845}
      cy={31.2845}
      r={29.6379}
      stroke="white"
      strokeWidth={3.2931}
    />
    <Path d="M31.5469 12.6594V34.4225" stroke="white" strokeWidth={3.2931} />
    <Rect
      x={28.8262}
      y={39.1831}
      width={5.44078}
      height={5.44078}
      fill="white"
    />
    <Path
      d="M170.908 63.2298L190.609 49.5393"
      stroke="white"
      strokeWidth={3.75949}
    />
    <Path
      d="M198.719 97.7147L176.111 92.0002"
      stroke="white"
      strokeWidth={3.75948}
    />
    <Path
      d="M175.377 77.2806L199.572 73.8294"
      stroke="white"
      strokeWidth={3.75949}
    />
  </Svg>
);
export const SeamlessCalendarIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 207 198" fill="none">
    <Rect
      x={1.5}
      y={1.5}
      width={185.966}
      height={185.966}
      rx={45.979}
      stroke="white"
      strokeWidth={3}
    />
    <Path d="M0.237305 61.0105H188.254" stroke="white" strokeWidth={3} />
    <Circle cx={60.2987} cy={29.4369} r={9.97059} fill="white" />
    <Circle
      cx={42.4938}
      cy={123.208}
      r={8.54622}
      stroke="white"
      strokeWidth={1.42437}
    />
    <Circle
      cx={77.1529}
      cy={91.8719}
      r={8.54622}
      stroke="white"
      strokeWidth={1.42437}
    />
    <Circle
      cx={42.4938}
      cy={156.918}
      r={8.54622}
      stroke="white"
      strokeWidth={1.42437}
    />
    <Circle cx={77.1529} cy={123.208} r={9.2584} fill="white" />
    <Circle
      cx={111.813}
      cy={91.8719}
      r={8.54622}
      stroke="white"
      strokeWidth={1.42437}
    />
    <Circle
      cx={77.1529}
      cy={156.918}
      r={8.54622}
      stroke="white"
      strokeWidth={1.42437}
    />
    <Circle
      cx={111.813}
      cy={123.208}
      r={8.54622}
      stroke="white"
      strokeWidth={1.42437}
    />
    <Circle
      cx={145.998}
      cy={91.8719}
      r={8.54622}
      stroke="white"
      strokeWidth={1.42437}
    />
    <Circle
      cx={111.338}
      cy={156.918}
      r={8.54622}
      stroke="white"
      strokeWidth={1.42437}
    />
    <Circle cx={114.899} cy={29.4369} r={9.97059} fill="white" />
    <Rect x={143} y={134} width={64} height={64} rx={32} fill="white" />
    <Path
      d="M161.984 150.381V160.794H172.397"
      stroke="#142F5A"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M161.984 160.793L165.98 156.615C167.475 155.179 169.29 154.121 171.276 153.528C173.262 152.935 175.361 152.825 177.398 153.207C179.435 153.589 181.352 154.452 182.988 155.724C184.624 156.996 185.933 158.64 186.806 160.52"
      stroke="#142F5A"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M188.016 181.619V171.206H177.604"
      stroke="#142F5A"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M188.016 171.206L184.02 175.384C182.525 176.821 180.71 177.879 178.724 178.472C176.738 179.065 174.639 179.175 172.602 178.793C170.565 178.411 168.648 177.548 167.012 176.276C165.376 175.004 164.067 173.36 163.194 171.48"
      stroke="#142F5A"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const DownDrawerIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 10 5" fill="none">
    <Path
      d="M1 1L5 4L9 1"
      stroke="#040C1A"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M1 1L5 4L9 1"
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M1 1L5 4L9 1"
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export const LocationIcon2: React.FC<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 17 23" fill="none">
    <Path
      d="M14.1677 7.73621C14.1677 11.2731 10.2441 14.9565 8.92659 16.0942C8.80385 16.1864 8.65443 16.2364 8.50086 16.2364C8.34729 16.2364 8.19788 16.1864 8.07514 16.0942C6.75759 14.9565 2.83398 11.2731 2.83398 7.73621C2.83398 6.23327 3.43103 4.79187 4.49378 3.72913C5.55652 2.66638 6.99791 2.06934 8.50086 2.06934C10.0038 2.06934 11.4452 2.66638 12.508 3.72913C13.5707 4.79187 14.1677 6.23327 14.1677 7.73621Z"
      stroke="#040C1A"
      strokeWidth={0.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.1677 7.73621C14.1677 11.2731 10.2441 14.9565 8.92659 16.0942C8.80385 16.1864 8.65443 16.2364 8.50086 16.2364C8.34729 16.2364 8.19788 16.1864 8.07514 16.0942C6.75759 14.9565 2.83398 11.2731 2.83398 7.73621C2.83398 6.23327 3.43103 4.79187 4.49378 3.72913C5.55652 2.66638 6.99791 2.06934 8.50086 2.06934C10.0038 2.06934 11.4452 2.66638 12.508 3.72913C13.5707 4.79187 14.1677 6.23327 14.1677 7.73621Z"
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.1677 7.73621C14.1677 11.2731 10.2441 14.9565 8.92659 16.0942C8.80385 16.1864 8.65443 16.2364 8.50086 16.2364C8.34729 16.2364 8.19788 16.1864 8.07514 16.0942C6.75759 14.9565 2.83398 11.2731 2.83398 7.73621C2.83398 6.23327 3.43103 4.79187 4.49378 3.72913C5.55652 2.66638 6.99791 2.06934 8.50086 2.06934C10.0038 2.06934 11.4452 2.66638 12.508 3.72913C13.5707 4.79187 14.1677 6.23327 14.1677 7.73621Z"
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={0.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.50008 9.86149C9.67373 9.86149 10.6252 8.91006 10.6252 7.73641C10.6252 6.56276 9.67373 5.61133 8.50008 5.61133C7.32643 5.61133 6.375 6.56276 6.375 7.73641C6.375 8.91006 7.32643 9.86149 8.50008 9.86149Z"
      stroke="#040C1A"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.50008 9.86149C9.67373 9.86149 10.6252 8.91006 10.6252 7.73641C10.6252 6.56276 9.67373 5.61133 8.50008 5.61133C7.32643 5.61133 6.375 6.56276 6.375 7.73641C6.375 8.91006 7.32643 9.86149 8.50008 9.86149Z"
      stroke="black"
      strokeOpacity={0.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.50008 9.86149C9.67373 9.86149 10.6252 8.91006 10.6252 7.73641C10.6252 6.56276 9.67373 5.61133 8.50008 5.61133C7.32643 5.61133 6.375 6.56276 6.375 7.73641C6.375 8.91006 7.32643 9.86149 8.50008 9.86149Z"
      stroke="black"
      strokeOpacity={0.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Ellipse cx={8.5} cy={20.6533} rx={5.5} ry={1} fill="#D9D9D9" />
  </Svg>
);
export const LeftIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 16 16">
    <Path
      fill={color}
      fillRule="evenodd"
      d="m5.293 8l3.854 3.854l.707-.707L6.707 8l3.147-3.146l-.707-.708z"
      clipRule="evenodd"
    />
  </Svg>
);

export const RightIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 16 16">
    <Path
      fill={color}
      fillRule="evenodd"
      d="m10.207 8l-3.854 3.854l-.707-.707L8.793 8L5.646 4.854l.707-.708z"
      clipRule="evenodd"
    />
  </Svg>
);

export const OopsIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 21 17" fill="none">
    <Circle cx={3.5} cy={2.71875} r={2} fill="#151515" />
    <Circle cx={18.5} cy={2.71875} r={2} fill="#151515" />
    <Path
      d="M1.5 15.2814C9.85343 11.5151 13.6888 12.2327 20 15.2814"
      stroke="#21C0F9"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
);

export const CustomIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 48 10" fill="none">
    <Path
      d="M1.10771 9.04804C0.614701 9.09751 0.242607 9.08847 0 9.04804H1.10771C2.64685 8.89357 5.36451 8.16874 9 6.04804C15 2.54804 17.5 0.548036 22 0.048036C26.5 -0.451964 32 3.04804 36 6.04804C39.2 8.44804 45 9.04804 47.5 9.04804H1.10771Z"
      fill="#040C1A"
    />
  </Svg>
);

export const PointerIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <G clipPath="url(#clip0_99_3094)">
      <Path
        d="M6.66699 14.6663C5.2525 14.6663 3.89595 14.1044 2.89576 13.1042C1.89556 12.1041 1.33366 10.7475 1.33366 9.33301"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.66699 11.9997L9.33366 11.9997C9.68728 11.9997 10.0264 11.8592 10.2765 11.6092C10.5265 11.3591 10.667 11.02 10.667 10.6663C10.667 10.3127 10.5265 9.97358 10.2765 9.72353C10.0264 9.47348 9.68728 9.33301 9.33366 9.33301"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.33301 9.33366L9.99967 9.33366C10.3533 9.33366 10.6924 9.19318 10.9425 8.94313C11.1925 8.69309 11.333 8.35395 11.333 8.00033C11.333 7.6467 11.1925 7.30757 10.9425 7.05752C10.6924 6.80747 10.3533 6.66699 9.99967 6.66699L9.33301 6.66699"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.66699 6.66667L13.3337 6.66667C13.6873 6.66667 14.0264 6.52619 14.2765 6.27614C14.5265 6.02609 14.667 5.68696 14.667 5.33333C14.667 4.97971 14.5265 4.64057 14.2765 4.39052C14.0264 4.14048 13.6873 4 13.3337 4L6.66699 4"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.66667 11.9997C9.02029 11.9997 9.35943 12.1402 9.60947 12.3903C9.85952 12.6403 10 12.9795 10 13.3331C10 13.6867 9.85952 14.0258 9.60947 14.2759C9.35943 14.5259 9.02029 14.6664 8.66667 14.6664L6.66667 14.6664C5.25218 14.6664 3.89562 14.1045 2.89543 13.1043C1.89523 12.1041 1.33333 10.7476 1.33333 9.33308L1.33333 7.99974C1.33333 6.13308 1.90667 4.99974 2.89333 4.00641L5.29333 1.60641C5.54737 1.37703 5.87989 1.25413 6.22204 1.26316C6.56419 1.27218 6.88977 1.41244 7.13136 1.65489C7.37295 1.89734 7.51206 2.22341 7.51987 2.56559C7.52768 2.90777 7.40361 3.23985 7.17333 3.49308L6 4.66641"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_99_3094">
        <Rect
          width={size}
          height={size}
          fill="white"
          transform="translate(16) rotate(90)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);

export const EditIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 13 13" fill="none">
    <Path
      d="M11.087 3.90619C11.3513 3.6419 11.4999 3.28342 11.4999 2.90962C11.5 2.53581 11.3515 2.1773 11.0872 1.91294C10.8229 1.64859 10.4645 1.50005 10.0906 1.5C9.71684 1.49995 9.35832 1.6484 9.09397 1.91269L2.42097 8.58719C2.30488 8.70294 2.21902 8.84546 2.17097 9.00219L1.51047 11.1782C1.49754 11.2214 1.49657 11.2674 1.50764 11.3111C1.51872 11.3549 1.54143 11.3948 1.57337 11.4267C1.6053 11.4586 1.64528 11.4812 1.68905 11.4922C1.73282 11.5032 1.77875 11.5022 1.82197 11.4892L3.99847 10.8292C4.15505 10.7816 4.29755 10.6962 4.41347 10.5807L11.087 3.90619Z"
      stroke="black"
      strokeWidth={0.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8 3L10 5"
      stroke="black"
      strokeWidth={0.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const CopyIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 19 20" fill="none">
    <Path
      d="M15.8333 6.68848H7.91659C7.04213 6.68848 6.33325 7.39736 6.33325 8.27181V16.1885C6.33325 17.0629 7.04213 17.7718 7.91659 17.7718H15.8333C16.7077 17.7718 17.4166 17.0629 17.4166 16.1885V8.27181C17.4166 7.39736 16.7077 6.68848 15.8333 6.68848Z"
      stroke="#040C1A"
      strokeWidth={1.58333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.8333 6.68848H7.91659C7.04213 6.68848 6.33325 7.39736 6.33325 8.27181V16.1885C6.33325 17.0629 7.04213 17.7718 7.91659 17.7718H15.8333C16.7077 17.7718 17.4166 17.0629 17.4166 16.1885V8.27181C17.4166 7.39736 16.7077 6.68848 15.8333 6.68848Z"
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={1.58333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.8333 6.68848H7.91659C7.04213 6.68848 6.33325 7.39736 6.33325 8.27181V16.1885C6.33325 17.0629 7.04213 17.7718 7.91659 17.7718H15.8333C16.7077 17.7718 17.4166 17.0629 17.4166 16.1885V8.27181C17.4166 7.39736 16.7077 6.68848 15.8333 6.68848Z"
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={1.58333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3.16659 13.0218C2.29575 13.0218 1.58325 12.3093 1.58325 11.4385V3.52181C1.58325 2.65098 2.29575 1.93848 3.16659 1.93848H11.0833C11.9541 1.93848 12.6666 2.65098 12.6666 3.52181"
      stroke="#040C1A"
      strokeWidth={1.58333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3.16659 13.0218C2.29575 13.0218 1.58325 12.3093 1.58325 11.4385V3.52181C1.58325 2.65098 2.29575 1.93848 3.16659 1.93848H11.0833C11.9541 1.93848 12.6666 2.65098 12.6666 3.52181"
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={1.58333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3.16659 13.0218C2.29575 13.0218 1.58325 12.3093 1.58325 11.4385V3.52181C1.58325 2.65098 2.29575 1.93848 3.16659 1.93848H11.0833C11.9541 1.93848 12.6666 2.65098 12.6666 3.52181"
      stroke="black"
      strokeOpacity={0.2}
      strokeWidth={1.58333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const ExclamationIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <Path
      d="M9.99984 18.3327C14.6022 18.3327 18.3332 14.6017 18.3332 9.99935C18.3332 5.39698 14.6022 1.66602 9.99984 1.66602C5.39746 1.66602 1.6665 5.39698 1.6665 9.99935C1.6665 14.6017 5.39746 18.3327 9.99984 18.3327Z"
      stroke="#8391AA"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10 13.3333V10"
      stroke="#8391AA"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10 6.66602H10.01"
      stroke="#8391AA"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const WhatsappIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg height={size} width={size} viewBox="0 0 512 512" fill="none">
    <G>
      <Path
        fill="#EDEDED"
        d="M0,512l35.31-128C12.359,344.276,0,300.138,0,254.234C0,114.759,114.759,0,255.117,0 S512,114.759,512,254.234S395.476,512,255.117,512c-44.138,0-86.51-14.124-124.469-35.31L0,512z"
      />
      <Path
        fill="#55CD6C"
        d="M137.71,430.786l7.945,4.414c32.662,20.303,70.621,32.662,110.345,32.662 c115.641,0,211.862-96.221,211.862-213.628S371.641,44.138,255.117,44.138S44.138,137.71,44.138,254.234 c0,40.607,11.476,80.331,32.662,113.876l5.297,7.945l-20.303,74.152L137.71,430.786z"
      />
      <Path
        fill="#FEFEFE"
        d="M187.145,135.945l-16.772-0.883c-5.297,0-10.593,1.766-14.124,5.297 c-7.945,7.062-21.186,20.303-24.717,37.959c-6.179,26.483,3.531,58.262,26.483,90.041s67.09,82.979,144.772,105.048 c24.717,7.062,44.138,2.648,60.028-7.062c12.359-7.945,20.303-20.303,22.952-33.545l2.648-12.359 c0.883-3.531-0.883-7.945-4.414-9.71l-55.614-25.6c-3.531-1.766-7.945-0.883-10.593,2.648l-22.069,28.248 c-1.766,1.766-4.414,2.648-7.062,1.766c-15.007-5.297-65.324-26.483-92.69-79.448c-0.883-2.648-0.883-5.297,0.883-7.062 l21.186-23.834c1.766-2.648,2.648-6.179,1.766-8.828l-25.6-57.379C193.324,138.593,190.676,135.945,187.145,135.945"
      />
    </G>
  </Svg>
);

export const EmailIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg height={size} width={size} viewBox="0 0 512 512">
    <Path
      fill="#E6F3FF"
      d="M512 105.739v300.522c0 27.715-22.372 50.087-50.087 50.087H50.087C22.372 456.348 0 433.976 0 406.261V105.739c0-.89 0-1.781.111-2.671 1.336-25.6 21.704-45.969 47.304-47.304.89-.111 1.781-.111 2.671-.111h411.826c.89 0 1.892 0 2.783.111 25.489 1.336 45.857 21.704 47.193 47.193.112.89.112 1.892.112 2.782z"
    />
    <Path
      fill="#CFDBE6"
      d="M464.696 55.763c-.892-.111-1.891-.111-2.783-.111H256v400.696h205.913c27.715 0 50.087-22.372 50.087-50.087V105.739c0-.89 0-1.892-.111-2.783-1.336-25.488-21.705-45.857-47.193-47.193z"
    />
    <Path
      fill="#FF4B26"
      d="M511.889 102.957c-1.336-25.489-21.704-45.857-47.193-47.193C382.89 137.569 336.951 183.509 256 264.459 225.291 233.732 77.61 85.958 47.416 55.763c-25.6 1.336-45.969 21.704-47.304 47.304C0 103.958 0 104.849 0 105.739v300.522c0 27.715 22.372 50.087 50.087 50.087h16.696V169.739l165.621 165.51c6.456 6.567 15.026 9.795 23.597 9.795s17.141-3.228 23.597-9.795l165.621-165.621v286.72h16.696c27.715 0 50.087-22.372 50.087-50.087V105.739c0-.89 0-1.892-.111-2.782z"
    />
    <Path
      fill="#D93F21"
      d="M279.596 335.249l165.621-165.621v286.72h16.696c27.715 0 50.087-22.372 50.087-50.087V105.739c0-.89 0-1.892-.111-2.783-1.336-25.489-21.704-45.857-47.193-47.193C382.891 137.569 336.951 183.509 256 264.459v80.584c8.57-.09 17.141-3.317 23.596-9.794z"
    />
  </Svg>
);

export const DotIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 6 7" fill="none">
    <Circle cx={3} cy={3.5} r={3} fill={color} />
  </Svg>
);

export const EyeOpenIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 32 32">
    <Path
      fill="currentColor"
      d="M15.998 24c-3.31 0-6-2.69-6-6s2.69-6 6-6s6 2.69 6 6s-2.69 6-6 6m0-11c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5m13.5 5a.51.51 0 0 1-.49-.39c-.1-.43-2.55-10.61-13.01-10.61S3.088 17.18 2.988 17.61a.503.503 0 0 1-.98-.22C2.038 17.28 4.728 6 15.998 6s13.96 11.27 13.99 11.39c.06.27-.11.54-.38.6c-.04 0-.08.01-.11.01"
    />
  </Svg>
);

export const EyeOffIcon: React.FC<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 32 32">
    <Path
      fill="currentColor"
      d="m20.523 21.937l7.77 7.77a1 1 0 0 0 1.414-1.414l-26-26a1 1 0 1 0-1.414 1.414l5.156 5.157c-4.116 3.28-5.37 8.242-5.438 8.515l-.003.011a.503.503 0 0 0 .98.22c.068-.29 1.204-5.015 5.146-8.061l3.927 3.926A6 6 0 0 0 9.998 18c0 3.31 2.69 6 6 6c1.804 0 3.425-.8 4.525-2.063m-.708-.708A4.99 4.99 0 0 1 15.998 23c-2.76 0-5-2.24-5-5c0-1.53.688-2.9 1.77-3.816zm-4.262-9.213l1.016 1.016a5.005 5.005 0 0 1 4.397 4.397l1.016 1.016q.016-.22.016-.445a6.005 6.005 0 0 0-6.445-5.984m-4.99-4.99l.76.761C12.669 7.295 14.218 7 15.999 7c10.46 0 12.91 10.18 13.01 10.61c.06.23.26.39.49.39q.021 0 .047-.005q.03-.004.063-.005c.27-.06.44-.33.38-.6v-.004C29.92 17.116 27.19 6 15.997 6c-2.096 0-3.895.39-5.436 1.026"
    />
  </Svg>
);

export const ZoomIcon: React.FC<IconProps> = ({ size, color }) => <></>;
