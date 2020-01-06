import facepaint from 'facepaint'

const breakpoints = [374, 767, 1023, 1439]

const mq = facepaint(breakpoints.map(breakpoint => `@media (min-width: ${breakpoint}px)`))

export default mq