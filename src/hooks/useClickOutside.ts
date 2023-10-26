import { useEffect, useRef } from "react";

export default function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  onClickOutside: () => void,
) {
  const ref = useRef<T>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (!ref.current?.contains(event.target as Node)) {
      onClickOutside();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return ref;
}
