import swiper from '../src/index'

document.addEventListener('alpine:initializing', () => {
  window.Alpine.plugin(swiper)
})
