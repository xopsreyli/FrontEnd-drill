const sides = document.querySelectorAll('.side')
const sidesText = document.querySelectorAll('.skill-group-name')
const skillBoxs = document.querySelectorAll('.skill-box')
const viewportCenter = window.innerHeight / 2
let prevTitle = ''

document.addEventListener('scroll', () => {
  skillBoxs.forEach(e => customizeCube(e))
})

const customizeCube = (box) => {
  const title = box.dataset.title
  const color = box.dataset.color
  const rect = box.getBoundingClientRect()

  if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
    if (prevTitle !== title) {
      sidesText.forEach(e => {
        e.textContent = title
        e.style.textShadow = `0 0 8px ${color}`
      })
      prevTitle = title
      sides.forEach(e => e.style.borderColor = color)
    }
  }
  else {
    if (prevTitle === title) {
      prevTitle = ''
      sidesText.forEach(e => e.textContent = '')
      sides.forEach(e => e.style.borderColor = '#eee')
    }
  }
}
