<style lang="less" rel="stylesheet/less" scoped>
  @import "../../../assets/styles/constants/sizes";

  article#list {
    width: 100%;
    max-width: @size-laptop;
    margin: 0 auto;
  }
</style>

<template>
  <article id="list">
    <ul class="cards" :class="cardLayout">
      <Card v-for="card in cards" :key="card.id" :card="card"></Card>
    </ul>
  </article>
</template>

<script>
  import Card from '@/views/sub/list/Card'
  import layout from '@/config/layout'
  import LayoutAdjuster from '@/assets/scripts/lib/layoutAdjuster'
  import LoremIpsum from '@/assets/scripts/lib/loremIpsum'

  let lI = new LoremIpsum()

  export default {
    name: 'list',
    components: {Card},
    data () {
      return {
        cardLayout: '',
        cards: this.makeIpsumCards(Math.floor((Math.random() * 15) + 5))
      }
    },
    methods: {
      adjustLayout () {
        const layoutAdjuster = new LayoutAdjuster()
        this.cardLayout = layoutAdjuster.getLayoutName(layout.cards)
      },
      makeIpsumCards (cardCount) {
        let cards = []
        let cardTypes = ['link', 'status', 'photo', 'video', 'offer']
        let cardSizes = [320, 375, 425, 768]
        while (cardCount--) {
          let tags = []
          let tagCount = Math.floor((Math.random() * 4) + 1)
          while (tagCount--) {
            tags.push({
              name: lI.generate(3)
            })
          }
          let type = cardTypes[Math.floor((Math.random()) * 5)]
          cards.push({
            id: 10 - cardCount,
            type: type,
            thumbnail: (type === 'photo' || type === 'video')
                ? `http://loremflickr.com/${cardSizes[Math.floor((Math.random() * 4))]}/${cardSizes[Math.floor((Math.random() * 4))]}`
                : '',
            memo: lI.generate(Math.floor((Math.random() * 80) + 50)),
            tags: tags
          })
        }

        return cards
      }
    },
    mounted () {
      this.adjustLayout()

      window.addEventListener('resize', this.adjustLayout)
    }
  }
</script>
