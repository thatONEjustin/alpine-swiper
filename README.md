# alpine-swiper

## New 1.3.0

updated swiperjs to 14.1.0

## 1.2.8

Thumbs module is now included by default.

```html
<div x-data x-swiper.thumbs>
  <!-- ... the rest of the component -->
</div>
```

example updated as well!

[alpinejs](https://alpinejs.dev/) directive for using [swiperjs](https://swiperjs.com/)

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
