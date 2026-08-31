export const studioEase: [number, number, number, number] = [0.16, 1, 0.3, 1]

export const revealUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export const revealSoft = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const sectionTransition = (delay = 0) => ({
  duration: 0.72,
  delay,
  ease: studioEase,
})
