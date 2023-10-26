import type { IconProps } from "./useIconProps";
import useIconProps from "./useIconProps";

export default function IconChevronDown(props: IconProps) {
  const iconProps = useIconProps(props);
  return (
    <svg {...iconProps} viewBox="0 0 12 7">
      <path d="M5.60156 5.89844L1.10156 1.39844C0.867188 1.1875 0.867188 0.835938 1.10156 0.601562C1.3125 0.390625 1.66406 0.390625 1.89844 0.601562L6 4.72656L10.1016 0.625C10.3125 0.390625 10.6641 0.390625 10.8984 0.625C11.1094 0.835938 11.1094 1.1875 10.8984 1.39844L6.375 5.89844C6.16406 6.13281 5.8125 6.13281 5.60156 5.89844Z" />
    </svg>
  );
}
