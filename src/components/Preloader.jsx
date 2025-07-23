import { useEffect, useState } from "react";

export default function Preloader() {
  const [isPreloaded, setPreloaded] = useState(false);

  const path = useLocation();

  useEffect(() => {
    setTimeout(() => {
      setPreloaded(true);
    }, 1000);

    setPreloaded(false);
  }, [path]);

  return (
    <div
      id="preloader"
      style={isPreloaded ? { display: "none" } : { display: "block" }}
    >
      <div id="loader" />
    </div>
  );
}
