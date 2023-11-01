export function getShimmerWidth(w?: number | string, minW?: number, maxW?: number) {
  if (w === "random") {
    if (typeof minW === "number" && typeof maxW === "number") {
      return Math.round(Math.random() * (maxW - minW) + minW);
    }

    return `${Math.round(Math.random() * (90 - 30) + 30)}%`;
  }

  return w || "60%";
}
