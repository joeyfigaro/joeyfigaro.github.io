import facepaint from 'facepaint'

// const breakpoints = [374, 767, 1023, 1439, 1700]
// 576: landscape phones
// 768: tablets
// 992: desktops
// 1200: large desktops
const breakpoints = [375, 576, 768, 992, 1200]

const mq = facepaint(
  breakpoints.map(breakpoint => `@media (min-width: ${breakpoint}px)`),
  { overlap: true }
)

export const px = (values: number[]) => ({
  paddingLeft: values,
  paddingRight: values
})

export const py = (values: number[]) => ({
  paddingTop: values,
  paddingBottom: values
})

export default mq
