<style lang="less" rel="stylesheet/less">
    * {
        font-family: 'Noto Sans Korean', sans-serif;
        font-size: 13pt;
        box-sizing: border-box;
        outline:none;
    }

    html {
        height: 100%;
        body {
            height: 100%;
            & > * {
                height: 100%;
            }
        }
    }

    @media screen and (max-width: 1024px) {
        * {
            font-size: 12pt;
        }
    }

    @media screen and (max-width: 768px) {
        * {
            font-size: 11pt;
        }
    }

    @media screen and (max-width: 425px) {
        * {
            font-size: 10pt;
        }
    }

    @media screen and (max-width: 375px) {
        * {
            font-size: 9pt;
        }
    }

    @media screen and (max-width: 320px) {
        * {
            font-size: 8.5pt;
        }
    }
</style>

<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>
