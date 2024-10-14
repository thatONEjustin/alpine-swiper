import swiper from '../dist/module.esm'
test('module import as function', () => {
  expect(typeof swiper).toBe('function')
})
