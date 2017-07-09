<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" scoped>
  @import "../assets/styles/constants/colors";
  @import "../assets/styles/constants/keyframes";

  article {
    display: flex;
    height: 100%;
    background-color: @color-gray;
    justify-content: center;
    align-items: center;
    div.flex-center {
      width: 80%;
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
            animation: shake 1s cubic-bezier(.36, .07, .19, .97) both;
            transform: translate3d(0, 0, 0);
            backface-visibility: hidden;

            width: 99%;
            margin-bottom: 1em;
            &:hover {
              transition-duration: 0.3s;
              width: 100%;
            }
          }
          p {
            color: @color-cloud;
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
          background-color: @color-light-blue;
          color: @color-white;
          cursor: pointer;
          font-weight: bold;
          &:hover, &:active {
            background-color: @color-light-blue-darker;
          }
        }
      }
    }
  }
</style>

<template>
  <article id="sign">
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
    <Popcorn>
      <img src="../assets/images/icon/ic_back_01.png">
      <img src="../assets/images/icon/ic_back_02.png">
      <img src="../assets/images/icon/ic_back_03.png">
      <img src="../assets/images/icon/ic_back_04.png">
    </Popcorn>
  </article>
</template>

<script>
  import OAuth from '@/assets/scripts/OAuth'
  import Popcorn from '@/components/Popcorn'

  export default {
    name: 'sign',
    components: {Popcorn},
    data () {
      return {
        msg: 'Hashtag has become a part of normal language.'
      }
    },
    methods: {
      sign () {
        OAuth.in()
            .then((data) => {
              console.log(data)
            })
            .catch((error) => {
              alert(error.message)
            })
      }
    },
    mounted () {
    },
    created () {
      OAuth.check()
          .then(() => {
            this.$router.push('/')
          })
          .catch(() => {})
    }
  }
</script>
