import { Navigation, Pagination } from 'swiper/modules';
import Swiper from 'swiper';

export default function (Alpine) {
  Alpine.directive('swiper', (
    element,
    { expression },
    { evaluate }
  ) => {
    const user_options = evaluate(expression)

    const default_options = {
      modules: [Navigation, Pagination]
    }

    const options = { ...default_options, ...user_options }

    // console.log(options)

    const _slideshow = new Swiper(element)

    // console.log(_slideshow)
  })
}
