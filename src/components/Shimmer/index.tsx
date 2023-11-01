import cn from "@utils/cn";
import styles from "./styles.module.css";
import { getShimmerWidth } from "./helpers";

export type ShimmerProps = {
  block?: boolean;
  height?: number | string;
  width?: number | string;
  maxWidth?: number;
  minWidth?: number;
  radius?: string;
};

export default function Shimmer({
  block = false,
  height = "1.25ex",
  radius = "4px",
  width,
  minWidth,
  maxWidth,
}: ShimmerProps) {
  return (
    <div
      aria-busy="true"
      className={cn(styles.shimmer, block && styles.shimmer_block)}
      style={{
        borderRadius: radius,
        width: getShimmerWidth(width, minWidth, maxWidth),
        height,
        minWidth,
        maxWidth,
      }}
    />
  );
}
