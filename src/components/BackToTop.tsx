import { useState, useEffect } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll handler to toggle visibility
  const handleScroll = () => {
    
    if (window.scrollY > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function to scroll to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed right-6 bottom-12 w-12 h-12 bg-blue-500 border-2 border-red-500 text-transparent invisible rounded-full shadow transition-all duration-300 ease-in-out cursor-pointer z-50 ${
        isVisible ? 'visible text-green-600 shadow-lg' : 'invisible'
      }`}
    >
      <span
        className={`block w-0 h-0 mx-auto mt-[18px] border-t-[10px] border-t-red-500 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent ${
          isVisible ? 'relative -top-6 border-t-white' : ''
        }`}
      ></span>
    </button>
  );
};

export default BackToTop;
