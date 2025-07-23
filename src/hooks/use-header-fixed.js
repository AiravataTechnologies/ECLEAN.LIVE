import { useEffect, useState } from "react";

export default function useHeaderFixed(y = 100) {
  const [headerFixed, setHeaderFixed] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        if (window.scrollY > y) {
          setHeaderFixed(true);
        } else {
          setHeaderFixed(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return headerFixed;
}
