import useScrollTop from "../hooks/use-scroll-top";

export default function ScrollTop() {
  const isScroll = useScrollTop(250);

  // scroll to top
  const scrollHandler = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <button
      className={`scroll-top scroll-to-target ${isScroll ? "open" : ""}`}
      onClick={scrollHandler}
    >
      <i className="fa-solid fa-angles-up" />
    </button>
  );
}
