export default function cn(...styles: (string | false | undefined)[]) {
  return styles.filter((s) => !!s).join(" ");
}
