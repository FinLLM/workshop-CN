const setRem = () => {
  const screenWidth = window.innerWidth || document.documentElement.clientWidth
  let scale = 1
  const maxWidth = 750

  if (screenWidth >= maxWidth) {
    scale = screenWidth / 1920
  } else if (screenWidth >= 375) {
    scale = screenWidth / 1600
  } else {
    scale = screenWidth / 1280
  }

  const rem = 16 * scale
  document.documentElement.style.fontSize = `${rem}px`
}

export { setRem }
