<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" scoped>
    @import "../assets/styles/colors";

    article {
        display: flex;
        height: 100%;
        background-color: @color_gray;
        justify-content: center;
        align-items: center;
        div.flex-center {
            width: 80%;
        }

        img.popcorn {
            width: 3em;
            position: absolute;
            z-index: 0;
        }

        section {
            &.logo {
                display: flex;
                justify-content: center;
                align-items: center;
                .wrap {
                    width: 80%;
                    max-width: 640px;
                    min-width: 190px;
                    text-align: center;
                    img {
                        width: 100%;
                        margin-bottom: 1em;
                    }
                    p {
                        color: @color_cloud;
                        font-size: 0.8em;
                        line-height: 1.6em;
                    }
                }
            }
            &.function {
                text-align: center;
                padding: 4em 1em 1em 1em;
                margin-bottom: -4em;
                button {
                    width: 90%;
                    max-width: 510px;
                    min-width: 150px;
                    border: 0;
                    border-radius: 3em;
                    padding: 0.8em 0;
                    background-color: @color_light_blue;
                    color: @color_white;
                    cursor: pointer;
                    &:hover, &:active {
                        background-color: @color_light_blue_hover;
                    }
                }
            }
        }
    }
</style>

<template>
    <article id="article">
        <div class="flex-center">
            <section class="logo">
                <div class="wrap">
                    <img class="main" src="../assets/images/logo.png">
                    <p>{{ msg }}</p>
                </div>
            </section>
            <section class="function">
                <button v-on:click="sign">Sign with Facebook</button>
            </section>
        </div>
        <img class="popcorn js_popping" src="../assets/images/icon/ic_back_01.png">
        <img class="popcorn js_popping" src="../assets/images/icon/ic_back_02.png">
        <img class="popcorn js_popping" src="../assets/images/icon/ic_back_03.png">
        <img class="popcorn js_popping" src="../assets/images/icon/ic_back_04.png">
    </article>
</template>

<script>
  import $ from 'jquery'
  import '@/components/Library/Auth'
  import OAuth from '@/assets/scripts/oauth'

  export default {
    name: 'intro',
    data () {
      return {
        msg: 'Hashtag has become a part of normal language.'
      }
    },
    methods: {
      sign () {
        OAuth.in()
      },
      popcorn (itemSelector, backSelector = 'article#article') {
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
      this.popcorn('.js_popping')
    },
    created () {
      OAuth.check()
        .then(() => {
          this.$router.push('/')
        })
    }
  }
</script>
