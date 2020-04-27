export const fadeIn = {
  enter: {
    opacity: 1
  },
  exit: {
    opacity: 0
  }
}

export const moveInTop = {
  enter: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring' }
  },
  exit: {
    y: '-2rem',
    opacity: 0,
    transition: { type: 'spring' }
  }
}

export const moveInBottom = {
  enter: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring' }
  },
  exit: {
    y: '2rem',
    opacity: 0,
    transition: { type: 'spring' }
  }
}

export const moveInRight = {
  enter: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring' }
  },
  exit: {
    x: '2rem',
    opacity: 0,
    transition: { type: 'spring' }
  }
}

