import type React from "react";
import type { SVGProps } from "react";

export type IconProps = {
  accessibilityLabel?: string;
  decorative?: boolean;
  flip?: boolean;
  flipVertical?: boolean;
  size?: number | string;
  color?: string;
  inline?: boolean;
};

export type Props = {
  focusable: string;
  role: string;
  style: React.CSSProperties;
};

export default function useIconProps({
  accessibilityLabel,
  color = "currentColor",
  decorative = true,
  flip = false,
  flipVertical = false,
  inline = false,
  size = "1em",
}: IconProps) {
  const iconProps: SVGProps<SVGSVGElement> = {
    focusable: "false",
    role: decorative ? "presentation" : "img",
    style: {
      height: size,
      width: size,
      display: inline ? "inline" : "block",
      fill: color,
      transform:
        flip || flipVertical ? `scale(${flip ? -1 : 1}, ${flipVertical ? -1 : 1})` : "scale(1)", // keep scale(1) for transition flipping
      transition: "transform 300ms ease-out",
    },
    ...(decorative ? { "aria-hidden": true } : {}),
    ...(accessibilityLabel ? { "aria-label": accessibilityLabel } : {}),
  };

  return iconProps;
}
