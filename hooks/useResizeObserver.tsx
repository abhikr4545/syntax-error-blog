import { useEffect, useState } from "react";

export const useResizeObserver = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth);

      const updateWidth = () => {
        setWidth(window.innerWidth);
      };

      window.addEventListener("resize", updateWidth);

      return () => {
        window.removeEventListener("resize", updateWidth);
      };
    }
  },[])

  return [width];
}
