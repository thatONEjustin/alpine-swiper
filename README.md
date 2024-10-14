# alpine-swiper

x-directive for initializing swiperjs

Only Navigation and Pagination modules are included by default. Passing the proper module in through the options object should work.

## example

```html

<html>
  <head>
    <!-- integrate swiperjs CSS how you want, either through npm or cdn -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
  </head>
  <body>
    <div 
      x-data="{
        swiperOptions: {
          slidesPerView: 3,
          autoplay: true
        },
        testMethod() {
          console.log($el.swiper)
        }
      }" 
      x-swiper="swiperOptions">

      <div class="swiper-wrapper" @click="testMethod">
        <div class="swiper-slide">
          1
        </div>
        <div class="swiper-slide">
          2
        </div>
        <div class="swiper-slide">
          3
        </div>
      </div>
    </div>
  </body>
</html>
```
