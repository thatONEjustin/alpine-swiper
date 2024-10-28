import {
  Navigation,
  Autoplay,
  Pagination,
  EffectFade,
  Controller,
} from "swiper/modules";

import Swiper from 'swiper';
import { SwiperModule } from "swiper/types";
import type { Alpine as AlpineInstance } from "alpinejs";

export default function (Alpine: AlpineInstance) {
  Alpine.directive('swiper', SwiperDirective)
}

const SwiperDirective = async (element: HTMLElement, { expression, modifiers }, { Alpine, evaluate }) => {
  const user_options: Object = evaluate(expression)
  const modules = addModifiers(modifiers)

  const default_options: Object = {
    modules: modules
  }

  await Alpine.$nextTick

  const swiper_options: Object = { ...user_options, ...default_options }

  /* tslint:disable:no-unused-variable */
  const _slideshow = new Swiper(element, swiper_options)
}

function addModifiers(directive_modifiers: Array<string>): SwiperModule[] {
  let modules: Array<SwiperModule> = [Navigation, Pagination]
  if (directive_modifiers.length === 0) {
    return modules
  }

  let added_by_modifier: Array<SwiperModule> = []

  for (const modifier of directive_modifiers) {
    switch (modifier) {
      case "autoplay":
        added_by_modifier.push(Autoplay)
        break
      case "fade":
        added_by_modifier.push(EffectFade)
        break
      case "controller":
        added_by_modifier.push(Controller)
        break
      default:
        break
    }
  }

  return [...added_by_modifier, ...modules]
}
