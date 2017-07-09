<style lang="less" rel="stylesheet/less" scoped>
  @import "../../../assets/styles/constants/colors";

  li.bundle {
    background-color: @color-white;
    margin-bottom: 0.5em;

    border-radius: 0.5em;
    padding: 0 0.5em;

    .header-wrap {
      padding-top: 0.3em;
      padding-bottom: 0.5em;

      i.tag-icon {
        vertical-align: text-top;
        display: inline-block;
        width: 1.8em;
        img {
          width: 100%;
        }
      }
      a.tag-name {
        vertical-align: middle;
        color: @color-soft-black;
        font-weight: bold;
        font-size: 1.1em;
        text-decoration: none;
      }
    }
    .card-wrap {
      ul.cards {
        padding-bottom: 0.3em;
        &.layout-single {
          li.card {
            width: 100%;
            padding-top: 70%;
            margin: 0.05em 0;
          }
        }
        &.layout-odd {
          li.card {
            &:nth-child(1) {
              width: 100%;
              margin-top: 0.05em;
            }
            &:nth-child(2n-1) {
              margin-right: 0;
            }
            &:nth-child(2n) {
              margin-left: 0;
            }
          }
        }
        &.layout-even {
          li.card {
            &:nth-child(-n+2) {
              margin-top: 0.05em;
            }
            &:nth-child(n+2) {
              margin-bottom: 0.05em;
            }
            &:nth-child(2n-1) {
              margin-left: 0;
            }
            &:nth-child(2n) {
              margin-right: 0;
            }
            &:nth-child(n+5) {
              display: none;
            }
          }
        }
        li.card {
          display: inline-block;

          width: calc(~"50% - 0.05em");
          padding-top: 35%;
          position: relative;

          background-size: cover;
          background-color: @color-gray;
          background-position: center center;

          margin: 0 0.05em 0.05em 0.05em;

          overflow: hidden;

          &:before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-color: @color-black;
            opacity: 0.4;
            z-index: 0;
          }

          & > * {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
          }

          .card-memo {
            display: flex;
            align-items: center;
            justify-content: center;

            padding: 1em;
            text-align: center;

            color: @color-cloud;
          }
        }
      }
    }
  }
</style>
<template>
  <li class="bundle">
    <div class="header-wrap">
      <i class="tag-icon"><img src="../../../assets/images/icon/sharp.png"></i>
      <a class="tag-name" :href="'/tag/' + item.tag.name">{{ item.tag.name }}</a>
    </div>
    <div class="card-wrap">
      <ul class="cards" :class="cardLayout">
        <li v-for="card in item.cards" class="card"
            :style="{ 'background-image': 'url(' + card.thumbnail + ')' }">
          <div class="card-memo">{{ card.preCompliedMemo }}</div>
        </li>
      </ul>
    </div>
  </li>
</template>
<script>
  import layout from '@/config/layout'
  import LayoutAdjuster from '@/assets/scripts/lib/layoutAdjuster'

  export default {
    name: 'bundle',
    props: ['bundle'],
    data () {
      this.bundle.cards = this.makePreCompliedCardMemo(this.bundle.cards)
      return {
        item: this.bundle,
        cardLayout: ''
      }
    },
    methods: {
      adjustLayout () {
        const layoutAdjuster = new LayoutAdjuster()
        let cardLayout = layoutAdjuster.getLayoutNameBySize(layout.bundles, this.bundle.cards.length)
        if (cardLayout) {
          this.cardLayout = cardLayout
        }
      },
      renderMemoWithEllipsis () {
        this.$set(this.item, 'cards', this.makePreCompliedCardMemo(this.item.cards))
        this.$forceUpdate()
      },
      makeBundleCardMemoMaxLength () {
        return (document.body.clientWidth * 3 - 420) / 17
      },
      makePreCompliedCardMemo (cards) {
        const contentMaxLength = parseInt(this.makeBundleCardMemoMaxLength())
        for (let cardIndex in cards) {
          if (!isNaN(cardIndex) && cards.hasOwnProperty(cardIndex)) {
            let card = cards[cardIndex]

            if (card.memo.length > contentMaxLength) {
              card.preCompliedMemo = card.memo.substring(0, contentMaxLength - 3) + '...'
            }

            cards[cardIndex] = card
          }
        }

        return cards
      }
    },
    mounted () {
      this.adjustLayout()

      window.addEventListener('resize', this.renderMemoWithEllipsis)
    }
  }
</script>
