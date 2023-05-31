export const noteContainerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.2,
    },
  },
};

export const mainTitleVariants = {
  hidden: {
    y: -300,
  },
  visible: {
    fontSize: '600%',
    color: '#045174',
    y: -10,
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 120,
    },
  },
};

