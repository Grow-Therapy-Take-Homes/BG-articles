export function getBttnsRange(page: number): number[] {
  let end = page;

  while (end % 4 !== 0) {
    end++;
  }

  const start = Math.max(end - 3, 1);
  return Array.from({ length: 4 }, (_, i) => start + i);
}
