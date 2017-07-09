<style lang="less" rel="stylesheet">
  @import "../../assets/styles/constants/colors";

  article#e404 {
    display: flex;
    background-color: @color-gray;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    pre {
      padding: 0.3em 1em;
      text-align: center;
      color: @color-white;
      font-weight: bold;
      font-size: 1em;
      line-height: 1.5em;
    }

    -webkit-box-shadow: inset 0 0 109px 0 rgba(0, 0, 0, 0.75);
    -moz-box-shadow: inset 0 0 109px 0 rgba(0, 0, 0, 0.75);
    box-shadow: inset 0 0 109px 0 rgba(0, 0, 0, 0.75);
  }
</style>

<template>
  <article id="e404">
    <pre>{{ msg }}</pre>
    <Popcorn>
      <img src="../../assets/images/icon/ic_not_found.png">
      <img src="../../assets/images/icon/ic_not_found.png">
      <img src="../../assets/images/icon/ic_not_found.png">
    </Popcorn>
  </article>
</template>

<script>
  import Popcorn from '@/components/Popcorn'
  export default
  {
    name: 'not_found',
    components: {Popcorn},
    data () {
      return {
        msg: '페이지를 찾을 수 없습니다. \n잠시 후 처음 화면으로 이동합니다.'
      }
    },
    mounted () {
      setTimeout(() => {
        this.$router.push('/')
      }, 3000)
    }
  }
</script>
