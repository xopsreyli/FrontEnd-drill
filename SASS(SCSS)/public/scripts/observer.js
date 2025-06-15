const hiddenElements = document.querySelectorAll('.hidden')

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(
      entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      }
    )
  },
  {
    threshold: 0.5,
  }
)

hiddenElements.forEach(e => observer.observe(e))