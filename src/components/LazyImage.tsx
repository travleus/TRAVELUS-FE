import { useEffect, useRef, useState } from 'react';

interface ILazyImageProps {
  src: string;
  className?: string;
  onClick?: () => void;
  alt: string;
}

const LazyImage = ({ src, className, onClick, alt }: ILazyImageProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const ref = useRef<HTMLImageElement>(null);
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    observer.current = new IntersectionObserver(intersectionObserver);
    ref.current && observer.current?.observe(ref.current);
  }, []);

  const intersectionObserver = (entries: IntersectionObserverEntry[], io: IntersectionObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setIsLoading(true);
        io.unobserve(entry.target);
      }
    });
  };

  return (
    <img
      ref={ref}
      src={isLoading ? src : 'https://via.placeholder.com/300/FFFFFF/000000.png?text=TRAVELUS'}
      className={className}
      onClick={onClick}
      alt={alt}
      loading={'lazy'}
    />
  );
};

export default LazyImage;
