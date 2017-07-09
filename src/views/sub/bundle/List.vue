<style lang="less" rel="stylesheet/less" scoped>
  @import "../../../assets/styles/constants/sizes";

  article#list {
    width: 100%;
    max-width: @size-laptop;
    margin: 0 auto;
    padding: 0.5em;
  }
</style>

<template>
  <article id="list">
    <ul class="bundles" :class="bundleLayout">
      <Bundle v-for="bundle in bundles" :key="bundle.id" :bundle="bundle"></Bundle>
    </ul>
  </article>
</template>

<script>
  import CardList from '@/views/sub/list/List'
  import Bundle from '@/views/sub/bundle/Bundle'
  import LoremIpsum from '@/assets/scripts/lib/loremIpsum'

  let lI = new LoremIpsum()

  export default {
    name: 'list',
    components: {Bundle},
    data () {
      return {
        bundleLayout: 'test',
        bundles: this.makeIpsumBundles()
      }
    },
    methods: {
      makeIpsumBundles () {
        let bundles = []
        let bundleCount = Math.floor((Math.random() * 4) + 2)

        while (bundleCount--) {
          bundles.push({
            tag: {
              name: lI.generate(3).replace('.', '')
            },
            cards: CardList.methods.makeIpsumCards(Math.floor((Math.random() * 5) + 1))
          })
        }

        return bundles
      }
    }
  }
</script>
