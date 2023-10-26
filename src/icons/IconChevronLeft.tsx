import type { IconProps } from "./useIconProps";
import useIconProps from "./useIconProps";

export default function IconChevronLeft(props: IconProps) {
  const iconProps = useIconProps(props);
  return (
    <svg {...iconProps}>
      <path d="M12.2339 15C12.4444 15 12.6316 14.933 12.7719 14.799C13.076 14.531 13.076 14.062 12.7719 13.794L8.81871 9.99721L12.7719 6.22278C13.076 5.95477 13.076 5.48576 12.7719 5.21776C12.4912 4.92741 12 4.92741 11.7193 5.21776L7.22807 9.50586C6.92398 9.77387 6.92398 10.2429 7.22807 10.5109L11.7193 14.799C11.8596 14.933 12.0468 15 12.2339 15Z" />
    </svg>
  );
}
