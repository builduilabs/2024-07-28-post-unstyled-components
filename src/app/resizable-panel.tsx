// resizable-panel.tsx

'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ComponentProps, ReactNode, createContext, useContext } from 'react';
import useMeasure from 'react-use-measure';

let PanelContext = createContext({ value: '' });

// let transition = { type: 'spring', bounce: 0, duration: 0.5 };
// let transition = { type: 'spring', bounce: 0, duration: 0.5 };
let transition = { type: 'spring', bounce: 0, duration: 0.35 };

export function Root({
  children,
  value,
  ...rest
}: {
  children: ReactNode;
  value: string;
} & ComponentProps<'div'>) {
  let [ref, bounds] = useMeasure();

  return (
    <motion.div
      animate={{ height: bounds.height > 0 ? bounds.height : undefined }}
      // transition={{ type: 'spring', bounce: 0, duration: 0.8 }}
      transition={transition}
      style={{ overflow: 'hidden', position: 'relative' }}
    >
      <div ref={ref}>
        <PanelContext.Provider value={{ value }}>
          <div {...rest}>{children}</div>
        </PanelContext.Provider>
      </div>
    </motion.div>
  );
}

export function Content({
  value,
  children,
  ...rest
}: {
  value: string;
  children: ReactNode;
} & ComponentProps<'div'>) {
  let panelContext = useContext(PanelContext);
  let isActive = panelContext.value === value;

  return (
    <AnimatePresence mode="popLayout" initial={false}>
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: transition.duration / 4,
              delay: transition.duration / 4,
            },
          }}
          exit={{
            opacity: 0,
            transition: {
              duration: transition.duration / 4,
            },
          }}
        >
          <div {...rest}>{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
