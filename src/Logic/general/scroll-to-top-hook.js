// React hook for scroll to top functionality
import { useCallback } from "react";

const useScrollToTop = () => {
  const scrollToTop = useCallback((smooth = true) => {
    window.scrollTo({
      top: 0,
      behavior: smooth ? "smooth" : "auto",
    });
  }, []);

  return scrollToTop;
};

export default useScrollToTop;
