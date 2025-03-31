const hiddenElements = document.querySelectorAll('.hidden')

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
    } else {
      entry.target.classList.remove('visible') // For endless animations. Remove if you wants to run animation only once
    }
  })
})

hiddenElements.forEach(e => observer.observe(e))