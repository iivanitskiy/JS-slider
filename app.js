function slidesPlugin(activeSlide = 3) {
  const slides = document.querySelectorAll('.slide')

  slides[activeSlide].classList.add('active')

  for (const slide of slides) {
    slide.addEventListener('click', () => {
      clearActiveClasses()
      slide.classList.add('active')
    })
  }
  
  const clearActiveClasses = function() {
    slides.forEach((slide) => {
      slide.classList.remove('active')
    })
  }
}

slidesPlugin()