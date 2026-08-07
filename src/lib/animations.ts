import type { Variants, Transition } from "framer-motion";

const easeOut: Transition["ease"] = [0.16, 1, 0.3, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, ease: easeOut },
  },
};

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

export const staggerChildren: Variants = fadeUp;

export const hoverLift = {
  rest: { y: 0, boxShadow: "0 1px 2px rgba(46,43,40,0.06)" },
  hover: {
    y: -6,
    boxShadow: "0 24px 48px -12px rgba(46,43,40,0.18)",
    transition: { duration: 0.35, ease: easeOut },
  },
};

export const imageZoom = {
  rest: { scale: 1 },
  hover: {
    scale: 1.06,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.3, ease: easeOut },
  },
};

export const viewportOnce = { once: true, margin: "-80px" };
