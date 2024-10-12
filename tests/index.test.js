import swiper from '../dist/swiper.esm'

test('module import as function', () => {
  expect(typeof swiper).toBe('function')
})
