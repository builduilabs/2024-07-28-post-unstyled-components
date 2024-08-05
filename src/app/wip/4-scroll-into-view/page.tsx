'use client';

import { useInView } from 'framer-motion';
import { useRef } from 'react';
import SlideIn from './slide-in';

export default function Page() {
  let ref = useRef<HTMLDivElement>(null);
  let isInView = useInView(ref);

  return (
    <div>
      <div className="h-80 bg-green-500" />
      <div className="h-80 bg-red-500" />
      <div className="h-80 bg-blue-500" />
      <div className="h-80 bg-green-500" />
      <div className="h-80 bg-red-500" />
      <div className="h-80 bg-blue-500" />
      <div className="h-80 bg-green-500" />
      <div className="h-80 bg-red-500" />
      <div className="h-80 bg-blue-500" />

      <div
        ref={ref}
        className={`${
          isInView
            ? 'translate-x-0 delay-500 duration-1000'
            : 'translate-x-full duration-0'
        } transition h-80 bg-black`}
      />

      <div className="h-80 bg-red-500" />
      <div className="h-80 bg-green-500" />
      <div className="h-80 bg-red-500" />
      <div className="h-80 bg-blue-500" />
      <div className="h-80 bg-green-500" />
      <div className="h-80 bg-red-500" />
      <SlideIn>
        <div className="h-80 bg-blue-500" />
      </SlideIn>
      <div className="h-80 bg-green-500" />
      <div className="h-80 bg-red-500" />
      <div className="h-80 bg-blue-500" />
    </div>
  );
}
