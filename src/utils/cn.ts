/** Helper function to allow adding multiple conditional classnames to an element. */
export default function cn(...styles: (string | false | undefined)[]) {
  return styles.filter((s) => !!s).join(" ");
}
