import type { IconProps } from "./useIconProps";
import useIconProps from "./useIconProps";

export default function IconChevronRight(props: IconProps) {
  const iconProps = useIconProps(props);
  return (
    <svg {...iconProps}>
      <path d="M7.76608 15C7.55556 15 7.36842 14.933 7.22807 14.799C6.92398 14.531 6.92398 14.062 7.22807 13.794L11.1813 9.99721L7.22807 6.22278C6.92398 5.95477 6.92398 5.48576 7.22807 5.21776C7.50877 4.92741 8 4.92741 8.2807 5.21776L12.7719 9.50586C13.076 9.77387 13.076 10.2429 12.7719 10.5109L8.2807 14.799C8.14035 14.933 7.95322 15 7.76608 15Z" />
    </svg>
  );
}
