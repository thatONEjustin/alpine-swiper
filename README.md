# alpine-swiper

[alpinejs](https://alpinejs.dev/) directive for using the [swiperjs](https://swiperjs.com/) library

NOTE: only Navigation and Pagination modules are included by default.

## example

NOTE: below is the most bare bones way to use this directive.

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

    <script defer src="./dist/example.js"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
  </body>
</html>
```
