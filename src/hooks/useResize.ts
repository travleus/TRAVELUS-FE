import { useEffect, useState } from 'react';

const useResize = () => {
  const [fullSize, setFullSize] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 768) setFullSize(false);

    const ResizeListener = () => {
      if (window.innerWidth < 768) setFullSize(false);
      else setFullSize(true);
    };
    window.addEventListener('resize', ResizeListener);

    return () => window.removeEventListener('resize', ResizeListener);
  }, [setFullSize]);

  return fullSize;
};

export default useResize;
