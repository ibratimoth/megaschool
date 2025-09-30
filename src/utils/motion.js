export const fadeInUp = {
  hidden: {
    y: 60,
    opacity: 0
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const slideInLeft = {
  hidden: {
    x: -100,
    opacity: 0
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

export const slideInRight = {
  hidden: {
    x: 100,
    opacity: 0
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

export const scaleIn = {
  hidden: {
    scale: 0.8,
    opacity: 0
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};