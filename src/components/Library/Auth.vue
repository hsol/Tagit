<template></template>

<script>
  import OAuth from '@/assets/scripts/oauth'

  export default {
    name: 'auth',
    created () {
      OAuth.check().then((user) => {
      }).catch(() => {
        OAuth.in().then(function (result) {
          if (result.credential) {
            window.console.log(result.credential.accessToken)
          }

          window.console.log(result)
        }).catch(function (error) {
          window.console.log(error)
        })
      })
    }
  }
</script>
