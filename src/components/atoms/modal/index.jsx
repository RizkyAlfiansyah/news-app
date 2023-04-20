'use client';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useMemo } from 'react';
import OutsideHandler from 'react-outside-click-handler';

const ModalLayout = (props) => {
  const { isOpen, onClose, children, enableOverlayScroll, width } = props;
  useEffect(() => {
    if (!enableOverlayScroll) {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      }

      return () => {
        document.body.style.overflow = 'auto';
        document.body.style.overflowX = 'hidden';
      };
    }
  }, [isOpen, enableOverlayScroll]);

  // styling for modal overlay
  const overlayVariants = useMemo(() => {
    return {
      closed: {
        opacity: 0,
        transition: { duration: 0.1 },
      },
      open: { opacity: 1, transition: { duration: 0.1 } },
    };
  }, []);

  // styling for modal content
  const contentVariants = useMemo(() => {
    return {
      open: {
        opacity: 1,
        scale: 1,
        transition: { type: 'spring', duration: 0.5 },
      },
      closed: { opacity: 0, scale: 0.5, transition: { duration: 0.25 } },
    };
  }, [width]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          className="bg-black bg-opacity-80 h-screen fixed top-0 left-0 w-screen z-20 flex justify-center items-center"
          initial="closed"
          animate="open"
          exit="closed"
          variants={overlayVariants}
        >
          <OutsideHandler onOutsideClick={() => onClose()}>
            <motion.div
              className="bg-white max-h-[70vh] h-fit relative rounded-xl overflow-auto"
              initial="closed"
              animate="open"
              exit="closed"
              variants={contentVariants}
            >
              <article className="w-full flex flex-col gap-3 bg-white py-3 px-4 overflow-y-auto rounded-md">
                {children}
              </article>
            </motion.div>
          </OutsideHandler>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default ModalLayout;
