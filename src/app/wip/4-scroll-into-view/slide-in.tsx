'use client';

import { useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';

export default function SlideIn({ children }: { children: ReactNode }) {
  let ref = useRef<HTMLDivElement>(null);
  let isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className={`${
        isInView
          ? 'translate-x-0 delay-500 duration-1000'
          : 'translate-x-full duration-0'
      } transition`}
    >
      {children}
    </div>
  );
}
