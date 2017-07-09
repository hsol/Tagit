<style>
  .popcorn > * {
    width: 3em;
    position: absolute;
    z-index: 0;
  }
</style>

<template>
  <div class="popcorn js_popping">
    <slot></slot>
  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    methods: {
      render (itemSelector, backSelector = 'article') {
        const maxPoppingCount = 3
        const delay = [400, 600, 800]
        let repeat = parseInt($(window).width() / 320)
        repeat = repeat < maxPoppingCount ? repeat : maxPoppingCount
        while (repeat--) {
          $(backSelector).append($(itemSelector).clone())
        }

        $(itemSelector).hide().each((index, item) => {
          let $item = $(item)
          setInterval(() => {
            $item.fadeOut(delay[parseInt(Math.random() * 3)], () => {
              let leftPos = Math.floor(Math.random() * ($(window).width() - $item.width() + 1))
              let topPos = Math.floor(Math.random() * ($(window).height() - $item.height() + 1))

              $item.css({left: leftPos, top: topPos}).fadeIn(delay[parseInt(Math.random() * 3)])
            }).show()
          }, delay[parseInt(Math.random() * 3)])
        })
      }
    },
    mounted () {
      this.render('.js_popping > *', '.js_popping')
    }
  }
</script>
