<style>
  body {
    background-color: #eaeaea;
  }
</style>

<template>
  <div id="app-list">
    <FixedHeader></FixedHeader>
    <router-view></router-view>
  </div>
</template>

<script>
  import OAuth from '@/assets/scripts/OAuth'
  import FixedHeader from '@/components/FixedHeader'

  export default {
    components: {FixedHeader},
    created () {
      OAuth.check()
          .then(() => {})
          .catch(() => {
            this.$router.push('/login')
          })
    }
  }
</script>
