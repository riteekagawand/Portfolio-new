import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const DEFAULT_BTN_CLS =
  "fixed bottom-8 right-6 z-50 flex items-center justify-center rounded-full p-4 hover:text-xl transition-all duration-300 ease-out";

// Bounce animation using CSS keyframes
const bounceAnimation = `
  @keyframes bounce {
    0%, 30% {
      transform: translateY(0);
    }
    60% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0);
    }
  }

  .animate-bounce-slow {
    animation: bounce 2s ease infinite; /* Slow down the animation with a longer duration */
  }
`;

const SCROLL_THRESHOLD = 50;

const ScrollToTop = () => {
  const [btnCls, setBtnCls] = useState(DEFAULT_BTN_CLS + " hidden");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > SCROLL_THRESHOLD) {
        setBtnCls(DEFAULT_BTN_CLS); // Show button when scrolled past the threshold
      } else {
        setBtnCls(DEFAULT_BTN_CLS + " hidden"); // Hide button when at the top
      }
    };

    // Set the button visibility on page load
    handleScroll();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll, { passive: true });
    };
  }, []);

  const onClickBtn = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <style>{bounceAnimation}</style> {/* Add bounce animation CSS */}
      <button
        className={`${btnCls} animate-bounce-slow`} // Apply the slow bounce animation
        onClick={onClickBtn}
        style={{
          position: "fixed",
          bottom: "8px",
          right: "6px",
          marginBottom: "30px",
          marginRight: "20px",
          zIndex: 50, // Ensure it appears above other content
          background: "linear-gradient(to bottom right, #1e90ff, #32cd32)", // Apply gradient to button
          border: "none", // Ensure no border
        }}
        aria-label="Scroll to top"
      >
        <span
          style={{
            color: "white", // Ensure the arrow icon is white
          }}
        >
          <FaArrowUp size={24} />
        </span>
      </button>
    </>
  );
};

export default ScrollToTop;
